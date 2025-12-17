
import { ProficiencyLevel, Word } from '../types';

// Map of level loaders (Lazy Loading Strategy)
const levelLoaders: Record<ProficiencyLevel, () => Promise<{ [key: string]: Word[] }>> = {
  [ProficiencyLevel.A1]: () => import('./levels/A1'),
  [ProficiencyLevel.A2]: () => import('./levels/A2'),
  [ProficiencyLevel.B1]: () => import('./levels/B1'),
  [ProficiencyLevel.B2]: () => import('./levels/B2'),
  [ProficiencyLevel.C1]: () => import('./levels/C1'),
  [ProficiencyLevel.C2]: () => import('./levels/C2'),
};

// Cache to store loaded words to avoid re-fetching
const loadedWordsCache: Record<string, Word[]> = {};

/**
 * Dynamically loads words for a specific level.
 * @param level The proficiency level to load.
 */
export const loadWordsForLevel = async (level: ProficiencyLevel): Promise<Word[]> => {
  if (loadedWordsCache[level]) {
    return loadedWordsCache[level];
  }

  try {
    const module = await levelLoaders[level]();
    // dynamic import returns a module. We need to find the export that contains the array.
    // Based on our file structure, it's named like WORDS_A1, WORDS_A2, etc.
    const exportName = `WORDS_${level}`;
    const words = (module as any)[exportName] as Word[];
    
    if (!words) {
      console.error(`Could not find export ${exportName} in level module`);
      return [];
    }

    loadedWordsCache[level] = words;
    return words;
  } catch (error) {
    console.error(`Failed to load words for level ${level}:`, error);
    return [];
  }
};

/**
 * Loads ALL words from all levels. Use with caution as it loads 6 modules.
 * Useful for global search or total stats.
 */
export const loadAllWords = async (): Promise<Word[]> => {
  const levels = Object.values(ProficiencyLevel);
  const results = await Promise.all(levels.map(lvl => loadWordsForLevel(lvl)));
  return results.flat();
};