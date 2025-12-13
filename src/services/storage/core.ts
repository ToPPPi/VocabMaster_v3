
import { UserProgress } from '../../types';

export const STORAGE_KEY = 'vocabmaster_user_v5_ru';
// Telegram CloudStorage limits: 4096 bytes per key. 
// UTF-8 chars can be up to 4 bytes. 
// Increased to 2500 to reduce total key count for 10k words (approx 1.5MB / 2500 ~ 600 keys)
const CHUNK_SIZE = 2500; 

export const INITIAL_PROGRESS: UserProgress = {
  xp: 0,
  streak: 0,
  lastLoginDate: '', 
  wordsLearnedToday: 0,
  aiGenerationsToday: 0,
  darkMode: false, // Default
  premiumStatus: false,
  premiumExpiration: null,
  wordProgress: {},
  wordComments: {},
  usedPromoCodes: [],
  hasSeenOnboarding: false,
  userName: '',
  photoUrl: '',
  customWords: [],
  dailyProgressByLevel: {},
  wallet: { coins: 100 }, 
  inventory: { streakFreeze: 0, timeFreeze: 1, bomb: 1 },
  blitzHighScores: {}
};

// --- MEMORY CACHE (CRITICAL FOR PERFORMANCE) ---
// This prevents race conditions where rapid clicks read stale data from disk.
let memoryCache: UserProgress | null = null;

// --- DEBOUNCE TIMER ---
// Prevents spamming storage API when user taps "like" rapidly
let saveDebounceTimer: any = null;

// --- TIME SECURITY (Anti-Cheat) ---
let serverTimeOffset = 0;
let isTimeSynced = false;

const syncTime = async () => {
    if (!navigator.onLine || isTimeSynced) return;
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 2000); 
        
        const res = await fetch('https://worldtimeapi.org/api/ip', { 
            signal: controller.signal,
        });
        clearTimeout(timeoutId);
        
        if (res.ok) {
            const data = await res.json();
            const serverTime = new Date(data.datetime).getTime();
            const localTime = Date.now();
            serverTimeOffset = serverTime - localTime;
            isTimeSynced = true;
        }
    } catch (e) {
        // Silently fail to local time
    }
};

export const getSecureNow = () => Date.now() + serverTimeOffset;

// --- CLOUD STORAGE HELPERS (Promisified) ---

const tgStorage = {
    isSupported: () => {
        const webApp = window.Telegram?.WebApp;
        return webApp && webApp.isVersionAtLeast && webApp.isVersionAtLeast('6.9');
    },
    setItem: (key: string, value: string): Promise<boolean> => {
        return new Promise((resolve) => {
            window.Telegram!.WebApp.CloudStorage.setItem(key, value, (err, stored) => {
                if (err) {
                    console.error('CloudStorage setItem error:', err);
                    resolve(false);
                } else {
                    resolve(stored);
                }
            });
        });
    },
    getItem: (key: string): Promise<string | null> => {
        return new Promise((resolve) => {
            window.Telegram!.WebApp.CloudStorage.getItem(key, (err, value) => {
                if (err) {
                    console.error('CloudStorage getItem error:', err);
                    resolve(null);
                } else {
                    resolve(value || null);
                }
            });
        });
    },
    getItems: (keys: string[]): Promise<Record<string, string> | null> => {
        return new Promise((resolve) => {
            window.Telegram!.WebApp.CloudStorage.getItems(keys, (err, values) => {
                if (err) {
                    console.error('CloudStorage getItems error:', err);
                    resolve(null);
                } else {
                    resolve(values || null);
                }
            });
        });
    },
    removeItem: (key: string): Promise<boolean> => {
        return new Promise((resolve) => {
            window.Telegram!.WebApp.CloudStorage.removeItem(key, (err, deleted) => {
                resolve(!err && deleted);
            });
        });
    },
    removeItems: (keys: string[]): Promise<boolean> => {
        return new Promise((resolve) => {
            window.Telegram!.WebApp.CloudStorage.removeItems(keys, (err, deleted) => {
                resolve(!err && deleted);
            });
        });
    }
};

// --- ADAPTER LOGIC ---

const cloudAdapter = {
  async save(key: string, value: string): Promise<void> {
    // 1. Sync Save to LocalStorage (Fastest)
    try {
        localStorage.setItem(key, value);
    } catch (e) {
        console.warn("LocalStorage full or unavailable");
    }

    // 2. Async Save to CloudStorage (Background)
    if (!tgStorage.isSupported()) return;

    try {
        console.time("cloud_save");
        const chunks: string[] = [];
        for (let i = 0; i < value.length; i += CHUNK_SIZE) {
            chunks.push(value.substring(i, i + CHUNK_SIZE));
        }

        const metaSaved = await tgStorage.setItem(`${key}_meta`, JSON.stringify({ count: chunks.length, timestamp: Date.now() }));
        if (!metaSaved) {
            console.warn("Failed to save metadata to cloud");
            return;
        }

        // BATCH SAVING STRATEGY (Optimization for Large Datasets)
        // Instead of firing all promises at once (which might hit rate limits or timeout for 10k words),
        // we process them in batches of 10.
        const BATCH_SIZE = 10;
        for (let i = 0; i < chunks.length; i += BATCH_SIZE) {
            const batchPromises = [];
            for (let j = 0; j < BATCH_SIZE && (i + j) < chunks.length; j++) {
                const chunkIndex = i + j;
                batchPromises.push(tgStorage.setItem(`${key}_chunk_${chunkIndex}`, chunks[chunkIndex]));
            }
            await Promise.all(batchPromises);
        }
        
        console.timeEnd("cloud_save");
        console.log(`Saved ${chunks.length} chunks to cloud.`);

    } catch (e) {
        console.error("Cloud save failed", e);
    }
  },

  async load(key: string): Promise<string | null> {
    // 1. Check if Cloud is supported
    if (!tgStorage.isSupported()) {
        return localStorage.getItem(key);
    }

    try {
        // 2. Get Metadata
        const metaStr = await tgStorage.getItem(`${key}_meta`);
        
        if (!metaStr) {
            return localStorage.getItem(key);
        }

        const meta = JSON.parse(metaStr);
        const count = meta.count;
        
        // BATCH LOADING
        // We can request multiple keys at once, but getItems has limits too.
        // Let's request in batches of 20.
        let fullString = "";
        const BATCH_SIZE = 20;
        
        for (let i = 0; i < count; i += BATCH_SIZE) {
            const keys = [];
            for (let j = 0; j < BATCH_SIZE && (i + j) < count; j++) {
                keys.push(`${key}_chunk_${i + j}`);
            }
            
            const values = await tgStorage.getItems(keys);
            if (!values) return localStorage.getItem(key); // Fallback on partial failure

            // Append in order
            for (const k of keys) {
                if (typeof values[k] === 'string') {
                    fullString += values[k];
                } else {
                    console.warn(`Missing chunk ${k}`);
                    return localStorage.getItem(key);
                }
            }
        }

        localStorage.setItem(key, fullString);
        return fullString;

    } catch (e) {
        console.error("Cloud load error", e);
        return localStorage.getItem(key);
    }
  }
};

/**
 * Persists user progress.
 * Uses DEBOUNCE: Rapid calls (like toggling many hearts) will update the memory cache instantly
 * but only write to disk/cloud after 2 seconds of inactivity.
 * @param progress The data to save
 * @param immediate If true, skips debounce and saves instantly (use for critical events like payment or level complete)
 */
export const saveUserProgress = async (progress: UserProgress, immediate = false) => {
  // 1. Update Memory Cache IMMEDIATELY (Source of Truth)
  memoryCache = progress;

  // Clear pending save if exists
  if (saveDebounceTimer) {
      clearTimeout(saveDebounceTimer);
      saveDebounceTimer = null;
  }

  const performSave = async () => {
      if (!memoryCache) return;
      await cloudAdapter.save(STORAGE_KEY, JSON.stringify(memoryCache));
  };

  if (immediate) {
      await performSave();
  } else {
      // 2. Schedule Save
      saveDebounceTimer = setTimeout(performSave, 2000);
  }
};

/**
 * Force a save of the current memory cache to disk.
 * Useful when navigating away from a screen or closing the app.
 */
export const forceSave = async () => {
    if (saveDebounceTimer) {
        clearTimeout(saveDebounceTimer);
        saveDebounceTimer = null;
    }
    if (memoryCache) {
        await cloudAdapter.save(STORAGE_KEY, JSON.stringify(memoryCache));
    }
};

export const getUserProgress = async (): Promise<UserProgress> => {
  // 1. Return Memory Cache if available (Instant access)
  if (memoryCache) {
      return checkDailyReset(memoryCache);
  }

  await syncTime();
  
  const stored = await cloudAdapter.load(STORAGE_KEY);
  
  if (!stored) {
    memoryCache = { ...INITIAL_PROGRESS };
    return memoryCache;
  }
  
  try {
      memoryCache = JSON.parse(stored) as UserProgress;
  } catch (e) {
      console.error("Data corruption, resetting");
      memoryCache = { ...INITIAL_PROGRESS };
  }
  
  // Migrations
  if (!memoryCache.customWords) memoryCache.customWords = [];
  if (!memoryCache.dailyProgressByLevel) memoryCache.dailyProgressByLevel = {};
  if (typeof memoryCache.aiGenerationsToday === 'undefined') memoryCache.aiGenerationsToday = 0;
  if (typeof memoryCache.darkMode === 'undefined') memoryCache.darkMode = false;
  if (!memoryCache.wallet) memoryCache.wallet = { coins: 100 };
  if (!memoryCache.inventory) memoryCache.inventory = { streakFreeze: 0, timeFreeze: 1, bomb: 1 };
  if (!memoryCache.blitzHighScores) memoryCache.blitzHighScores = {};
  if (!memoryCache.wordComments) memoryCache.wordComments = {};
  if (!memoryCache.usedPromoCodes) memoryCache.usedPromoCodes = [];
  if (memoryCache.photoUrl === undefined) memoryCache.photoUrl = '';
  if (memoryCache.premiumExpiration === undefined) memoryCache.premiumExpiration = null;

  return checkDailyReset(memoryCache);
};

// Helper to handle daily resets on the progress object
export const checkDailyReset = async (progress: UserProgress): Promise<UserProgress> => {
  const now = getSecureNow();
  const todayDateStr = new Date(now).toISOString().split('T')[0];

  let needsSave = false;

  if (progress.lastLoginDate !== todayDateStr) {
       if (progress.lastLoginDate) {
           const lastDate = new Date(progress.lastLoginDate);
           const current = new Date(todayDateStr);
           const diffTime = Math.abs(current.getTime() - lastDate.getTime());
           const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
           
           if (diffDays > 1) {
               if (progress.inventory.streakFreeze > 0) {
                   progress.inventory.streakFreeze -= 1;
               } else {
                   progress.streak = 0;
               }
           }
       } else {
           progress.streak = 0;
       }

       progress.wordsLearnedToday = 0;
       progress.aiGenerationsToday = 0; 
       progress.dailyProgressByLevel = {}; 
       progress.nextSessionUnlockTime = undefined;
       progress.lastLoginDate = todayDateStr;
       needsSave = true;
  }

  if (progress.nextSessionUnlockTime && now >= progress.nextSessionUnlockTime) {
      progress.wordsLearnedToday = 0;
      progress.dailyProgressByLevel = {}; 
      progress.nextSessionUnlockTime = undefined;
      needsSave = true;
  }

  // We use immediate=true for daily resets as they are critical logic
  if (needsSave) {
      await saveUserProgress(progress, true);
  }
  
  return progress;
};

export const syncTelegramUserData = async () => {
    const tgUser = window.Telegram?.WebApp?.initDataUnsafe?.user;
    if (tgUser) {
        const progress = await getUserProgress();
        let changed = false;
        
        if (tgUser.first_name && (!progress.userName || progress.userName === 'User')) {
            progress.userName = tgUser.first_name;
            changed = true;
        }
        if (tgUser.photo_url && progress.photoUrl !== tgUser.photo_url) {
            progress.photoUrl = tgUser.photo_url;
            changed = true;
        }
        
        if (changed) {
            await saveUserProgress(progress, true);
        }
    }
};

export const resetUserProgress = async (): Promise<UserProgress> => {
    if (tgStorage.isSupported()) {
        try {
            const metaStr = await tgStorage.getItem(`${STORAGE_KEY}_meta`);
            if (metaStr) {
                const meta = JSON.parse(metaStr);
                const keys = [`${STORAGE_KEY}_meta`, ...Array.from({length: meta.count}, (_, i) => `${STORAGE_KEY}_chunk_${i}`)];
                await tgStorage.removeItems(keys);
            }
        } catch (e) {
            console.error("Failed to clear cloud", e);
        }
    }
    localStorage.removeItem(STORAGE_KEY);
    memoryCache = { ...INITIAL_PROGRESS };
    return memoryCache;
};

export const completeOnboarding = async (name?: string): Promise<UserProgress> => {
  const progress = await getUserProgress();
  progress.hasSeenOnboarding = true;
  if(name) progress.userName = name;
  progress.lastLoginDate = new Date().toISOString().split('T')[0];
  progress.streak = 0; 
  await saveUserProgress(progress, true);
  return progress;
};

function utf8_to_b64(str: string) {
    return window.btoa(unescape(encodeURIComponent(str)));
}

function b64_to_utf8(str: string) {
    return decodeURIComponent(escape(window.atob(str)));
}

export const exportUserData = async (): Promise<string> => {
    let dataStr = "";
    try {
        const progress = await getUserProgress();
        dataStr = JSON.stringify(progress);
    } catch (e) {
        dataStr = localStorage.getItem(STORAGE_KEY) || "";
    }
    
    if (!dataStr) return "";
    return utf8_to_b64(dataStr);
};

export const importUserData = async (backupCode: string): Promise<{success: boolean, message: string}> => {
    try {
        // CLEANUP: Remove whitespace/newlines that might occur from copy-pasting
        // This is the main fix for "Error reading code" when users copy formatted text
        const cleanCode = backupCode.trim().replace(/\s/g, '');
        
        const jsonStr = b64_to_utf8(cleanCode);
        const data = JSON.parse(jsonStr);

        // Validation
        if (!data || typeof data !== 'object') {
             throw new Error("Invalid structure");
        }

        // Basic schema check to ensure it's a valid backup
        // Checking for XP or wordProgress usually confirms it's the right app data
        if (typeof data.xp === 'undefined' && !data.wordProgress) {
            return { success: false, message: "Неверный формат данных (нет прогресса)." };
        }

        await saveUserProgress(data, true);
        return { success: true, message: "Данные успешно восстановлены!" };
    } catch (e) {
        console.error("Import error:", e);
        return { success: false, message: "Ошибка чтения кода. Проверьте, что скопировали весь текст." };
    }
};

export const toggleDarkMode = async () => {
    const progress = await getUserProgress();
    progress.darkMode = !progress.darkMode;
    await saveUserProgress(progress);
    return progress;
};
