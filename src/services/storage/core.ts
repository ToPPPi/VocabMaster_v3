
import { UserProgress } from '../../types';

export const STORAGE_KEY = 'vocabmaster_user_v5_ru';
const CHUNK_SIZE = 2048; // Safe chunk size for Telegram

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

// --- MEMORY CACHE ---
let memoryCache: UserProgress | null = null;
let saveDebounceTimer: any = null;

// --- TIME SECURITY ---
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

// --- CLOUD STORAGE HELPERS ---
const withTimeout = <T>(promise: Promise<T>, ms: number = 8000, fallback: T): Promise<T> => {
    return Promise.race([
        promise,
        new Promise<T>((resolve) => setTimeout(() => {
            console.warn(`Storage operation timed out after ${ms}ms`);
            resolve(fallback);
        }, ms))
    ]);
};

const tgStorage = {
    isSupported: () => {
        const webApp = window.Telegram?.WebApp;
        return webApp && webApp.isVersionAtLeast && webApp.isVersionAtLeast('6.9');
    },
    setItem: (key: string, value: string): Promise<boolean> => {
        const op = new Promise<boolean>((resolve) => {
            window.Telegram!.WebApp.CloudStorage.setItem(key, value, (err, stored) => {
                if (err) {
                    console.error('CloudStorage setItem error:', err);
                    resolve(false);
                } else {
                    resolve(stored);
                }
            });
        });
        return withTimeout(op, 10000, false);
    },
    getItem: (key: string): Promise<string | null> => {
        const op = new Promise<string | null>((resolve) => {
            window.Telegram!.WebApp.CloudStorage.getItem(key, (err, value) => {
                if (err) {
                    console.error('CloudStorage getItem error:', err);
                    resolve(null);
                } else {
                    resolve(value || null);
                }
            });
        });
        return withTimeout(op, 8000, null);
    },
    getItems: (keys: string[]): Promise<Record<string, string> | null> => {
        const op = new Promise<Record<string, string> | null>((resolve) => {
            window.Telegram!.WebApp.CloudStorage.getItems(keys, (err, values) => {
                if (err) {
                    console.error('CloudStorage getItems error:', err);
                    resolve(null);
                } else {
                    resolve(values || null);
                }
            });
        });
        return withTimeout(op, 12000, null);
    },
    removeItem: (key: string): Promise<boolean> => {
        const op = new Promise<boolean>((resolve) => {
            window.Telegram!.WebApp.CloudStorage.removeItem(key, (err, deleted) => {
                resolve(!err && deleted);
            });
        });
        return withTimeout(op, 5000, false);
    },
    removeItems: (keys: string[]): Promise<boolean> => {
        const op = new Promise<boolean>((resolve) => {
            window.Telegram!.WebApp.CloudStorage.removeItems(keys, (err, deleted) => {
                resolve(!err && deleted);
            });
        });
        return withTimeout(op, 8000, false);
    }
};

// --- ADAPTER LOGIC ---
const cloudAdapter = {
  async save(key: string, value: string, onProgress?: (percent: number) => void): Promise<void> {
    // 1. Always save to LocalStorage first as backup
    try {
        localStorage.setItem(key, value);
    } catch (e) {
        console.warn("LocalStorage full or unavailable");
    }

    // 2. If no cloud support, we are done (but warn if restoring)
    if (!tgStorage.isSupported()) {
        if (onProgress) onProgress(100);
        return;
    }

    try {
        const chunks: string[] = [];
        for (let i = 0; i < value.length; i += CHUNK_SIZE) {
            chunks.push(value.substring(i, i + CHUNK_SIZE));
        }

        // --- CLOUD SYNC LOGIC ---
        // We use a small batch size to prevent hitting API rate limits.
        const BATCH_SIZE = 8; 
        const totalChunks = chunks.length;
        let processed = 0;

        for (let i = 0; i < totalChunks; i += BATCH_SIZE) {
            const batchPromises = [];
            for (let j = 0; j < BATCH_SIZE && (i + j) < totalChunks; j++) {
                const chunkIndex = i + j;
                batchPromises.push(tgStorage.setItem(`${key}_chunk_${chunkIndex}`, chunks[chunkIndex]));
            }
            
            // Wait for this batch to finish strictly
            await Promise.all(batchPromises);
            
            processed += batchPromises.length;
            
            // Report Progress
            if (onProgress) {
                const percent = Math.floor((processed / totalChunks) * 95); // Up to 95% for chunks
                onProgress(percent);
            }

            // Small delay to be polite to Telegram API
            await new Promise(r => setTimeout(r, 50)); 
        }

        // Commit transaction by saving metadata LAST
        await tgStorage.setItem(`${key}_meta`, JSON.stringify({ count: chunks.length, timestamp: Date.now() }));
        
        if (onProgress) onProgress(100);

    } catch (e) {
        console.error("Cloud save failed", e);
        throw new Error("Cloud sync failed");
    }
  },

  async load(key: string): Promise<string | null> {
    if (!tgStorage.isSupported()) {
        return localStorage.getItem(key);
    }

    try {
        const metaStr = await tgStorage.getItem(`${key}_meta`);
        if (!metaStr) return localStorage.getItem(key);

        const meta = JSON.parse(metaStr);
        const count = meta.count;
        
        let fullString = "";
        const BATCH_SIZE = 15;
        
        for (let i = 0; i < count; i += BATCH_SIZE) {
            const keys = [];
            for (let j = 0; j < BATCH_SIZE && (i + j) < count; j++) {
                keys.push(`${key}_chunk_${i + j}`);
            }
            
            const values = await tgStorage.getItems(keys);
            
            if (!values) {
                console.warn("Cloud chunks missing, falling back to local");
                return localStorage.getItem(key); 
            }

            for (const k of keys) {
                if (typeof values[k] === 'string') {
                    fullString += values[k];
                } else {
                    console.warn(`Chunk ${k} missing`);
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

export const saveUserProgress = async (progress: UserProgress, immediate = false) => {
  memoryCache = progress;

  if (saveDebounceTimer) {
      clearTimeout(saveDebounceTimer);
      saveDebounceTimer = null;
  }

  const performSave = async () => {
      if (!memoryCache) return;
      // Background save doesn't report progress
      await cloudAdapter.save(STORAGE_KEY, JSON.stringify(memoryCache));
  };

  if (immediate) {
      await performSave();
  } else {
      saveDebounceTimer = setTimeout(performSave, 3000);
  }
};

// New function specifically for Restore process to ensure full sync
export const saveRestoredData = async (progress: UserProgress, onProgress: (pct: number) => void) => {
    memoryCache = progress;
    if (saveDebounceTimer) {
        clearTimeout(saveDebounceTimer);
        saveDebounceTimer = null;
    }
    await cloudAdapter.save(STORAGE_KEY, JSON.stringify(progress), onProgress);
};

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
  if (typeof memoryCache.hasSeenOnboarding === 'undefined') memoryCache.hasSeenOnboarding = false;

  return checkDailyReset(memoryCache);
};

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
  const isNewUser = Object.keys(progress.wordProgress).length === 0 && progress.xp === 0;
  progress.hasSeenOnboarding = true;
  if (name && (isNewUser || progress.userName === 'User' || !progress.userName)) {
      progress.userName = name;
  }
  progress.lastLoginDate = new Date().toISOString().split('T')[0];
  if (isNewUser) {
      progress.streak = 0; 
  }
  await saveUserProgress(progress, true);
  return progress;
};

export const logoutUser = async (): Promise<void> => {
    const progress = await getUserProgress();
    progress.hasSeenOnboarding = false;
    await saveUserProgress(progress, true);
};

// --- DATA IMPORT/EXPORT (ROBUST BASE64) ---

const BACKUP_PREFIX = "VM5:";

function utf8_to_b64(str: string) {
    return window.btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
        function toSolidBytes(match, p1) {
            return String.fromCharCode(parseInt(p1, 16));
    }));
}

function b64_to_utf8(str: string) {
    return decodeURIComponent(window.atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}

export const exportUserData = async (): Promise<string> => {
    try {
        const progress = await getUserProgress();
        const jsonStr = JSON.stringify(progress);
        const encoded = utf8_to_b64(jsonStr);
        return BACKUP_PREFIX + encoded;
    } catch (e) {
        console.error("Export error", e);
        return "";
    }
};

export const importUserData = async (inputCode: string, onProgress?: (pct: number) => void): Promise<{success: boolean, message: string}> => {
    try {
        if (onProgress) onProgress(1); // Start

        let cleanCode = inputCode.trim().replace(/\s/g, '');
        
        if (cleanCode.startsWith(BACKUP_PREFIX)) {
            cleanCode = cleanCode.substring(BACKUP_PREFIX.length);
        } else if (cleanCode.startsWith("VM1:")) {
            cleanCode = cleanCode.substring(4);
        }

        while (cleanCode.length % 4 !== 0) {
            cleanCode += '=';
        }

        let jsonStr = "";
        try {
            jsonStr = b64_to_utf8(cleanCode);
        } catch (e) {
            try {
                jsonStr = window.atob(cleanCode);
            } catch (e2) {
                throw new Error("Не удалось раскодировать строку. Проверьте копию.");
            }
        }

        if (onProgress) onProgress(10); // Decoded

        const dataToRestore = JSON.parse(jsonStr);

        if (typeof dataToRestore.xp === 'undefined' || !dataToRestore.wordProgress) {
            throw new Error("Код не содержит данных VocabMaster.");
        }

        // Use strict restoration save which waits for cloud confirmation
        await saveRestoredData(dataToRestore, onProgress);
        
        return { success: true, message: "База данных восстановлена и синхронизирована с облаком!" };

    } catch (e: any) {
        console.error("Import failed:", e);
        return { success: false, message: "Ошибка: Код поврежден или сеть недоступна." };
    }
};

export const toggleDarkMode = async () => {
    const progress = await getUserProgress();
    progress.darkMode = !progress.darkMode;
    await saveUserProgress(progress);
    return progress;
};
