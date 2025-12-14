
import { UserProgress } from '../../types';
import { idbService } from './indexedDB';

export const STORAGE_KEY = 'vocabmaster_user_v5_ru';

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

// --- UTILS ---
export const getSecureNow = () => Date.now();

// --- ENCODING ---
const safeEncode = (str: string): string => window.btoa(unescape(encodeURIComponent(str)));
const safeDecode = (str: string): string => decodeURIComponent(escape(window.atob(str)));

// --- STATE ---
let memoryCache: UserProgress | null = null;
let saveTimeout: any = null; // Timer for debounce
const DEBOUNCE_DELAY_MS = 2000; // Wait 2 seconds before writing to disk

// --- AUTO BACKUP LOGIC ---
const BACKUP_INTERVAL_MS = 24 * 60 * 60 * 1000; // 24 hours

const checkAndRunAutoBackup = async (progress: UserProgress) => {
    const tgUser = window.Telegram?.WebApp?.initDataUnsafe?.user;
    if (!tgUser) return; 

    const now = getSecureNow();
    const lastBackup = progress.lastAutoBackupDate || 0;

    if (now - lastBackup > BACKUP_INTERVAL_MS) {
        console.log("🔄 Triggering Auto-Backup...");
        try {
            const backupCode = "VM5:" + safeEncode(JSON.stringify(progress));
            
            const response = await fetch('/api/send-backup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userId: tgUser.id,
                    username: tgUser.first_name,
                    backupData: backupCode
                })
            });

            if (response.ok) {
                console.log("✅ Auto-Backup sent to Telegram Chat");
                progress.lastAutoBackupDate = now;
                // Force save immediately after backup to record timestamp
                await idbService.save(progress);
            }
        } catch (e) {
            console.error("❌ Auto-Backup Failed:", e);
        }
    }
};

// --- CORE FUNCTIONS ---

export const initUserProgress = async (): Promise<{ data: UserProgress, hasConflict: boolean, cloudDate?: number, criticalError?: boolean }> => {
    console.log("🚀 BOOT: Initializing Storage...");
    
    let data: UserProgress | null = null;

    try {
        // 1. Try IndexedDB (Primary Storage)
        data = await idbService.load();
    } catch (e) {
        console.error("🔥 CRITICAL: IndexedDB is dead/unreachable.", e);
        return { data: INITIAL_PROGRESS, hasConflict: false, criticalError: true };
    }
    
    // 2. Migration Check
    if (!data) {
        try {
            const rawLS = localStorage.getItem(STORAGE_KEY);
            if (rawLS) {
                console.log("📦 Migrating from LocalStorage to IndexedDB...");
                data = JSON.parse(rawLS);
                if (data) await idbService.save(data);
            }
        } catch (e) {
            console.error("LS Read Error", e);
        }
    }

    if (data) {
        memoryCache = data;
        const processed = checkDailyReset(data);
        
        // Trigger backup check asynchronously
        setTimeout(() => checkAndRunAutoBackup(processed), 5000);
        
        return { data: processed, hasConflict: false };
    }

    // 3. New User
    console.log("🌟 New User State");
    memoryCache = { ...INITIAL_PROGRESS };
    return { data: memoryCache, hasConflict: false };
};

export const getUserProgress = async (): Promise<UserProgress> => {
    if (memoryCache) return memoryCache;
    const res = await initUserProgress();
    return res.data;
};

export const downloadCloudData = async (): Promise<UserProgress | null> => { return null; };

// OPTIMIZED SAVE: Uses Debouncing
export const saveUserProgress = async (progress: UserProgress, forceImmediate = false) => {
    progress.lastLocalUpdate = Date.now();
    memoryCache = progress;
    
    // If a save is already pending, clear it (reset timer)
    if (saveTimeout) {
        clearTimeout(saveTimeout);
        saveTimeout = null;
    }

    // Function to perform the actual write
    const performWrite = async () => {
        try {
            // console.log("💾 Writing to Disk (IndexedDB)..."); 
            await idbService.save(progress);
        } catch (e) {
            console.error("IDB Save Error:", e);
        }
    };

    if (forceImmediate) {
        await performWrite();
    } else {
        // Schedule write in near future
        saveTimeout = setTimeout(performWrite, DEBOUNCE_DELAY_MS);
    }
};

export const checkDailyReset = (progress: UserProgress): UserProgress => {
  const now = getSecureNow();
  const todayDateStr = new Date(now).toISOString().split('T')[0];

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
       saveUserProgress(progress, true); // Force immediate save on daily reset
  } else if (progress.nextSessionUnlockTime && now >= progress.nextSessionUnlockTime) {
      progress.wordsLearnedToday = 0;
      progress.dailyProgressByLevel = {}; 
      progress.nextSessionUnlockTime = undefined;
      saveUserProgress(progress, true); // Force immediate save on unlock
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
        if (changed) await saveUserProgress(progress);
    }
};

export const resetUserProgress = async (): Promise<UserProgress> => {
    console.log("💣 FACTORY RESET TRIGGERED");
    try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
    try { await idbService.clear(); } catch(e) {}
    try { await idbService.deleteDatabase(); } catch(e) {}
    
    memoryCache = { ...INITIAL_PROGRESS };
    return memoryCache;
};

export const completeOnboarding = async (name?: string): Promise<UserProgress> => {
  const progress = await getUserProgress();
  progress.hasSeenOnboarding = true;
  if (name) progress.userName = name;
  progress.lastLoginDate = new Date().toISOString().split('T')[0];
  await saveUserProgress(progress, true); // Force save on onboarding completion
  return progress;
};

export const logoutUser = async (): Promise<void> => {
    const progress = await getUserProgress();
    progress.hasSeenOnboarding = false;
    await saveUserProgress(progress, true); // Force save on logout
};

export const toggleDarkMode = async () => {
    const progress = await getUserProgress();
    progress.darkMode = !progress.darkMode;
    await saveUserProgress(progress);
    return progress;
};

export const exportUserData = async (): Promise<string> => {
    try {
        const progress = await getUserProgress();
        return "VM5:" + safeEncode(JSON.stringify(progress));
    } catch (e) {
        console.error("Export failed", e);
        return "";
    }
};

export const importUserData = async (inputCode: string): Promise<{success: boolean, message: string}> => {
    try {
        let cleanCode = inputCode.trim();
        if (cleanCode.startsWith("VM5:")) cleanCode = cleanCode.substring(4);
        
        const jsonStr = safeDecode(cleanCode);
        const importedData = JSON.parse(jsonStr) as UserProgress;
        
        if (!importedData.wordProgress) throw new Error("Неверный формат данных");

        let currentData: UserProgress | null = null;
        try { currentData = await getUserProgress(); } catch(e) {}
        
        const mergedData: UserProgress = {
            ...importedData,
            userName: currentData?.userName || importedData.userName, 
            photoUrl: currentData?.photoUrl || importedData.photoUrl,
            lastLocalUpdate: Date.now(),
            hasSeenOnboarding: true,
            lastAutoBackupDate: currentData?.lastAutoBackupDate || Date.now()
        };
        
        memoryCache = mergedData;
        await idbService.save(mergedData); // Force save immediately on import

        return { success: true, message: "Прогресс восстановлен!" };
    } catch (e: any) {
        console.error(e);
        return { success: false, message: "Ошибка кода." };
    }
};

// Use this when leaving the page or critical updates
export const forceSave = async () => {
    if (memoryCache) await saveUserProgress(memoryCache, true);
}
