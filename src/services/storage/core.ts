
import { UserProgress } from '../../types';

export const STORAGE_KEY = 'vocabmaster_user_v5_ru';
// Telegram CloudStorage limits: 4096 bytes per key. 
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
let memoryCache: UserProgress | null = null;

// --- DEBOUNCE TIMER ---
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

// --- CLOUD STORAGE HELPERS ---

const withTimeout = <T>(promise: Promise<T>, ms: number = 3000, fallback: T): Promise<T> => {
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
        return withTimeout(op, 3000, false);
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
        return withTimeout(op, 3000, null);
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
        return withTimeout(op, 5000, null);
    },
    removeItem: (key: string): Promise<boolean> => {
        const op = new Promise<boolean>((resolve) => {
            window.Telegram!.WebApp.CloudStorage.removeItem(key, (err, deleted) => {
                resolve(!err && deleted);
            });
        });
        return withTimeout(op, 3000, false);
    },
    removeItems: (keys: string[]): Promise<boolean> => {
        const op = new Promise<boolean>((resolve) => {
            window.Telegram!.WebApp.CloudStorage.removeItems(keys, (err, deleted) => {
                resolve(!err && deleted);
            });
        });
        return withTimeout(op, 3000, false);
    }
};

// --- ADAPTER LOGIC ---

const cloudAdapter = {
  async save(key: string, value: string): Promise<void> {
    try {
        localStorage.setItem(key, value);
    } catch (e) {
        console.warn("LocalStorage full or unavailable");
    }

    if (!tgStorage.isSupported()) return;

    try {
        const chunks: string[] = [];
        for (let i = 0; i < value.length; i += CHUNK_SIZE) {
            chunks.push(value.substring(i, i + CHUNK_SIZE));
        }

        const metaSaved = await tgStorage.setItem(`${key}_meta`, JSON.stringify({ count: chunks.length, timestamp: Date.now() }));
        if (!metaSaved) return;

        const BATCH_SIZE = 10;
        for (let i = 0; i < chunks.length; i += BATCH_SIZE) {
            const batchPromises = [];
            for (let j = 0; j < BATCH_SIZE && (i + j) < chunks.length; j++) {
                const chunkIndex = i + j;
                batchPromises.push(tgStorage.setItem(`${key}_chunk_${chunkIndex}`, chunks[chunkIndex]));
            }
            await Promise.all(batchPromises);
        }
    } catch (e) {
        console.error("Cloud save failed", e);
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
        const BATCH_SIZE = 20;
        
        for (let i = 0; i < count; i += BATCH_SIZE) {
            const keys = [];
            for (let j = 0; j < BATCH_SIZE && (i + j) < count; j++) {
                keys.push(`${key}_chunk_${i + j}`);
            }
            
            const values = await tgStorage.getItems(keys);
            if (!values) return localStorage.getItem(key); 

            for (const k of keys) {
                if (typeof values[k] === 'string') {
                    fullString += values[k];
                } else {
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
      await cloudAdapter.save(STORAGE_KEY, JSON.stringify(memoryCache));
  };

  if (immediate) {
      await performSave();
  } else {
      saveDebounceTimer = setTimeout(performSave, 2000);
  }
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

// --- NEW ROBUST ENCODING LOGIC (MDN Recommended + URL Safe) ---

// 1. Unicode to Base64 (Standard)
function utf8_to_b64(str: string) {
    return window.btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
        function toSolidBytes(match, p1) {
            return String.fromCharCode(parseInt(p1, 16));
    }));
}

// 2. Base64 to Unicode (Standard)
function b64_to_utf8(str: string) {
    return decodeURIComponent(window.atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}

const BACKUP_PREFIX = "VM1:";

export const exportUserData = async (): Promise<string> => {
    let dataStr = "";
    try {
        const progress = await getUserProgress();
        dataStr = JSON.stringify(progress);
    } catch (e) {
        dataStr = localStorage.getItem(STORAGE_KEY) || "";
    }
    
    if (!dataStr) return "";

    try {
        // 1. Strict UTF-8 Encoding
        const base64 = utf8_to_b64(dataStr);
        
        // 2. Make URL Safe (Replace + with -, / with _, remove =)
        // This prevents mobile clipboards from mangling standard Base64 characters
        const safeBase64 = base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
        
        // 3. Add Prefix
        return BACKUP_PREFIX + safeBase64;
    } catch (e) {
        console.error("Export encode error", e);
        return "";
    }
};

export const importUserData = async (backupCode: string): Promise<{success: boolean, message: string}> => {
    try {
        // STEP 1: Basic Cleanup
        let cleanCode = backupCode.replace(/\s/g, ''); // Remove whitespace
        cleanCode = cleanCode.replace(/^["']|["']$/g, ''); // Remove quotes

        // STEP 2: Handle Prefix
        if (cleanCode.startsWith(BACKUP_PREFIX)) {
            cleanCode = cleanCode.substring(BACKUP_PREFIX.length);
        }

        // STEP 3: Restore Standard Base64 from URL-Safe format
        // Replace - back to +
        // Replace _ back to /
        cleanCode = cleanCode.replace(/-/g, '+').replace(/_/g, '/');

        // STEP 4: Restore Padding (=)
        // Base64 length must be divisible by 4
        while (cleanCode.length % 4 !== 0) {
            cleanCode += '=';
        }
        
        // STEP 5: Decode
        const jsonStr = b64_to_utf8(cleanCode);
        const data = JSON.parse(jsonStr);

        // Validation
        if (!data || typeof data !== 'object') {
             throw new Error("Invalid structure");
        }

        // Schema Check
        if (typeof data.xp === 'undefined' && !data.wordProgress) {
            return { success: false, message: "Неверный формат данных (нет прогресса)." };
        }

        await saveUserProgress(data, true);
        return { success: true, message: "Данные успешно восстановлены!" };
    } catch (e) {
        console.error("Import error:", e);
        return { success: false, message: "Ошибка: Код поврежден или неверен." };
    }
};

export const toggleDarkMode = async () => {
    const progress = await getUserProgress();
    progress.darkMode = !progress.darkMode;
    await saveUserProgress(progress);
    return progress;
};
