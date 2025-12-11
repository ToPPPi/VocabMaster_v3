
import { UserProgress } from '../../types';

export const STORAGE_KEY = 'vocabmaster_user_v5_ru';
// Telegram CloudStorage limits: 4096 bytes per key. 
// UTF-8 chars can be up to 4 bytes. 2000 chars is a safe limit to avoid overflow.
const CHUNK_SIZE = 2000; 

export const INITIAL_PROGRESS: UserProgress = {
  xp: 0,
  streak: 0,
  lastLoginDate: '', 
  wordsLearnedToday: 0,
  aiGenerationsToday: 0,
  premiumStatus: false,
  premiumExpiration: null,
  wordProgress: {},
  wordComments: {},
  hasSeenOnboarding: false,
  userName: '',
  photoUrl: '',
  customWords: [],
  dailyProgressByLevel: {},
  wallet: { coins: 100 }, 
  inventory: { streakFreeze: 0, timeFreeze: 1, bomb: 1 },
  blitzHighScores: {}
};

// --- TIME SECURITY (Anti-Cheat) ---
let serverTimeOffset = 0;
let isTimeSynced = false;

const syncTime = async () => {
    if (!navigator.onLine || isTimeSynced) return;
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 2000); 
        
        // Use a simple HEAD request or a more CORS-friendly API if possible.
        // For now, we wrap in try-catch and suppress errors to avoid console noise.
        // Note: worldtimeapi often blocks localhost via CORS.
        const res = await fetch('https://worldtimeapi.org/api/ip', { 
            signal: controller.signal,
            // mode: 'no-cors' // We can't use no-cors because we need the body.
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
        // Silently fail to local time if API is blocked or offline
        // console.debug("Time sync skipped (CORS or Offline)");
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
    // 1. Try LocalStorage (Always acts as a fast cache/backup)
    try {
        localStorage.setItem(key, value);
    } catch (e) {
        console.warn("LocalStorage full or unavailable");
    }

    // 2. Try CloudStorage
    if (!tgStorage.isSupported()) return;

    try {
        const chunks: string[] = [];
        for (let i = 0; i < value.length; i += CHUNK_SIZE) {
            chunks.push(value.substring(i, i + CHUNK_SIZE));
        }

        // Save Meta info first (contains number of chunks)
        const metaSaved = await tgStorage.setItem(`${key}_meta`, JSON.stringify({ count: chunks.length, timestamp: Date.now() }));
        if (!metaSaved) return;

        // Save all chunks in parallel
        const promises = chunks.map((chunk, index) => 
            tgStorage.setItem(`${key}_chunk_${index}`, chunk)
        );

        await Promise.all(promises);
        
        // Optional: Clean up old chunks if the new data is smaller (simple garbage collection)
        // For this MVP, we assume data mostly grows or stays same size. 
        
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
        
        // If no cloud data, fall back to local
        if (!metaStr) {
            return localStorage.getItem(key);
        }

        const meta = JSON.parse(metaStr);
        const count = meta.count;
        
        // 3. Generate keys for all chunks
        const keys = Array.from({ length: count }, (_, i) => `${key}_chunk_${i}`);
        
        // 4. Fetch all chunks at once
        const values = await tgStorage.getItems(keys);
        
        if (!values) {
            console.warn("Cloud meta exists but chunks missing, falling back to local");
            return localStorage.getItem(key);
        }

        // 5. Reassemble
        let fullString = "";
        for (let i = 0; i < count; i++) {
            const chunk = values[`${key}_chunk_${i}`];
            if (typeof chunk !== 'string') {
                console.warn(`Chunk ${i} missing`);
                // Critical failure in cloud data integrity
                return localStorage.getItem(key);
            }
            fullString += chunk;
        }

        // 6. Update local cache with fresh cloud data
        localStorage.setItem(key, fullString);
        return fullString;

    } catch (e) {
        console.error("Cloud load error", e);
        return localStorage.getItem(key);
    }
  }
};

export const saveUserProgress = async (progress: UserProgress) => {
  await cloudAdapter.save(STORAGE_KEY, JSON.stringify(progress));
};

export const getUserProgress = async (): Promise<UserProgress> => {
  await syncTime(); // Try to sync time (silently fails if CORS blocks)
  
  const stored = await cloudAdapter.load(STORAGE_KEY);
  
  if (!stored) {
    return { ...INITIAL_PROGRESS };
  }
  
  let progress: UserProgress;
  try {
      progress = JSON.parse(stored) as UserProgress;
  } catch (e) {
      console.error("Data corruption, resetting");
      return { ...INITIAL_PROGRESS };
  }
  
  // --- MIGRATIONS & FALLBACKS ---
  // Ensure new fields exist for old users
  if (!progress.customWords) progress.customWords = [];
  if (!progress.dailyProgressByLevel) progress.dailyProgressByLevel = {};
  if (typeof progress.aiGenerationsToday === 'undefined') progress.aiGenerationsToday = 0;
  if (!progress.wallet) progress.wallet = { coins: 100 };
  if (!progress.inventory) progress.inventory = { streakFreeze: 0, timeFreeze: 1, bomb: 1 };
  if (!progress.blitzHighScores) progress.blitzHighScores = {};
  if (!progress.wordComments) progress.wordComments = {};
  if (progress.photoUrl === undefined) progress.photoUrl = '';
  // Monthly sub migration
  if (progress.premiumExpiration === undefined) progress.premiumExpiration = null;

  // --- DAILY RESET LOGIC ---
  const now = getSecureNow();
  const todayDateStr = new Date(now).toISOString().split('T')[0];

  if (progress.lastLoginDate !== todayDateStr) {
       // Streak Protection Logic
       if (progress.lastLoginDate) {
           const lastDate = new Date(progress.lastLoginDate);
           const current = new Date(todayDateStr);
           const diffTime = Math.abs(current.getTime() - lastDate.getTime());
           const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
           
           if (diffDays > 1) {
               // Missed a day
               if (progress.inventory.streakFreeze > 0) {
                   progress.inventory.streakFreeze -= 1;
                   // Streak preserved (no reset)
                   console.log("Streak saved by Freeze!");
               } else {
                   // Streak reset
                   progress.streak = 0;
               }
           }
       } else {
           // First login ever (or after reset)
           progress.streak = 0;
       }

       // Reset daily counters
       progress.wordsLearnedToday = 0;
       progress.aiGenerationsToday = 0; 
       progress.dailyProgressByLevel = {}; 
       progress.nextSessionUnlockTime = undefined;
       
       progress.lastLoginDate = todayDateStr;
       
       // Save the reset state immediately
       await saveUserProgress(progress);
       return progress;
  }

  // 24h Lock Check using Secure Time (if user manually changed device time)
  if (progress.nextSessionUnlockTime && now >= progress.nextSessionUnlockTime) {
      progress.wordsLearnedToday = 0;
      progress.dailyProgressByLevel = {}; 
      progress.nextSessionUnlockTime = undefined;
      await saveUserProgress(progress);
  }
  
  return progress;
};

export const syncTelegramUserData = async () => {
    const tgUser = window.Telegram?.WebApp?.initDataUnsafe?.user;
    if (tgUser) {
        // We load purely from local/cloud to avoid overwriting current session changes
        // This is a lightweight check
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
            await saveUserProgress(progress);
        }
    }
};

export const resetUserProgress = async (): Promise<UserProgress> => {
    // Clear Cloud
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
    // Clear Local
    localStorage.removeItem(STORAGE_KEY);
    return { ...INITIAL_PROGRESS };
};

export const completeOnboarding = async (name?: string): Promise<UserProgress> => {
  const progress = await getUserProgress();
  progress.hasSeenOnboarding = true;
  if(name) progress.userName = name;
  progress.lastLoginDate = new Date().toISOString().split('T')[0];
  progress.streak = 0; 
  await saveUserProgress(progress);
  return progress;
};

// --- BACKUP & RESTORE SYSTEM ---

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
        const jsonStr = b64_to_utf8(backupCode);
        const data = JSON.parse(jsonStr);

        if (!data.wordProgress || typeof data.xp === 'undefined') {
            return { success: false, message: "Неверный формат данных." };
        }

        await saveUserProgress(data);
        return { success: true, message: "Данные успешно восстановлены!" };
    } catch (e) {
        console.error(e);
        return { success: false, message: "Ошибка чтения кода." };
    }
};
