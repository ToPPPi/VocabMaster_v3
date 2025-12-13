
import React, { useState, useEffect } from 'react';
import { Lock, CheckCircle, BookOpen, GraduationCap, Clock, Zap, Play } from 'lucide-react';
import { Header } from './Header';
import { ProficiencyLevel, UserProgress } from '../types';
import { getAllWords } from '../services/storageService';
import { triggerHaptic } from '../utils/uiHelpers';

const LEVELS = Object.values(ProficiencyLevel) as ProficiencyLevel[];
const MIN_WORDS_FOR_BLITZ = 5;

interface LevelsScreenProps {
    progress: UserProgress;
    mode: 'learn' | 'browse' | 'blitz';
    onBack: () => void;
    onSelectLevel: (lvl: ProficiencyLevel) => void;
}

export const LevelsScreen: React.FC<LevelsScreenProps> = ({ progress, mode, onBack, onSelectLevel }) => {
    const [counts, setCounts] = useState<Record<string, number>>({});
    const [learnedCounts, setLearnedCounts] = useState<Record<string, number>>({});

    useEffect(() => {
        window.scrollTo(0, 0); // Reset scroll on mount
        const load = async () => {
            const all = await getAllWords();
            const c: Record<string, number> = {};
            const l: Record<string, number> = {};
            
            const learnedIds = Object.keys(progress.wordProgress);

            LEVELS.forEach(lvl => {
                const wordsInLevel = all.filter(w => w.level === lvl);
                c[lvl] = wordsInLevel.length;
                l[lvl] = wordsInLevel.filter(w => learnedIds.includes(w.id)).length;
            });
            setCounts(c);
            setLearnedCounts(l);
        };
        load();
    }, [progress]);

    // GLOBAL LIMIT CHECK
    const isDailyLimitReached = !progress.premiumStatus && progress.wordsLearnedToday >= 10;

    const getTitle = () => {
        if (mode === 'learn') return "Учить новые слова";
        if (mode === 'blitz') return "Блиц: Выберите уровень";
        return "Обзор уровней";
    };

    return (
        <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pb-32 transition-colors duration-300">
            <Header title={getTitle()} onBack={onBack} />
            
            {mode === 'learn' && isDailyLimitReached && (
                <div className="mx-5 mt-4 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800 rounded-2xl flex items-center gap-3">
                    <Clock className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                    <div>
                        <h3 className="text-sm font-bold text-amber-900 dark:text-amber-200">Дневной лимит исчерпан</h3>
                        <p className="text-xs text-amber-700 dark:text-amber-400">Вы выучили 10 слов сегодня. Возвращайтесь завтра или обновитесь до Premium.</p>
                    </div>
                </div>
            )}
            
            <div className="p-5 grid grid-cols-1 gap-4">
                {LEVELS.map(lvl => {
                     const wordCount = counts[lvl] || 0;
                     const learnedTotal = learnedCounts[lvl] || 0;
                     const learnedToday = (progress.dailyProgressByLevel && progress.dailyProgressByLevel[lvl]) || 0;
                     
                     // Lock Logic
                     const isContentLocked = ['B2', 'C1', 'C2'].includes(lvl) && !progress.premiumStatus;
                     const isTimeLocked = mode === 'learn' && isDailyLimitReached;
                     const isBlitzLocked = mode === 'blitz' && learnedTotal < MIN_WORDS_FOR_BLITZ;
                     
                     const isLocked = isContentLocked || isTimeLocked || isBlitzLocked;

                     const isComplete = wordCount > 0 && learnedTotal >= wordCount;
                     
                     return (
                        <div key={lvl} className={`bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-100 dark:border-slate-800 flex items-center justify-between shadow-sm transition-all ${isLocked ? 'opacity-70 grayscale' : 'hover:shadow-md'}`}>
                            <div className="flex items-center gap-5">
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-xl shadow-sm relative ${
                                    isLocked ? 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500' 
                                    : mode === 'blitz' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400' 
                                    : isComplete ? 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400' // Increased opacity for dark mode visibility
                                    : 'bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400'
                                }`}>
                                    {isComplete && mode !== 'blitz' && <div className="absolute -top-2 -right-2 bg-emerald-500 rounded-full p-1 border-2 border-white dark:border-slate-900"><CheckCircle className="w-3 h-3 text-white" /></div>}
                                    {lvl}
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 dark:text-white text-lg">Уровень {lvl}</h3>
                                    <div className="flex flex-col text-sm text-slate-500 dark:text-slate-400 font-medium">
                                        {mode === 'blitz' ? (
                                            <span>Доступно слов: {learnedTotal}</span>
                                        ) : (
                                            <span>{learnedTotal} / {wordCount} выучено</span>
                                        )}
                                        
                                        {mode === 'learn' && learnedToday > 0 && <span className="text-emerald-600 dark:text-emerald-400 font-bold text-xs mt-0.5">сегодня: +{learnedToday}</span>}
                                        {isBlitzLocked && mode === 'blitz' && <span className="text-rose-500 font-bold text-xs mt-0.5">Мин. {MIN_WORDS_FOR_BLITZ} слов</span>}
                                    </div>
                                </div>
                            </div>
                            
                            {isLocked ? (
                                <Lock className="w-6 h-6 text-slate-300 dark:text-slate-600" />
                            ) : isComplete && mode === 'learn' ? (
                                <div className="px-4 py-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 font-bold text-sm rounded-xl flex items-center gap-1">
                                    <CheckCircle className="w-4 h-4" />
                                    Готово
                                </div>
                            ) : (
                                <button 
                                    onClick={() => { triggerHaptic('medium'); onSelectLevel(lvl); }}
                                    disabled={isLocked}
                                    className={`active:scale-95 transition-transform flex items-center gap-2 font-semibold rounded-xl ${
                                        mode === 'browse' 
                                            ? 'px-4 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 shadow-sm' // Browse
                                            : 'px-4 py-2 text-sm bg-slate-900 dark:bg-violet-600 text-white shadow-md' // Learn
                                    } ${mode === 'blitz' ? 'bg-violet-600 text-white shadow-md' : ''}`}
                                >
                                    {mode === 'learn' && <GraduationCap className="w-4 h-4" />}
                                    {mode === 'browse' && <BookOpen className="w-4 h-4" />}
                                    {mode === 'blitz' && <Zap className="w-4 h-4 fill-current" />}
                                    
                                    {mode === 'learn' ? 'Учить' : mode === 'blitz' ? 'Играть' : 'Обзор'}
                                </button>
                            )}
                        </div>
                     );
                })}
            </div>
        </div>
    );
};
