
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

// --- ENCODING UTILS (UTF-8 Safe) ---
const safeEncode = (str: string): string => {
    return window.btoa(unescape(encodeURIComponent(str)));
};

const safeDecode = (str: string): string => {
    return decodeURIComponent(escape(window.atob(str)));
};

// --- STATE ---
let memoryCache: UserProgress | null = null;

// --- UTILS ---
export const getSecureNow = () => Date.now();

// --- CORE FUNCTIONS (LOCAL ONLY MODE) ---

export const initUserProgress = async (): Promise<{ data: UserProgress, hasConflict: boolean, cloudDate?: number }> => {
    // 1. Load Local Data only
    let localData = null;
    try {
        localData = await idbService.load();
    } catch (e) {
        console.error("Critical Error Loading IDB:", e);
        // Fallback to localStorage or fresh start if IDB fails hard
    }
    
    // 2. If no local data, start fresh
    if (!localData) {
        console.log("No local data found. Starting fresh.");
        memoryCache = { ...INITIAL_PROGRESS };
        return { data: memoryCache, hasConflict: false };
    }

    // 3. Use local data
    memoryCache = localData;
    return { 
        data: checkDailyReset(localData), 
        hasConflict: false 
    };
};

export const getUserProgress = async (): Promise<UserProgress> => {
    if (memoryCache) return memoryCache;
    const res = await initUserProgress();
    return res.data;
};

// Kept for compatibility but does nothing in Local Mode
export const downloadCloudData = async (): Promise<UserProgress | null> => {
    return null; 
};

export const saveUserProgress = async (progress: UserProgress, forceCloudUpload = false) => {
    progress.lastLocalUpdate = Date.now();
    memoryCache = progress;
    
    // INSTANT SAVE: Only write to local IndexedDB
    try {
        await idbService.save(progress);
    } catch (e) {
        console.error("Save failed:", e);
    }
    
    // Cloud sync logic removed for performance
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
       saveUserProgress(progress, true);
  } else if (progress.nextSessionUnlockTime && now >= progress.nextSessionUnlockTime) {
      progress.wordsLearnedToday = 0;
      progress.dailyProgressByLevel = {}; 
      progress.nextSessionUnlockTime = undefined;
      saveUserProgress(progress, true);
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
    try {
        await idbService.clear();
    } catch (e) {
        console.error("IDB Clear failed, continuing with LocalStorage clear", e);
    }
    
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
    
    // INSTANT LOGOUT: No cloud wait.
    progress.hasSeenOnboarding = false;
    await idbService.save(progress);
    
    console.log("✅ Local logout successful.");
};

export const toggleDarkMode = async () => {
    const progress = await getUserProgress();
    progress.darkMode = !progress.darkMode;
    await saveUserProgress(progress);
    return progress;
};

// --- MANUAL BACKUP (Copy/Paste) - SMART MERGE MODE ---

export const exportUserData = async (): Promise<string> => {
    try {
        const progress = await getUserProgress();
        const jsonStr = JSON.stringify(progress);
        const encoded = safeEncode(jsonStr);
        return "VM5:" + encoded;
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

        // --- SMART MERGE LOGIC ---
        // We load the CURRENT data on this device first.
        // We want to keep the current user's Identity (Name, Photo)
        // But overwrite the Learning Data (Words, Score, Money) with the imported data.
        
        const currentData = await idbService.load() || INITIAL_PROGRESS;

        const mergedData: UserProgress = {
            ...importedData, // Start with everything from the backup (Words, Money, Stats)
            
            // PRESERVE IDENTITY of the current device user
            userName: currentData.userName || importedData.userName, 
            photoUrl: currentData.photoUrl || importedData.photoUrl,
            
            // Update timestamps
            lastLocalUpdate: Date.now(),
            hasSeenOnboarding: true // Ensure they don't see onboarding again
        };
        
        memoryCache = mergedData;
        await saveUserProgress(mergedData, true);

        return { success: true, message: "Прогресс восстановлен! Ваш профиль сохранен." };
    } catch (e: any) {
        console.error(e);
        return { success: false, message: "Ошибка кода: убедитесь, что скопировали весь текст." };
    }
};

export const forceSave = async () => {
    if (memoryCache) await saveUserProgress(memoryCache, true);
}
