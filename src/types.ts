
export enum ProficiencyLevel {
  A1 = 'A1',
  A2 = 'A2',
  B1 = 'B1',
  B2 = 'B2',
  C1 = 'C1',
  C2 = 'C2',
}

export interface WordExample {
  en: string;
  ru: string;
}

export interface SecondaryMeaning {
  meaning: string;
  translation: string;
  example?: WordExample;
}

export interface Word {
  id: string;
  term: string;
  transcription?: string;
  russianTransliteration?: string;
  translation: string;
  level: ProficiencyLevel;
  partOfSpeech: string;
  frequency?: 'High' | 'Medium' | 'Low';
  register?: 'Formal' | 'Informal' | 'Neutral' | 'Slang' | 'Literary';
  definition: string;
  usageContext?: string;
  examples: WordExample[];
  secondaryMeanings?: SecondaryMeaning[];
  isCustom?: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: any;
  current: number;
  max: number;
  category: 'learning' | 'dictionary' | 'streak' | 'time' | 'mastery' | 'performance' | 'misc' | 'blitz' | 'social';
}

export interface WordProgress {
  easeFactor: number;
  interval: number;
  nextReviewDate: number;
  status: 'new' | 'learning' | 'review' | 'mastered';
  difficulty?: number;
  stability?: number;
}

export interface UserProgress {
  xp: number;
  streak: number;
  lastLoginDate: string;
  
  // Sync Meta
  lastLocalUpdate: number; // When was the DB last touched locally
  lastCloudSync: number;   // When was the last successful upload to Telegram Cloud
  
  wordsLearnedToday: number;
  aiGenerationsToday: number;
  
  darkMode: boolean;

  premiumStatus: boolean;
  premiumExpiration: number | null;

  wordProgress: Record<string, WordProgress>; 
  wordComments: Record<string, string>;
  
  usedPromoCodes: string[];

  hasSeenOnboarding: boolean;
  userName?: string;
  photoUrl?: string;
  customWords: Word[];
  nextSessionUnlockTime?: number;
  dailyProgressByLevel: Record<string, number>;
  
  wallet: {
    coins: number;
  };
  inventory: {
    streakFreeze: number;
    timeFreeze: number;
    bomb: number;
  };
  blitzHighScores: Record<string, number>;
}

export interface AIExplanation {
  alternativeDefinition: string;
  detailedExplanation: string;
  nuance: string;
  collocations: { en: string; ru: string }[]; 
  mnemonic: string; 
  extraExamples: { en: string; ru: string }[];
}

export interface AIWordDetails {
  transcription: string;
  translation: string;
  definition: string;
  partOfSpeech: string;
  exampleEn: string;
  exampleRu: string;
}

export type ViewState = 'onboarding' | 'dashboard' | 'learn_daily' | 'learn_review' | 'levels' | 'dictionary' | 'profile' | 'achievements' | 'progress_stats' | 'blitz_intro' | 'blitz_game' | 'shop' | 'data_management';

declare global {
  interface Window {
    Telegram?: {
      WebApp: {
        initData?: string;
        initDataUnsafe?: {
          user?: {
            id: number;
            first_name: string;
            last_name?: string;
            username?: string;
            photo_url?: string;
          };
        };
        ready: () => void;
        expand: () => void;
        setHeaderColor: (color: string) => void;
        setBackgroundColor: (color: string) => void;
        isVersionAtLeast: (version: string) => boolean;
        openInvoice: (url: string, callback?: (status: 'paid' | 'cancelled' | 'failed' | 'pending') => void) => void; 
        openTelegramLink: (url: string) => void;
        openLink: (url: string, options?: { try_instant_view?: boolean }) => void;
        
        BackButton: {
          isVisible: boolean;
          show: () => void;
          hide: () => void;
          onClick: (cb: () => void) => void;
          offClick: (cb: () => void) => void;
        };

        CloudStorage: {
          setItem: (key: string, value: string, callback?: (err: any, stored: boolean) => void) => void;
          getItem: (key: string, callback?: (err: any, value: string) => void) => void;
          getItems: (keys: string[], callback?: (err: any, values: Record<string, string>) => void) => void;
          removeItem: (key: string, callback?: (err: any, deleted: boolean) => void) => void;
          removeItems: (keys: string[], callback?: (err: any, deleted: boolean) => void) => void;
          getKeys: (callback?: (err: any, keys: string[]) => void) => void;
        };

        HapticFeedback: {
          impactOccurred: (style: 'light' | 'medium' | 'heavy' | 'rigid' | 'soft') => void;
          notificationOccurred: (type: 'error' | 'success' | 'warning') => void;
          selectionChanged: () => void;
        };
      };
    };
  }
}
