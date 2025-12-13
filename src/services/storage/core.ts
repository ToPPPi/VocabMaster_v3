
import { UserProgress } from '../../types';
import { idbService } from './indexedDB';

export const STORAGE_KEY = 'vocabmaster_user_v5_ru';
const CHUNK_SIZE = 2800; 

// --- DEFAULTS ---
export const INITIAL_PROGRESS: UserProgress = {
  xp: 0,
  streak: 0,
  lastLoginDate: '', 
  lastLocalUpdate: Date.now(),
  lastCloudSync: 0,
  wordsLearnedToday: 0,
  aiGenerationsToday: 0,
  darkMode: false,
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

// --- COMPRESSION (LZW) ---
// This keeps our payload tiny (approx 100kb for 5000 words)
const LZW = {
    compress: (s: string) => {
        if (!s) return "";
        var dict: any = {};
        var data = (s + "").split("");
        var out = [];
        var currChar;
        var phrase = data[0];
        var code = 256;
        for (var i = 1; i < data.length; i++) {
            currChar = data[i];
            if (dict[phrase + currChar] != null) {
                phrase += currChar;
            } else {
                out.push(phrase.length > 1 ? dict[phrase] : phrase.charCodeAt(0));
                dict[phrase + currChar] = code;
                code++;
                phrase = currChar;
            }
        }
        out.push(phrase.length > 1 ? dict[phrase] : phrase.charCodeAt(0));
        return out.map(c => String.fromCharCode(c)).join("");
    },
    decompress: (s: string) => {
        if (!s) return "";
        var dict: any = {};
        var data = (s + "").split("");
        var currChar = data[0];
        var oldPhrase = currChar;
        var out = [currChar];
        var code = 256;
        var phrase;
        for (var i = 1; i < data.length; i++) {
            var currCode = data[i].charCodeAt(0);
            if (currCode < 256) {
                phrase = data[i];
            } else {
                phrase = dict[currCode] ? dict[currCode] : (oldPhrase + currChar);
            }
            out.push(phrase);
            currChar = phrase.charAt(0);
            dict[code] = oldPhrase + currChar;
            code++;
            oldPhrase = phrase;
        }
        return out.join("");
    }
};

// --- STATE ---
let memoryCache: UserProgress | null = null;
let cloudUploadTimer: any = null;
let isUploading = false;

// --- UTILS ---
export const getSecureNow = () => Date.now();

// --- TELEGRAM CLOUD ADAPTER ---
const tgCloud = {
    isSupported: () => {
        const tg = window.Telegram?.WebApp;
        // CloudStorage was introduced in version 6.9
        return tg && 
               typeof tg.isVersionAtLeast === 'function' && 
               tg.isVersionAtLeast('6.9') && 
               !!tg.CloudStorage;
    },
    
    save: async (data: UserProgress): Promise<boolean> => {
        if (!tgCloud.isSupported()) return false;
        try {
            const jsonStr = JSON.stringify(data);
            const compressed = LZW.compress(jsonStr);
            const finalValue = "LZ:" + window.btoa(compressed);
            
            const chunks: string[] = [];
            for (let i = 0; i < finalValue.length; i += CHUNK_SIZE) {
                chunks.push(finalValue.substring(i, i + CHUNK_SIZE));
            }

            const setItem = (k: string, v: string) => new Promise<boolean>(resolve => {
                window.Telegram!.WebApp.CloudStorage.setItem(k, v, (err, stored) => resolve(!err && stored));
            });

            // Save chunks
            const promises = chunks.map((chunk, i) => setItem(`${STORAGE_KEY}_chunk_${i}`, chunk));
            await Promise.all(promises);

            // Update Metadata
            // We save timestamp separately so we can check it quickly without downloading the whole DB
            const meta = { 
                count: chunks.length, 
                timestamp: data.lastLocalUpdate, // Cloud timestamp matches the data version
                device: navigator.userAgent 
            };
            
            await setItem(`${STORAGE_KEY}_meta`, JSON.stringify(meta));
            return true;
        } catch (e) {
            console.error("Cloud backup failed", e);
            return false;
        }
    },

    // Fast check just for timestamp
    getMetadata: async (): Promise<{ timestamp: number } | null> => {
        if (!tgCloud.isSupported()) return null;
        return new Promise(resolve => {
            window.Telegram!.WebApp.CloudStorage.getItem(`${STORAGE_KEY}_meta`, (err, val) => {
                if (!val) resolve(null);
                try {
                    resolve(JSON.parse(val));
                } catch {
                    resolve(null);
                }
            });
        });
    },

    load: async (): Promise<UserProgress | null> => {
        if (!tgCloud.isSupported()) return null;
        try {
            const getItem = (k: string) => new Promise<string>(resolve => {
                window.Telegram!.WebApp.CloudStorage.getItem(k, (err, val) => resolve(val || ""));
            });

            const metaStr = await getItem(`${STORAGE_KEY}_meta`);
            if (!metaStr) return null;
            
            const meta = JSON.parse(metaStr);
            const keys = Array.from({length: meta.count}, (_, i) => `${STORAGE_KEY}_chunk_${i}`);
            
            const getItems = (ks: string[]) => new Promise<Record<string,string>>(resolve => {
                window.Telegram!.WebApp.CloudStorage.getItems(ks, (err, vals) => resolve(vals || {}));
            });

            const values = await getItems(keys);
            let fullString = "";
            for(const k of keys) fullString += values[k] || "";

            if (fullString.startsWith("LZ:")) {
                const base64 = fullString.substring(3);
                const compressed = window.atob(base64);
                const json = LZW.decompress(compressed);
                return JSON.parse(json) as UserProgress;
            }
            return null;
        } catch (e) {
            console.error("Cloud load error", e);
            return null;
        }
    }
};

// --- CORE FUNCTIONS ---

/**
 * Loads data and checks for conflicts.
 * Returns:
 * - data: The active data to use (usually local)
 * - conflict: If true, it means Cloud has NEWER data than local. The UI should ask user.
 */
export const initUserProgress = async (): Promise<{ data: UserProgress, hasConflict: boolean, cloudDate?: number }> => {
    // 1. Load Local (Fastest)
    let localData = await idbService.load();
    
    // 2. Check Cloud Metadata (Fast check)
    const cloudMeta = await tgCloud.getMetadata();
    
    // SCENARIO 1: No local data, but Cloud exists (New install or cleared cache)
    if (!localData && cloudMeta) {
        console.log("No local data, downloading cloud backup...");
        const cloudData = await tgCloud.load();
        if (cloudData) {
            await idbService.save(cloudData);
            memoryCache = cloudData;
            return { data: checkDailyReset(cloudData), hasConflict: false };
        }
    }

    // SCENARIO 2: No data anywhere
    if (!localData) {
        memoryCache = { ...INITIAL_PROGRESS };
        return { data: memoryCache, hasConflict: false };
    }

    // SCENARIO 3: Conflict Check
    // If Cloud is significantly newer than Local (e.g., > 5 mins difference), flag a conflict
    let hasConflict = false;
    if (cloudMeta && localData.lastLocalUpdate) {
        // If Cloud is newer by at least 1 minute
        if (cloudMeta.timestamp > localData.lastLocalUpdate + 60000) {
            console.warn("Cloud data is newer than local!");
            hasConflict = true;
        }
    }

    memoryCache = localData;
    return { 
        data: checkDailyReset(localData), 
        hasConflict, 
        cloudDate: cloudMeta?.timestamp 
    };
};

export const getUserProgress = async (): Promise<UserProgress> => {
    if (memoryCache) return memoryCache;
    const res = await initUserProgress();
    return res.data;
};

export const downloadCloudData = async (): Promise<UserProgress | null> => {
    const data = await tgCloud.load();
    if (data) {
        memoryCache = data;
        await idbService.save(data);
        return data;
    }
    return null;
};

export const saveUserProgress = async (progress: UserProgress, forceCloudUpload = false) => {
    // 1. Always update Timestamp
    progress.lastLocalUpdate = Date.now();
    memoryCache = progress;

    // 2. Instant Local Save (IndexedDB is fast)
    await idbService.save(progress);

    // 3. Cloud Upload Strategy: THROTTLING
    // We only auto-upload if:
    // a) `forceCloudUpload` is true (e.g. Session Finished, Purchase made)
    // b) It's been > 5 minutes since last cloud sync
    
    const timeSinceLastSync = Date.now() - (progress.lastCloudSync || 0);
    const MIN_SYNC_INTERVAL = 5 * 60 * 1000; // 5 minutes

    if (forceCloudUpload || timeSinceLastSync > MIN_SYNC_INTERVAL) {
        scheduleCloudUpload(progress);
    }
};

// Debounced Cloud Upload to prevent network spam
const scheduleCloudUpload = (progress: UserProgress) => {
    if (cloudUploadTimer) clearTimeout(cloudUploadTimer);
    
    cloudUploadTimer = setTimeout(async () => {
        if (isUploading || !navigator.onLine) return;
        isUploading = true;
        
        console.log("☁️ Syncing to cloud (Throttled)...");
        const success = await tgCloud.save(progress);
        
        if (success) {
            progress.lastCloudSync = Date.now();
            await idbService.save(progress); // Update the sync timestamp locally
            console.log("✅ Cloud Sync OK");
        }
        
        isUploading = false;
    }, 3000); // 3 sec delay to gather rapid changes
};

export const checkDailyReset = (progress: UserProgress): UserProgress => {
  const now = getSecureNow();
  const todayDateStr = new Date(now).toISOString().split('T')[0];

  if (progress.lastLoginDate !== todayDateStr) {
       // Streak Logic
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
       // We force save on date change
       saveUserProgress(progress, true);
  } else if (progress.nextSessionUnlockTime && now >= progress.nextSessionUnlockTime) {
      progress.wordsLearnedToday = 0;
      progress.dailyProgressByLevel = {}; 
      progress.nextSessionUnlockTime = undefined;
      saveUserProgress(progress, true);
  }
  
  return progress;
};

// ... (Rest of exports like syncTelegramUserData, resetUserProgress remain mostly same)

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
        if (changed) await saveUserProgress(progress);
    }
};

export const resetUserProgress = async (): Promise<UserProgress> => {
    if (tgCloud.isSupported()) {
        const metaStr = await new Promise<string>(r => window.Telegram!.WebApp.CloudStorage.getItem(`${STORAGE_KEY}_meta`, (e,v) => r(v||"")));
        if (metaStr) {
            try {
                const meta = JSON.parse(metaStr);
                const keys = [`${STORAGE_KEY}_meta`, ...Array.from({length: meta.count}, (_, i) => `${STORAGE_KEY}_chunk_${i}`)];
                await new Promise(r => window.Telegram!.WebApp.CloudStorage.removeItems(keys, () => r(true)));
            } catch (e) { console.error(e); }
        }
    }
    await idbService.clear();
    localStorage.removeItem(STORAGE_KEY);
    memoryCache = { ...INITIAL_PROGRESS };
    return memoryCache;
};

export const completeOnboarding = async (name?: string): Promise<UserProgress> => {
  const progress = await getUserProgress();
  progress.hasSeenOnboarding = true;
  if (name) progress.userName = name;
  progress.lastLoginDate = new Date().toISOString().split('T')[0];
  await saveUserProgress(progress, true);
  return progress;
};

export const logoutUser = async (): Promise<void> => {
    const progress = await getUserProgress();
    // Force sync before logout
    await tgCloud.save(progress); 
    progress.hasSeenOnboarding = false;
    await idbService.save(progress);
};

export const toggleDarkMode = async () => {
    const progress = await getUserProgress();
    progress.darkMode = !progress.darkMode;
    await saveUserProgress(progress);
    return progress;
};

// Export Helpers
export const exportUserData = async (): Promise<string> => {
    try {
        const progress = await getUserProgress();
        const jsonStr = JSON.stringify(progress);
        const encoded = LZW.compress(jsonStr);
        return "VM5:" + window.btoa(encoded);
    } catch (e) {
        return "";
    }
};

export const importUserData = async (inputCode: string): Promise<{success: boolean, message: string}> => {
    try {
        let cleanCode = inputCode.replace(/[\s\n\r]/g, '');
        if (cleanCode.startsWith("VM5:")) cleanCode = cleanCode.substring(4);
        
        const compressed = window.atob(cleanCode);
        const jsonStr = LZW.decompress(compressed);
        const data = JSON.parse(jsonStr);
        
        if (!data.wordProgress) throw new Error("Invalid data");

        memoryCache = data;
        await saveUserProgress(data, true);

        return { success: true, message: "Данные восстановлены!" };
    } catch (e: any) {
        return { success: false, message: "Ошибка: " + e.message };
    }
};

export const forceSave = async () => {
    if (memoryCache) await saveUserProgress(memoryCache, true);
}
