
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

export interface Word {
  id: string;
  term: string;
  transcription?: string; // e.g. /rɪp/
  russianTransliteration?: string; // e.g. "рип"
  translation: string;
  level: ProficiencyLevel;
  partOfSpeech: string;
  frequency?: 'High' | 'Medium' | 'Low';
  register?: 'Formal' | 'Informal' | 'Neutral' | 'Slang' | 'Literary';
  definition: string;
  usageContext?: string; // Text description of contexts (Business, Legal, etc.)
  examples: WordExample[];
  isCustom?: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: any; // Changed from string to any to support React Nodes (Lucide Icons)
  current: number;
  max: number;
  category: 'learning' | 'dictionary' | 'streak' | 'time' | 'mastery' | 'performance' | 'misc' | 'blitz' | 'social';
}

export interface WordProgress {
  easeFactor: number; // For SuperMemo-2 style SRS (default 2.5)
  interval: number;   // Days until next review
  nextReviewDate: number; // Timestamp
  status: 'new' | 'learning' | 'review' | 'mastered';
  // Advanced SRS metrics (FSRS/SM-2)
  difficulty?: number; // 0 (easy) to 1 (hard)
  stability?: number; // Measure of memory strength
}

export interface UserProgress {
  xp: number;
  streak: number;
  lastLoginDate: string; // YYYY-MM-DD
  wordsLearnedToday: number;
  aiGenerationsToday: number; // Track AI usage limits
  
  premiumStatus: boolean; // True if Lifetime
  premiumExpiration: number | null; // Timestamp if Monthly (null if free or lifetime)

  // Map of wordID -> SRS data
  wordProgress: Record<string, WordProgress>; 
  // Map of wordID -> User Comment
  wordComments: Record<string, string>;
  hasSeenOnboarding: boolean;
  userName?: string;
  photoUrl?: string; // Telegram Profile Photo
  customWords: Word[];
  nextSessionUnlockTime?: number; // Timestamp for 24h lock
  dailyProgressByLevel: Record<string, number>;
  
  // Economy & Gamification
  wallet: {
    coins: number;
  };
  inventory: {
    streakFreeze: number; // Protects streak
    timeFreeze: number;   // Pauses timer in Blitz
    bomb: number;         // Removes wrong answers in Blitz
  };
  blitzHighScores: Record<string, number>; // Level -> Score
}

// Structured response from Gemini (Updated for Tutor Mode)
export interface AIExplanation {
  alternativeDefinition: string; // New simpler definition in English
  detailedExplanation: string; // Tutor-style explanation in Russian
  nuance: string; // Specific usage constraints or connotations
  collocations: { en: string; ru: string }[]; 
  mnemonic: string; 
  extraExamples: { en: string; ru: string }[]; // 3 fresh examples
}

export interface AIWordDetails {
  transcription: string;
  translation: string;
  definition: string;
  partOfSpeech: string;
  exampleEn: string;
  exampleRu: string;
}

export type ViewState = 'onboarding' | 'dashboard' | 'learn_daily' | 'learn_review' | 'levels' | 'dictionary' | 'profile' | 'achievements' | 'progress_stats' | 'blitz_intro' | 'blitz_game' | 'shop';

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
        
        // Navigation
        BackButton: {
          isVisible: boolean;
          show: () => void;
          hide: () => void;
          onClick: (cb: () => void) => void;
          offClick: (cb: () => void) => void;
        };

        // Cloud Storage
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
