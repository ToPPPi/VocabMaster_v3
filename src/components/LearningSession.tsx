
import React, { useState, useEffect, useRef } from 'react';
import { Loader2, Check, X, Volume2, Brain, Sparkles, Zap, ThumbsUp, Tag, ArrowRight, Crown, RotateCcw, GraduationCap, Quote, WifiOff, Lightbulb } from 'lucide-react';
import { ProficiencyLevel, UserProgress, Word, AIExplanation } from '../types';
import { getWordsByLevelAsync, getAllWords, getWordsDueForReview, rateWord, getUserProgress, lockDailySession, incrementAIUsage, checkAIUsageLimit, togglePremium } from '../services/storageService';
import { explainWordWithAI } from '../services/aiService';
import { triggerHaptic, speak } from '../utils/uiHelpers';

const DAILY_LIMIT_FREE = 10;
const DAILY_LIMIT_PREMIUM = 8000;

interface LearningSessionProps {
    mode: 'daily' | 'review';
    level?: ProficiencyLevel;
    progress: UserProgress;
    onComplete: () => void;
}

export const LearningSession: React.FC<LearningSessionProps> = ({ mode, level, progress, onComplete }) => {
    const [sessionWords, setSessionWords] = useState<Word[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [levelCompleted, setLevelCompleted] = useState(false);
    
    const [finalProgress, setFinalProgress] = useState<UserProgress>(progress);

    const loadWords = async () => {
        setIsLoading(true);
        setCompleted(false);
        setLevelCompleted(false);
        setCurrentIndex(0);
        
        const currentProgress = await getUserProgress();
        setFinalProgress(currentProgress);
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
            
            words = available.slice(0, Math.max(1, batchSize));
            
        } else {
            const allWords = await getAllWords();
            const allWordIds = Object.keys(currentProgress.wordProgress);
            const dueIds = await getWordsDueForReview(allWordIds);
            words = allWords.filter(w => dueIds.includes(w.id));
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

    useEffect(() => { 
        setIsFlipped(false); 
        setAiData(null); 
        setAiError(null);
    }, [currentIndex]);

    const handleSpeak = (text: string) => {
        setIsPlaying(true);
        speak(text);
        setTimeout(() => setIsPlaying(false), 1500); 
    };

    const getNextIntervalLabel = (rating: 'hard' | 'medium' | 'easy') => {
        if (!currentWord) return '';
        const wp = progress.wordProgress[currentWord.id] || { interval: 0, easeFactor: 2.5 };
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

        if (!isLastCard) {
            // Optimistic update for non-last cards
            setTimeout(() => {
                setIsFlipped(false);
                setCurrentIndex(prev => prev + 1);
                setIsProcessingRating(false);
            }, 150);
            
            // Fire and forget save
            rateWord(wordId, rating, wordLevel).then(updatedProgress => {
                setFinalProgress(updatedProgress);
                const limitNow = updatedProgress.premiumStatus ? DAILY_LIMIT_PREMIUM : DAILY_LIMIT_FREE;
                if (mode === 'daily' && !updatedProgress.premiumStatus && updatedProgress.wordsLearnedToday >= limitNow) {
                     lockDailySession();
                }
            }).catch(err => console.error("Error saving rating:", err));
        } else {
            // CRITICAL FIX: For the LAST card, we MUST await the save
            // This ensures that 'finalProgress' is fully updated (e.g. count is 10/10)
            // BEFORE we switch to the 'completed' screen.
            try {
                const updatedProgress = await rateWord(wordId, rating, wordLevel);
                setFinalProgress(updatedProgress);
                
                const limitNow = updatedProgress.premiumStatus ? DAILY_LIMIT_PREMIUM : DAILY_LIMIT_FREE;
                if (mode === 'daily' && !updatedProgress.premiumStatus && updatedProgress.wordsLearnedToday >= limitNow) {
                     await lockDailySession();
                }
                
                setCompleted(true);
            } catch(err) {
                console.error("Error saving final rating:", err);
                // Force complete anyway to not trap user
                setCompleted(true);
            } finally {
                setIsProcessingRating(false);
            }
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
    
    const handleBuyPremium = async () => {
        triggerHaptic('medium');
        await togglePremium(true);
        const p = await getUserProgress();
        setFinalProgress(p);
        await loadWords();
    };

    const getRegisterBadgeClass = (register?: string) => {
        if (!register) return 'bg-slate-100 text-slate-500';
        if (register === 'Slang') return 'bg-pink-100 text-pink-700 border border-pink-200';
        if (register === 'Rude') return 'bg-red-100 text-red-700 border border-red-200';
        if (register === 'Spoken' || register === 'Informal') return 'bg-cyan-100 text-cyan-800';
        if (register === 'Literary') return 'bg-amber-100 text-amber-800';
        if (register === 'Formal') return 'bg-indigo-100 text-indigo-700';
        return 'bg-violet-50 text-violet-600';
    };

    if (isLoading) return <div className="min-h-screen flex items-center justify-center"><Loader2 className="w-8 h-8 animate-spin text-violet-600"/></div>;

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
        const isLimitReached = !finalProgress.premiumStatus && finalProgress.wordsLearnedToday >= DAILY_LIMIT_FREE;
        const canContinue = mode === 'daily' && !isLimitReached;

        return (
            <div className="h-screen bg-white flex flex-col items-center justify-center p-8 text-center relative">
                <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg animate-bounce">
                    <Check className="w-12 h-12" />
                </div>
                <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Сессия завершена!</h2>
                
                {isLimitReached && mode === 'daily' ? (
                     <div className="bg-amber-50 p-4 rounded-2xl border border-amber-100 mb-8 max-w-xs mx-auto animate-in fade-in zoom-in duration-300">
                        <p className="text-amber-800 font-bold text-sm mb-1">Дневной лимит исчерпан</p>
                        <p className="text-amber-600 text-xs">Возвращайтесь завтра. Сегодня сессия завершена.</p>
                     </div>
                ) : (
                    <p className="text-slate-500 mb-8 max-w-xs mx-auto">
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
                         <button onClick={handleBuyPremium} className="w-full px-6 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-2xl font-bold text-lg shadow-xl active:scale-95 transition-transform flex items-center justify-center gap-2">
                            <Crown className="w-5 h-5" /> Снять лимиты (Premium)
                        </button>
                    )}
                    <button onClick={handleFinish} className={`w-full px-6 py-4 rounded-2xl font-bold text-lg active:scale-95 transition-transform ${canContinue || isLimitReached ? 'bg-slate-100 text-slate-600' : 'bg-slate-900 text-white shadow-xl'}`}>
                        В меню
                    </button>
                </div>
            </div>
        );
    }

    if (!currentWord) return null;

    return (
        <div className="h-screen flex flex-col bg-slate-50 relative pb-safe overflow-hidden">
            {/* Header */}
            <div className="px-6 pt-6 pb-2 flex justify-between items-center z-20">
                <button onClick={handleFinish} className="text-slate-400 hover:text-slate-600 p-2">
                    <X className="w-6 h-6" />
                </button>
                <div className="flex gap-1.5 flex-1 mx-4 max-w-[200px]">
                    <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
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
                    <div className="absolute inset-0 bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 flex flex-col items-center justify-center text-center backface-hidden border border-slate-100 p-6 z-20">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-auto pt-4">Нажмите, чтобы перевернуть</span>
                        
                        <div className="my-auto w-full">
                            <h1 className="text-5xl font-extrabold text-slate-900 mb-3 tracking-tight">{currentWord.term}</h1>
                            {currentWord.transcription && (
                                <p className="text-violet-500 font-medium text-xl opacity-80 mb-8">{currentWord.transcription}</p>
                            )}
                            {/* Front Examples */}
                            <div className="space-y-3 w-full text-left bg-slate-50 p-5 rounded-2xl border border-slate-100">
                                    {currentWord.examples.slice(0, 3).map((ex, i) => (
                                        <div key={i} className="flex gap-3">
                                            <div className="w-1.5 h-1.5 bg-violet-400 rounded-full mt-2 shrink-0"></div>
                                            <p className="text-slate-700 text-base font-medium leading-snug">"{ex.en}"</p>
                                        </div>
                                    ))}
                            </div>
                        </div>

                         <div className="mt-auto pb-4">
                            <button 
                                onClick={(e) => { e.stopPropagation(); triggerHaptic('light'); handleSpeak(currentWord.term); }}
                                className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${isPlaying ? 'bg-violet-600 text-white scale-110' : 'bg-violet-50 text-violet-600 hover:bg-violet-100'}`}
                            >
                                <Volume2 className="w-7 h-7" />
                            </button>
                        </div>
                    </div>

                    {/* BACK */}
                    <div className="absolute inset-0 bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 flex flex-col w-full backface-hidden border border-slate-100 rotate-y-180 overflow-hidden z-20">
                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                             <div className="flex justify-between items-start pb-4 border-b border-slate-50">
                                <div>
                                    <h2 className="text-3xl font-bold text-slate-900">{currentWord.term}</h2>
                                    <p className="text-xl text-violet-600 font-bold mt-1">{currentWord.translation}</p>
                                </div>
                                <button 
                                    onClick={(e) => { e.stopPropagation(); handleSpeak(currentWord.term); }}
                                    className="p-3 border border-slate-100 rounded-xl active:bg-slate-50"
                                >
                                    <Volume2 className="w-6 h-6 text-slate-600" />
                                </button>
                            </div>

                            <div className="flex gap-2 flex-wrap">
                                {currentWord.register && (
                                    <span className={`px-2 py-1 text-xs font-bold rounded-lg uppercase flex items-center gap-1 ${getRegisterBadgeClass(currentWord.register)}`}>
                                        <Tag className="w-3 h-3"/> {currentWord.register}
                                    </span>
                                )}
                                <span className="px-2 py-1 bg-slate-100 text-slate-500 text-xs font-bold rounded-lg uppercase">{currentWord.partOfSpeech}</span>
                                {currentWord.frequency && (
                                    <span className="px-2 py-1 bg-slate-100 text-slate-500 text-xs font-bold rounded-lg uppercase">{currentWord.frequency} FREQ</span>
                                )}
                            </div>

                            <div>
                                <span className="text-xs font-bold text-slate-400 uppercase block mb-2 tracking-wide">Определение</span>
                                <p className="text-slate-800 text-lg leading-relaxed font-medium">{currentWord.definition}</p>
                            </div>

                            {/* Usage Context (Added back) */}
                            {currentWord.usageContext && (
                                <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-100">
                                    <div className="flex items-center gap-2 mb-2 text-emerald-700">
                                        <Lightbulb className="w-4 h-4" />
                                        <span className="font-bold text-xs uppercase">Контекст использования</span>
                                    </div>
                                    <p className="text-sm text-slate-700 whitespace-pre-line leading-relaxed">{currentWord.usageContext}</p>
                                </div>
                            )}

                            {/* Examples on Back (Added back) */}
                            <div>
                                <span className="text-xs font-bold text-slate-400 uppercase block mb-3 tracking-wide">Примеры</span>
                                <div className="space-y-4">
                                    {currentWord.examples.map((ex, i) => (
                                        <div key={i} className="pl-3 border-l-2 border-violet-200">
                                            <p className="text-slate-900 font-medium mb-1">"{ex.en}"</p>
                                            <p className="text-slate-500 text-sm">{ex.ru}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* AI Content */}
                            {aiData && (
                                <div className="space-y-4 animate-in fade-in zoom-in duration-500 pt-6 border-t border-slate-100">
                                    <div className="bg-violet-50 rounded-2xl p-5 border border-violet-100">
                                        <div className="flex items-center gap-2 mb-3 text-violet-700">
                                            <GraduationCap className="w-5 h-5" />
                                            <span className="font-bold text-sm uppercase">AI Разбор</span>
                                        </div>
                                        <p className="text-sm text-slate-900 leading-relaxed mb-3">{aiData.detailedExplanation}</p>
                                        
                                        {/* Added missing fields */}
                                        {aiData.nuance && (
                                            <div className="mt-3 pt-3 border-t border-violet-200/50">
                                                <span className="text-xs font-bold text-violet-500 uppercase block mb-1">Нюансы</span>
                                                <p className="text-sm text-slate-700">{aiData.nuance}</p>
                                            </div>
                                        )}
                                    </div>

                                    {aiData.collocations && aiData.collocations.length > 0 && (
                                        <div className="bg-sky-50 rounded-2xl p-4 border border-sky-100">
                                            <div className="flex items-center gap-2 mb-2 text-sky-700">
                                                <Quote className="w-4 h-4" />
                                                <span className="font-bold text-xs uppercase">Устойчивые фразы</span>
                                            </div>
                                            <ul className="space-y-2">
                                                {aiData.collocations.map((col, i) => (
                                                    <li key={i} className="text-sm text-slate-700">
                                                        <span className="font-bold text-sky-800">{col.en}</span> - {col.ru}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    <div className="bg-amber-50 rounded-2xl p-4 border border-amber-100">
                                            <div className="flex items-center gap-2 mb-2 text-amber-700">
                                            <Brain className="w-4 h-4" />
                                            <span className="font-bold text-xs uppercase">Запоминалка</span>
                                        </div>
                                        <p className="text-sm text-slate-800 italic font-medium">"{aiData.mnemonic}"</p>
                                    </div>
                                </div>
                            )}

                             {/* AI Button */}
                            <div className="pt-4 pb-20">
                                {aiError && (
                                    <div className="mb-3 p-3 bg-rose-50 border border-rose-100 rounded-xl text-rose-600 text-xs font-bold text-center flex items-center justify-center gap-2">
                                        <WifiOff className="w-4 h-4"/> {aiError}
                                    </div>
                                )}
                                <button 
                                    onClick={(e) => { e.stopPropagation(); handleAI(); }}
                                    disabled={isLoadingAI}
                                    className={`w-full py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-transform ${isLoadingAI ? 'bg-slate-100 text-slate-400' : aiData ? 'bg-white border-2 border-violet-100 text-violet-600' : 'bg-slate-900 text-white'}`}
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
                    <button onClick={() => handleRating('hard')} className="h-14 rounded-2xl bg-rose-50 text-rose-600 font-bold border-2 border-rose-100 active:bg-rose-100 active:scale-95 transition-all flex flex-col items-center justify-center gap-0.5">
                        <div className="flex items-center gap-1"><Brain className="w-4 h-4" /><span className="text-[10px] uppercase">Сложно</span></div>
                        <span className="text-[10px] opacity-70 font-medium">{getNextIntervalLabel('hard')}</span>
                    </button>
                    <button onClick={() => handleRating('medium')} className="h-14 rounded-2xl bg-amber-50 text-amber-600 font-bold border-2 border-amber-100 active:bg-amber-100 active:scale-95 transition-all flex flex-col items-center justify-center gap-0.5">
                        <div className="flex items-center gap-1"><ThumbsUp className="w-4 h-4" /><span className="text-[10px] uppercase">Нормально</span></div>
                        <span className="text-[10px] opacity-70 font-medium">{getNextIntervalLabel('medium')}</span>
                    </button>
                    <button onClick={() => handleRating('easy')} className="h-14 rounded-2xl bg-emerald-50 text-emerald-600 font-bold border-2 border-emerald-100 active:bg-emerald-100 active:scale-95 transition-all flex flex-col items-center justify-center gap-0.5">
                        <div className="flex items-center gap-1"><Zap className="w-4 h-4 fill-current" /><span className="text-[10px] uppercase">Легко</span></div>
                        <span className="text-[10px] opacity-70 font-medium">{getNextIntervalLabel('easy')}</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
