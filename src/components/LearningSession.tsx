
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Loader2, Check, X, Volume2, Brain, Sparkles, Zap, ThumbsUp, Tag, ArrowRight, Crown, RotateCcw, GraduationCap, Quote, WifiOff, Lightbulb, Split } from 'lucide-react';
import { ProficiencyLevel, UserProgress, Word, AIExplanation } from '../types';
import { getWordsByLevelAsync, getAllWords, getWordsDueForReview, rateWord, getUserProgress, lockDailySession, incrementAIUsage, checkAIUsageLimit, togglePremium } from '../services/storageService';
import { explainWordWithAI } from '../services/aiService';
import { triggerHaptic, speak, shuffleArray } from '../utils/uiHelpers';

const DAILY_LIMIT_FREE = 10;
const DAILY_LIMIT_PREMIUM = 8000;

interface LearningSessionProps {
    mode: 'daily' | 'review';
    level?: ProficiencyLevel;
    progress: UserProgress;
    onComplete: () => void;
    onBuyPremium?: () => void; 
}

export const LearningSession: React.FC<LearningSessionProps> = ({ mode, level, progress, onComplete, onBuyPremium }) => {
    const [sessionWords, setSessionWords] = useState<Word[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [levelCompleted, setLevelCompleted] = useState(false);
    
    const [localLearnedCount, setLocalLearnedCount] = useState(progress.wordsLearnedToday);

    // Refs for scrolling
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const loadWords = async () => {
        setIsLoading(true);
        setCompleted(false);
        setLevelCompleted(false);
        setCurrentIndex(0);
        
        const currentProgress = await getUserProgress();
        setLocalLearnedCount(currentProgress.wordsLearnedToday);
        
        const limitToday = currentProgress.premiumStatus ? DAILY_LIMIT_PREMIUM : DAILY_LIMIT_FREE;
        
        if (mode === 'daily' && !currentProgress.premiumStatus && currentProgress.wordsLearnedToday >= limitToday) {
             onComplete();
             return;
        }

        let words: Word[] = [];
        
        if (mode === 'daily') {
            const lvl = level || ProficiencyLevel.A1;
            const allLvlWords = await getWordsByLevelAsync(lvl);
            const available = allLvlWords.filter(w => !currentProgress.wordProgress[w.id]);
            
            if (available.length === 0 && allLvlWords.length > 0) {
                 setLevelCompleted(true);
                 setIsLoading(false);
                 return;
            }
            
            const wordsLeftForFreeUser = limitToday - currentProgress.wordsLearnedToday;
            const batchSize = currentProgress.premiumStatus ? 20 : Math.min(10, wordsLeftForFreeUser);
            
            const shuffledAvailable = shuffleArray(available);
            
            words = shuffledAvailable.slice(0, Math.max(1, batchSize));
            
        } else {
            const allWords = await getAllWords();
            const allWordIds = Object.keys(currentProgress.wordProgress);
            const dueIds = await getWordsDueForReview(allWordIds);
            words = allWords.filter(w => dueIds.includes(w.id));
            
            words = shuffleArray(words);
        }
        
        setSessionWords(words);
        setIsLoading(false);
        
        if (words.length === 0 && !levelCompleted) {
             setCompleted(true);
        }
    };

    useEffect(() => {
        loadWords();
    }, [mode, level]); 

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [aiData, setAiData] = useState<AIExplanation | null>(null);
    const [isLoadingAI, setIsLoadingAI] = useState(false);
    const [completed, setCompleted] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [aiError, setAiError] = useState<string | null>(null);
    const [isProcessingRating, setIsProcessingRating] = useState(false);
    
    const currentWord = sessionWords[currentIndex];

    // Scroll to top when card changes
    useEffect(() => { 
        setIsFlipped(false); 
        setAiData(null); 
        setAiError(null);
        
        // Force scroll reset on the scrollable container
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTop = 0;
        }
    }, [currentIndex]);

    // Also ensure scroll is reset when flipping, just in case
    useEffect(() => {
        if (isFlipped && scrollContainerRef.current) {
            scrollContainerRef.current.scrollTop = 0;
        }
    }, [isFlipped]);

    const handleSpeak = (text: string) => {
        setIsPlaying(true);
        speak(text);
        setTimeout(() => setIsPlaying(false), 1500); 
    };

    // SNAPSHOT: Keep track of the word's status BEFORE we rate it to prevent UI flickering
    // when the global progress object mutates during the transition animation.
    const initialWordProgress = useMemo(() => {
        if (!currentWord) return undefined;
        // Return a copy to avoid mutation reference issues
        const wp = progress.wordProgress[currentWord.id];
        return wp ? { ...wp } : undefined;
    }, [currentWord]); // Only update when the word itself changes (currentIndex changes)

    const getNextIntervalLabel = (rating: 'hard' | 'medium' | 'easy') => {
        if (!currentWord) return '';
        // Use the snapshot instead of live progress to prevent visual jumping
        const wp = initialWordProgress || { interval: 0, easeFactor: 2.5 };
        let days = 0;

        if (rating === 'hard') return '< 1 мин';
        else if (rating === 'medium') days = 1;
        else if (rating === 'easy') {
            if (wp.interval === 0) days = 3;
            else if (wp.interval === 1) days = 5;
            else days = Math.round(wp.interval * wp.easeFactor);
        }
        return days === 1 ? '1 день' : `${days} дн.`;
    };

    const handleRating = async (rating: 'easy' | 'medium' | 'hard') => {
        if (!currentWord || isProcessingRating) return;
        setIsProcessingRating(true);
        triggerHaptic('medium');
        
        const wordId = currentWord.id;
        const wordLevel = currentWord.level;
        const isLastCard = currentIndex >= sessionWords.length - 1;

        try {
            const updatedProgress = await rateWord(wordId, rating, wordLevel);
            setLocalLearnedCount(updatedProgress.wordsLearnedToday);

            const limitNow = updatedProgress.premiumStatus ? DAILY_LIMIT_PREMIUM : DAILY_LIMIT_FREE;
            
            if (mode === 'daily' && !updatedProgress.premiumStatus && updatedProgress.wordsLearnedToday >= limitNow) {
                 await lockDailySession();
            }

            if (!isLastCard) {
                setTimeout(() => {
                    setIsFlipped(false);
                    setCurrentIndex(prev => prev + 1);
                    setIsProcessingRating(false);
                }, 150);
            } else {
                setCompleted(true);
                setIsProcessingRating(false);
            }
        } catch (e) {
            console.error(e);
            setIsProcessingRating(false);
        }
    };

    const handleAI = async () => {
        if (!currentWord || isLoadingAI) return;
        
        if (!navigator.onLine) {
            triggerHaptic('error');
            setAiError("Нет интернета. AI-тьютор не работает оффлайн.");
            return;
        }

        const canUse = await checkAIUsageLimit();
        if (!canUse) {
            triggerHaptic('heavy');
            setAiError("Лимит ИИ на сегодня исчерпан. Обновитесь до Premium!");
            return;
        }

        triggerHaptic('medium');
        setIsLoadingAI(true);
        setAiError(null);
        
        try {
            const data = await explainWordWithAI(currentWord.term, currentWord.level);
            if (data) {
                await incrementAIUsage();
                setAiData(data);
            } else {
                setAiError("Не удалось получить ответ от ИИ.");
            }
        } catch (e: any) {
            console.error(e);
            setAiError(e.message || "Ошибка ИИ.");
        }
        setIsLoadingAI(false);
    };

    const handleFinish = () => {
        triggerHaptic('heavy');
        onComplete();
    };
    
    const handleContinue = async () => {
        triggerHaptic('medium');
        await loadWords();
    };
    
    const handleBuyPremiumAction = async () => {
        triggerHaptic('medium');
        if (onBuyPremium) {
            onBuyPremium();
        } else {
            onComplete();
        }
    };

    const getRegisterBadgeClass = (register?: string) => {
        if (!register) return 'bg-slate-100 text-slate-500 dark:bg-slate-700 dark:text-slate-300';
        if (register === 'Slang') return 'bg-pink-100 text-pink-700 border border-pink-200 dark:bg-pink-900/30 dark:text-pink-300 dark:border-pink-800';
        if (register === 'Rude') return 'bg-red-100 text-red-700 border border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800';
        if (register === 'Spoken' || register === 'Informal') return 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300';
        if (register === 'Literary') return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300';
        if (register === 'Formal') return 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300';
        return 'bg-violet-50 text-violet-600 dark:bg-violet-900/30 dark:text-violet-300';
    };

    if (isLoading) return <div className="min-h-screen flex items-center justify-center dark:bg-slate-900"><Loader2 className="w-8 h-8 animate-spin text-violet-600 dark:text-violet-400"/></div>;

    if (levelCompleted) {
        return (
            <div className="h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-900 to-slate-900 z-0"></div>
                <div className="relative z-20 w-full max-w-sm flex flex-col items-center">
                    <div className="w-40 h-40 bg-gradient-to-br from-yellow-300 via-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl relative mb-8">
                        <Crown className="w-20 h-20 text-white drop-shadow-md" />
                    </div>
                    <h2 className="text-sm font-bold text-indigo-300 uppercase tracking-[0.2em] mb-2">Поздравляем!</h2>
                    <h1 className="text-5xl font-black text-white mb-6">Уровень {level}<br/>Пройден</h1>
                    <button onClick={handleFinish} className="w-full py-4 bg-white text-indigo-900 rounded-2xl font-black text-lg shadow-xl active:scale-95 transition-all flex items-center justify-center gap-2">
                        <span>Продолжить путь</span><ArrowRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
        );
    }

    if (!currentWord && !completed) {
        setCompleted(true);
    }

    if (completed) {
        const isLimitReached = !progress.premiumStatus && localLearnedCount >= DAILY_LIMIT_FREE;
        const canContinue = mode === 'daily' && !isLimitReached;

        return (
            <div className="h-screen bg-white dark:bg-slate-900 flex flex-col items-center justify-center p-8 text-center relative">
                <div className="w-24 h-24 bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg animate-bounce">
                    <Check className="w-12 h-12" />
                </div>
                <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2">Сессия завершена!</h2>
                
                {isLimitReached && mode === 'daily' ? (
                     <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-2xl border border-amber-100 dark:border-amber-800 mb-8 max-w-xs mx-auto animate-in fade-in zoom-in duration-300">
                        <p className="text-amber-800 dark:text-amber-300 font-bold text-sm mb-1">Дневной лимит исчерпан</p>
                        <p className="text-amber-600 dark:text-amber-400 text-xs">Возвращайтесь завтра. Сегодня сессия завершена.</p>
                     </div>
                ) : (
                    <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-xs mx-auto">
                        {mode === 'daily' ? `Вы отлично справились с порцией из ${sessionWords.length} слов.` : "Вы повторили все запланированные слова."}
                    </p>
                )}
                
                <div className="w-full max-w-xs space-y-3">
                    {canContinue && (
                        <button onClick={handleContinue} className="w-full px-6 py-4 bg-violet-600 text-white rounded-2xl font-bold text-lg shadow-xl active:scale-95 transition-transform flex items-center justify-center gap-2">
                            <RotateCcw className="w-5 h-5" /> Учить еще
                        </button>
                    )}
                    
                    {isLimitReached && (
                         <button onClick={handleBuyPremiumAction} className="w-full px-6 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-2xl font-bold text-lg shadow-xl active:scale-95 transition-transform flex items-center justify-center gap-2">
                            <Crown className="w-5 h-5" /> Снять лимиты (Premium)
                        </button>
                    )}
                    
                    <button onClick={handleFinish} className={`w-full px-6 py-4 rounded-2xl font-bold text-lg active:scale-95 transition-transform ${canContinue || isLimitReached ? 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300' : 'bg-slate-900 text-white dark:bg-slate-800 shadow-xl'}`}>
                        В меню
                    </button>
                </div>
            </div>
        );
    }

    if (!currentWord) return null;

    return (
        <div className="h-screen flex flex-col bg-slate-50 dark:bg-slate-950 relative pb-safe overflow-hidden transition-colors duration-300">
            {/* Header */}
            <div className="px-6 pt-6 pb-2 flex justify-between items-center z-20">
                <button onClick={handleFinish} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-2">
                    <X className="w-6 h-6" />
                </button>
                <div className="flex gap-1.5 flex-1 mx-4 max-w-[200px]">
                    <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                         <div className="h-full bg-violet-600 transition-all duration-300" style={{ width: `${((currentIndex) / sessionWords.length) * 100}%` }}></div>
                    </div>
                </div>
                <div className="w-10"></div>
            </div>

            {/* Card */}
            <div className="flex-1 px-4 py-2 flex flex-col relative w-full perspective-1000">
                <div 
                    className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}
                    onClick={() => { triggerHaptic('light'); setIsFlipped(!isFlipped); }}
                >
                    {/* FRONT */}
                    <div className="absolute inset-0 bg-white dark:bg-slate-900 rounded-[2rem] shadow-xl shadow-slate-200/50 dark:shadow-slate-950/50 flex flex-col items-center justify-center text-center backface-hidden border border-slate-100 dark:border-slate-800 p-6 z-20">
                        <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-auto pt-4">Нажмите, чтобы перевернуть</span>
                        
                        <div className="my-auto w-full">
                            <h1 className="text-5xl font-extrabold text-slate-900 dark:text-white mb-3 tracking-tight break-words">{currentWord.term}</h1>
                            {currentWord.transcription && (
                                <p className="text-violet-500 dark:text-violet-400 font-medium text-xl opacity-80 mb-8">{currentWord.transcription}</p>
                            )}
                            
                            {/* Front Examples */}
                            <div className="space-y-3 w-full text-left bg-slate-50 dark:bg-slate-800 p-5 rounded-2xl border border-slate-100 dark:border-slate-700">
                                    {currentWord.examples.slice(0, 3).map((ex, i) => (
                                        <div key={i} className="flex gap-3">
                                            <div className="w-1.5 h-1.5 bg-violet-400 rounded-full mt-2 shrink-0"></div>
                                            <p className="text-slate-700 dark:text-slate-300 text-base font-medium leading-snug">"{ex.en}"</p>
                                        </div>
                                    ))}
                            </div>
                        </div>

                         <div className="mt-auto pb-4">
                            <button 
                                onClick={(e) => { e.stopPropagation(); triggerHaptic('light'); handleSpeak(currentWord.term); }}
                                className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${isPlaying ? 'bg-violet-600 text-white scale-110' : 'bg-violet-50 text-violet-600 hover:bg-violet-100 dark:bg-slate-800 dark:text-violet-400 dark:hover:bg-slate-700'}`}
                            >
                                <Volume2 className="w-7 h-7" />
                            </button>
                        </div>
                    </div>

                    {/* BACK */}
                    <div className="absolute inset-0 bg-white dark:bg-slate-900 rounded-[2rem] shadow-xl shadow-slate-200/50 dark:shadow-slate-950/50 flex flex-col w-full backface-hidden border border-slate-100 dark:border-slate-800 rotate-y-180 overflow-hidden z-20">
                        <div ref={scrollContainerRef} className="flex-1 overflow-y-auto p-6 space-y-6">
                             <div className="flex justify-between items-start pb-4 border-b border-slate-50 dark:border-slate-800">
                                <div>
                                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white break-words">{currentWord.term}</h2>
                                    {/* Added Transliteration here, only on Back */}
                                    {currentWord.russianTransliteration && (
                                        <p className="text-sm font-medium text-slate-400 dark:text-slate-500 mt-1 mb-1">[{currentWord.russianTransliteration}]</p>
                                    )}
                                    <p className="text-xl text-violet-600 dark:text-violet-400 font-bold mt-1">{currentWord.translation}</p>
                                </div>
                                <button 
                                    onClick={(e) => { e.stopPropagation(); handleSpeak(currentWord.term); }}
                                    className="p-3 border border-slate-100 dark:border-slate-700 rounded-xl active:bg-slate-50 dark:active:bg-slate-800"
                                >
                                    <Volume2 className="w-6 h-6 text-slate-600 dark:text-slate-300" />
                                </button>
                            </div>

                            <div className="flex gap-2 flex-wrap">
                                {currentWord.register && (
                                    <span className={`px-2 py-1 text-xs font-bold rounded-lg uppercase flex items-center gap-1 ${getRegisterBadgeClass(currentWord.register)}`}>
                                        <Tag className="w-3 h-3"/> {currentWord.register}
                                    </span>
                                )}
                                <span className="px-2 py-1 bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400 text-xs font-bold rounded-lg uppercase">{currentWord.partOfSpeech}</span>
                                {currentWord.frequency && (
                                    <span className="px-2 py-1 bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400 text-xs font-bold rounded-lg uppercase">{currentWord.frequency} FREQ</span>
                                )}
                            </div>

                            <div>
                                <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase block mb-2 tracking-wide">Определение</span>
                                <p className="text-slate-800 dark:text-slate-200 text-lg leading-relaxed font-medium">{currentWord.definition}</p>
                            </div>

                            {/* Usage Context */}
                            {currentWord.usageContext && (
                                <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-4 border border-emerald-100 dark:border-emerald-800">
                                    <div className="flex items-center gap-2 mb-2 text-emerald-700 dark:text-emerald-400">
                                        <Lightbulb className="w-4 h-4" />
                                        <span className="font-bold text-xs uppercase">Контекст использования</span>
                                    </div>
                                    <p className="text-sm text-slate-700 dark:text-slate-300 whitespace-pre-line leading-relaxed">{currentWord.usageContext}</p>
                                </div>
                            )}

                            {/* Examples on Back */}
                            <div>
                                <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase block mb-3 tracking-wide">Примеры</span>
                                <div className="space-y-4">
                                    {currentWord.examples.map((ex, i) => (
                                        <div key={i} className="pl-3 border-l-2 border-violet-200 dark:border-violet-700">
                                            <p className="text-slate-900 dark:text-slate-200 font-medium mb-1">"{ex.en}"</p>
                                            <p className="text-slate-500 dark:text-slate-400 text-sm">{ex.ru}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* SECONDARY MEANINGS BLOCK - NEW ADDITION */}
                            {currentWord.secondaryMeanings && currentWord.secondaryMeanings.length > 0 && (
                                <div className="pt-2">
                                    <div className="flex items-center gap-2 mb-3 text-slate-400 dark:text-slate-500">
                                        <Split className="w-4 h-4" />
                                        <span className="text-xs font-bold uppercase tracking-wide">Другие значения</span>
                                    </div>
                                    <div className="space-y-3">
                                        {currentWord.secondaryMeanings.map((meaning, idx) => (
                                            <div key={idx} className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-3 border border-slate-100 dark:border-slate-800">
                                                <div className="flex justify-between items-start mb-1">
                                                    <span className="font-bold text-slate-800 dark:text-slate-200 text-sm">{meaning.translation}</span>
                                                    <span className="text-[10px] text-slate-400 bg-white dark:bg-slate-700 px-1.5 py-0.5 rounded border border-slate-100 dark:border-slate-600">Alt</span>
                                                </div>
                                                <p className="text-xs text-slate-500 dark:text-slate-400 mb-2 leading-tight">{meaning.meaning}</p>
                                                {meaning.example && (
                                                    <div className="pl-2 border-l-2 border-slate-300 dark:border-slate-600">
                                                        <p className="text-xs text-slate-600 dark:text-slate-300 italic">"{meaning.example.en}"</p>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* AI Content */}
                            {aiData && (
                                <div className="space-y-4 animate-in fade-in zoom-in duration-500 pt-6 border-t border-slate-100 dark:border-slate-800">
                                    <div className="bg-violet-50 dark:bg-violet-900/20 rounded-2xl p-5 border border-violet-100 dark:border-violet-800">
                                        <div className="flex items-center gap-2 mb-3 text-violet-700 dark:text-violet-300">
                                            <GraduationCap className="w-5 h-5" />
                                            <span className="font-bold text-sm uppercase">AI Разбор</span>
                                        </div>
                                        <p className="text-sm text-slate-900 dark:text-slate-100 leading-relaxed mb-3">{aiData.detailedExplanation}</p>
                                        
                                        {aiData.nuance && (
                                            <div className="mt-3 pt-3 border-t border-violet-200/50 dark:border-violet-700/50">
                                                <span className="text-xs font-bold text-violet-500 dark:text-violet-400 uppercase block mb-1">Нюансы</span>
                                                <p className="text-sm text-slate-700 dark:text-slate-300">{aiData.nuance}</p>
                                            </div>
                                        )}
                                    </div>

                                    {aiData.collocations && aiData.collocations.length > 0 && (
                                        <div className="bg-sky-50 dark:bg-sky-900/20 rounded-2xl p-4 border border-sky-100 dark:border-sky-800">
                                            <div className="flex items-center gap-2 mb-2 text-sky-700 dark:text-sky-300">
                                                <Quote className="w-4 h-4" />
                                                <span className="font-bold text-xs uppercase">Устойчивые фразы</span>
                                            </div>
                                            <ul className="space-y-2">
                                                {aiData.collocations.map((col, i) => (
                                                    <li key={i} className="text-sm text-slate-700 dark:text-slate-300">
                                                        <span className="font-bold text-sky-800 dark:text-sky-400">{col.en}</span> - {col.ru}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    <div className="bg-amber-50 dark:bg-amber-900/20 rounded-2xl p-4 border border-amber-100 dark:border-amber-800">
                                            <div className="flex items-center gap-2 mb-2 text-amber-700 dark:text-amber-300">
                                            <Brain className="w-4 h-4" />
                                            <span className="font-bold text-xs uppercase">Запоминалка</span>
                                        </div>
                                        <p className="text-sm text-slate-800 dark:text-slate-200 italic font-medium">"{aiData.mnemonic}"</p>
                                    </div>

                                    {/* Extra Examples */}
                                    {aiData.extraExamples && aiData.extraExamples.length > 0 && (
                                        <div className="bg-violet-50 dark:bg-violet-900/20 rounded-2xl p-5 border border-violet-100 dark:border-violet-800">
                                            <span className="text-xs font-bold text-violet-500 dark:text-violet-400 uppercase block mb-2">Еще примеры</span>
                                            <div className="space-y-3">
                                                {aiData.extraExamples.map((ex, i) => (
                                                    <div key={i} className="pl-2 border-l-2 border-violet-300 dark:border-violet-600">
                                                        <p className="text-slate-800 dark:text-slate-200 text-xs font-medium mb-0.5">"{ex.en}"</p>
                                                        <p className="text-slate-500 dark:text-slate-400 text-[10px]">{ex.ru}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}

                             {/* AI Button */}
                            <div className="pt-4 pb-20">
                                {aiError && (
                                    <div className={`mb-3 p-3 border rounded-xl text-xs font-bold text-center flex items-center justify-center gap-2 ${aiError.toLowerCase().includes('limit') || aiError.toLowerCase().includes('лимит') ? 'bg-amber-50 border-amber-100 text-amber-700 dark:bg-amber-900/30 dark:border-amber-800 dark:text-amber-400' : 'bg-rose-50 border-rose-100 text-rose-600 dark:bg-rose-900/30 dark:border-rose-800 dark:text-rose-400'}`}>
                                        {aiError.toLowerCase().includes('limit') || aiError.toLowerCase().includes('лимит') ? <Crown className="w-4 h-4"/> : <WifiOff className="w-4 h-4"/>} 
                                        {aiError}
                                    </div>
                                )}
                                <button 
                                    onClick={(e) => { e.stopPropagation(); handleAI(); }}
                                    disabled={isLoadingAI}
                                    className={`w-full py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-transform ${isLoadingAI ? 'bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-500' : aiData ? 'bg-white border-2 border-violet-100 text-violet-600 dark:bg-slate-800 dark:border-violet-900 dark:text-violet-400' : 'bg-slate-900 text-white dark:bg-slate-800'}`}
                                >
                                    {isLoadingAI ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
                                    {isLoadingAI ? 'Генерирую...' : aiData ? 'Сгенерировать еще раз' : 'AI Учитель: Полный разбор'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="px-6 pb-6 pt-2 z-30">
                <div className="grid grid-cols-3 gap-3">
                    <button onClick={() => handleRating('hard')} className="h-14 rounded-2xl bg-rose-50 text-rose-600 font-bold border-2 border-rose-100 active:bg-rose-100 active:scale-95 transition-all flex flex-col items-center justify-center gap-0.5 dark:bg-rose-900/20 dark:border-rose-900/50 dark:text-rose-400">
                        <div className="flex items-center gap-1"><Brain className="w-4 h-4" /><span className="text-[10px] uppercase">Сложно</span></div>
                        <span className="text-[10px] opacity-70 font-medium">{getNextIntervalLabel('hard')}</span>
                    </button>
                    <button onClick={() => handleRating('medium')} className="h-14 rounded-2xl bg-amber-50 text-amber-600 font-bold border-2 border-amber-100 active:bg-amber-100 active:scale-95 transition-all flex flex-col items-center justify-center gap-0.5 dark:bg-amber-900/20 dark:border-amber-900/50 dark:text-amber-400">
                        <div className="flex items-center gap-1"><ThumbsUp className="w-4 h-4" /><span className="text-[10px] uppercase">Нормально</span></div>
                        <span className="text-[10px] opacity-70 font-medium">{getNextIntervalLabel('medium')}</span>
                    </button>
                    <button onClick={() => handleRating('easy')} className="h-14 rounded-2xl bg-emerald-50 text-emerald-600 font-bold border-2 border-emerald-100 active:bg-emerald-100 active:scale-95 transition-all flex flex-col items-center justify-center gap-0.5 dark:bg-emerald-900/20 dark:border-emerald-900/50 dark:text-emerald-400">
                        <div className="flex items-center gap-1"><Zap className="w-4 h-4 fill-current" /><span className="text-[10px] uppercase">Легко</span></div>
                        <span className="text-[10px] opacity-70 font-medium">{getNextIntervalLabel('easy')}</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
