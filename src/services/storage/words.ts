
import { ProficiencyLevel, UserProgress, Word } from '../../types';
import { loadAllWords, loadWordsForLevel } from '../../data/words';
import { getUserProgress, saveUserProgress, getSecureNow } from './core';

export const getAllWords = async (): Promise<Word[]> => {
    const dbWords = await loadAllWords();
    const progress = await getUserProgress();
    const combined = [...dbWords, ...progress.customWords];
    
    // De-duplicate by ID using a Map. 
    // This fixes the bug where words appear twice if added to dictionary but also exist in level file.
    const uniqueMap = new Map();
    combined.forEach(word => {
        if (!uniqueMap.has(word.id)) {
            uniqueMap.set(word.id, word);
        }
    });
    
    return Array.from(uniqueMap.values());
};

export const getWordsByLevelAsync = async (level: ProficiencyLevel): Promise<Word[]> => {
    const dbWords = await loadWordsForLevel(level);
    const progress = await getUserProgress();
    const customInLevel = progress.customWords.filter(w => w.level === level);
    // Dedup here as well
    const combined = [...dbWords, ...customInLevel];
    const uniqueMap = new Map();
    combined.forEach(word => {
        if (!uniqueMap.has(word.id)) {
            uniqueMap.set(word.id, word);
        }
    });
    return Array.from(uniqueMap.values());
}

export const addCustomWord = async (word: Word): Promise<UserProgress> => {
    const progress = await getUserProgress();
    // Check if word already exists in custom words
    if (!progress.customWords.some(w => w.id === word.id)) {
        progress.customWords.push(word);
        await saveUserProgress(progress);
    }
    return progress;
};

export const toggleKnownStatus = async (wordId: string): Promise<UserProgress> => {
    const progress = await getUserProgress();
    const now = getSecureNow();
    if (progress.wordProgress[wordId]) {
        delete progress.wordProgress[wordId];
        if (progress.wordComments[wordId]) delete progress.wordComments[wordId];
    } else {
        progress.wordProgress[wordId] = {
            easeFactor: 2.5,
            interval: 30,
            nextReviewDate: now + (30 * 86400000),
            status: 'mastered'
        };
    }
    await saveUserProgress(progress);
    return progress;
};

export const deleteWordFromProgress = async (wordId: string): Promise<UserProgress> => {
    const progress = await getUserProgress();
    if (progress.wordProgress[wordId]) {
        delete progress.wordProgress[wordId];
        if (progress.wordComments[wordId]) delete progress.wordComments[wordId];
        await saveUserProgress(progress);
    }
    return progress;
};

export const saveWordComment = async (wordId: string, comment: string): Promise<UserProgress> => {
    const progress = await getUserProgress();
    if (!comment.trim()) {
        delete progress.wordComments[wordId];
    } else {
        progress.wordComments[wordId] = comment;
    }
    await saveUserProgress(progress);
    return progress;
};

export const getWordsDueForReview = async (allWordIds: string[]): Promise<string[]> => {
    const progress = await getUserProgress();
    const now = getSecureNow();
    return allWordIds.filter(id => {
        const wp = progress.wordProgress[id];
        return wp && wp.status !== 'new' && wp.nextReviewDate <= now;
    });
};

export const lockDailySession = async () => {
    const progress = await getUserProgress();
    const now = getSecureNow();
    progress.nextSessionUnlockTime = now + (24 * 60 * 60 * 1000);
    await saveUserProgress(progress);
};

export const rateWord = async (wordId: string, rating: 'easy' | 'medium' | 'hard', level: ProficiencyLevel): Promise<UserProgress> => {
  const progress = await getUserProgress();
  const now = getSecureNow();
  const today = new Date(now).toISOString().split('T')[0];
  const isPremium = progress.premiumStatus;
  
  // Login/Streak Logic
  if (progress.lastLoginDate !== today) {
      if (progress.lastLoginDate === new Date(now - 86400000).toISOString().split('T')[0]) {
          progress.streak += 1;
      } else {
          progress.streak = 1;
      }
      progress.lastLoginDate = today;
  } else if (progress.streak === 0) {
      progress.streak = 1;
      progress.lastLoginDate = today;
  }

  // --- DETERMINE IF NEW WORD ---
  // We use the count of keys before and after to strictly determine if the word is new to the dictionary.
  // This prevents double-counting words that might be re-rated in the same session.
  const initialCount = Object.keys(progress.wordProgress).length;

  // Ensure wordProgress exists
  let wp = progress.wordProgress[wordId];
  
  if (!wp) {
      // Create new record
      wp = {
        easeFactor: 2.5,
        interval: 0,
        nextReviewDate: 0,
        status: 'new',
        difficulty: 0.3,
        stability: 0
      };
      
      progress.xp += 10;
      progress.wallet.coins += 5; 
  }

  if (rating === 'hard') {
    wp.interval = 0; 
    wp.nextReviewDate = now; 
    wp.status = 'learning';
    if (isPremium) {
        wp.easeFactor = Math.max(1.3, wp.easeFactor - 0.2);
        wp.difficulty = Math.min(1, (wp.difficulty || 0.3) + 0.2);
    } else {
        wp.easeFactor = 2.5; 
    }
  } else if (rating === 'medium') {
    wp.interval = 1;
    wp.nextReviewDate = now + 86400000;
    wp.status = 'learning';
    if (isPremium) {
       wp.easeFactor = Math.max(1.3, wp.easeFactor - 0.15);
    }
  } else if (rating === 'easy') {
    wp.status = 'mastered';
    if (wp.interval === 0) {
        wp.interval = 3; 
        if (isPremium) wp.difficulty = Math.max(0, (wp.difficulty || 0.3) - 0.1);
    } else {
        if (isPremium) {
            const ef = wp.easeFactor || 2.5;
            wp.interval = Math.round(wp.interval * ef);
            wp.easeFactor = ef + 0.15;
            wp.difficulty = Math.max(0, (wp.difficulty || 0.3) - 0.2);
        } else {
            wp.interval = wp.interval + 3; 
        }
    }
    wp.nextReviewDate = now + (wp.interval * 86400000);
  }

  // Update object
  progress.wordProgress[wordId] = wp;

  // --- UPDATE COUNTERS ---
  const finalCount = Object.keys(progress.wordProgress).length;
  
  // Only increment if the dictionary actually grew
  if (finalCount > initialCount) {
      progress.wordsLearnedToday += 1;
      progress.dailyProgressByLevel[level] = (progress.dailyProgressByLevel[level] || 0) + 1;
  }

  await saveUserProgress(progress);
  return progress;
};

// --- DEV TOOLS ---

export const dev_UnlockRealWords = async (count: number = 500, onProgress?: (percent: number) => void) => {
    // 1. Load ALL words from database (A1-C2) and ensure uniqueness
    if (onProgress) onProgress(10);
    const allWords = await getAllWords(); // Changed from loadAllWords() to getAllWords() to ensure deduplication
    if (onProgress) onProgress(30);

    const progress = await getUserProgress();
    const now = getSecureNow();
    
    // 2. Identify words NOT yet in progress
    const knownIds = new Set(Object.keys(progress.wordProgress));
    const unknownWords = allWords.filter(w => !knownIds.has(w.id));
    
    // 3. Select words to add
    // If we have fewer than `count` available, we add all of them.
    // If we have more, we take the first `count`.
    const wordsToAdd = unknownWords.slice(0, count);
    
    console.log(`[DEV] Adding ${wordsToAdd.length} real words to dictionary.`);

    // 4. Add them to progress
    for(let i = 0; i < wordsToAdd.length; i++) {
        const w = wordsToAdd[i];
        progress.wordProgress[w.id] = {
            easeFactor: 2.5,
            interval: 30, // Mark as mastered (30 days interval default)
            nextReviewDate: now + (30 * 86400000),
            status: 'mastered',
            difficulty: 0.5,
            stability: 20
        };
        
        // Update level stats AND daily stats
        progress.dailyProgressByLevel[w.level] = (progress.dailyProgressByLevel[w.level] || 0) + 1;
        progress.wordsLearnedToday += 1;

        // UI Update every 50 items
        if (i % 50 === 0) {
            await new Promise(r => setTimeout(r, 0));
            if (onProgress) {
                // Map 0 -> length to 30% -> 90%
                const percent = 30 + Math.floor((i / wordsToAdd.length) * 60);
                onProgress(percent);
            }
        }
    }
    
    if (onProgress) onProgress(95);
    await saveUserProgress(progress, true);
    if (onProgress) onProgress(100);
    
    return wordsToAdd.length;
};

export const dev_PopulateReview = async (count: number = 15, onProgress?: (percent: number) => void) => {
    if (onProgress) onProgress(10);
    const allWords = await getAllWords(); // Changed from loadAllWords() to getAllWords()
    if (onProgress) onProgress(20);
    
    const progress = await getUserProgress();
    const now = getSecureNow();

    // Pick random 15 words from all available (including known ones to force them into review)
    // If we want only words that are already known, we should filter. 
    // But typically dev tool wants to force *some* words into review.
    
    // Better strategy: Pick from ALL words, so we can populate review even on empty account
    const shuffled = allWords.sort(() => 0.5 - Math.random()).slice(0, count);
    
    let addedCount = 0;

    for(let index = 0; index < shuffled.length; index++) {
        const w = shuffled[index];
        let interval = 1;
        
        // Random distribution for Review Intervals (5 days to 1 Year)
        const rnd = Math.random();
        
        if (rnd < 0.2) interval = 5; 
        else if (rnd < 0.4) interval = 30; 
        else if (rnd < 0.6) interval = 90; 
        else if (rnd < 0.8) interval = 180; 
        else interval = 365; 

        // We set nextReviewDate to NOW (or slightly past) so they show up immediately in Review Session.
        // But the 'interval' is high, simulating a word learned long ago.
        progress.wordProgress[w.id] = {
            easeFactor: 2.5,
            interval: interval,
            nextReviewDate: now - 60000, // Due 1 minute ago
            status: 'review',
            difficulty: 0.5,
            stability: interval
        };
        
        addedCount++;

        // UI Update for small batch
        if (onProgress) {
            const percent = 20 + Math.floor((index / count) * 70);
            onProgress(percent);
        }
    }

    if (onProgress) onProgress(95);
    await saveUserProgress(progress, true); 
    if (onProgress) onProgress(100);
    return addedCount;
};

// Tool to find duplicate IDs in the raw data files
export const dev_FindDuplicates = async (): Promise<string[]> => {
    // We use the raw loadAllWords here which does NOT dedup, 
    // so we can see the conflicts from the source files.
    const allWords = await loadAllWords(); 
    
    const idTracker: Record<string, Word[]> = {};
    const duplicates: string[] = [];

    // Group by ID
    allWords.forEach(w => {
        if (!idTracker[w.id]) {
            idTracker[w.id] = [];
        }
        idTracker[w.id].push(w);
    });

    // Check for collisions
    Object.keys(idTracker).forEach(id => {
        const matches = idTracker[id];
        if (matches.length > 1) {
            const description = matches.map(m => `"${m.term}" (${m.level})`).join(' vs ');
            duplicates.push(`ID [${id}] is duplicated: ${description}`);
        }
    });

    return duplicates;
};
