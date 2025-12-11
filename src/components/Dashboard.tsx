
import React, { useState, useEffect } from 'react';
import { Crown, Flame, Check, Target, Zap, Clock, Play, RotateCcw, Trophy, ArrowRight, Globe2, Coins, ShoppingBag, Sparkles, HelpCircle } from 'lucide-react';
import { UserProgress, ViewState } from '../types';
import { getLearnedCount, getWordsDueForReview, getAchievements, buyPremium, isUserPremium, calculateCoverage, getUserRank, getSecureNow } from '../services/storageService';
import { triggerHaptic } from '../utils/uiHelpers';

const DAILY_LIMIT = 10;
const PREMIUM_VISUAL_TARGET = 50; 
const AI_LIMIT_FREE = 5;
const AI_LIMIT_PREMIUM = 50;

interface DashboardProps {
    progress: UserProgress;
    setViewState: (v: ViewState) => void;
    onStartDaily: () => void;
    onStartReview: () => void;
    onUpdate: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ progress, setViewState, onStartDaily, onStartReview, onUpdate }) => {
    const [learnedCount, setLearnedCount] = useState(0);
    const [dueCount, setDueCount] = useState(0);
    const [unlockedCount, setUnlockedCount] = useState(0);
    const [coverage, setCoverage] = useState(0);
    const [showStatInfo, setShowStatInfo] = useState(false);
    
    // Time Lock Check
    const [currentTime, setCurrentTime] = useState(getSecureNow());

    useEffect(() => {
        const load = async () => {
            const lc = await getLearnedCount();
            setLearnedCount(lc);
            const due = await getWordsDueForReview(Object.keys(progress.wordProgress));
            setDueCount(due.length);
            const ach = await getAchievements();
            setUnlockedCount(ach.filter(a => a.current >= a.max).length);
            setCoverage(calculateCoverage(lc));
        };
        load();
        
        // Update local time check periodically to refresh button state
        const timer = setInterval(() => setCurrentTime(getSecureNow()), 60000);
        return () => clearInterval(timer);
    }, [progress]);

    const isPremium = isUserPremium(progress);

    const handleBuyPremium = async () => {
        triggerHaptic('medium');
        setViewState('profile');
    };

    const isTimeLocked = progress.nextSessionUnlockTime && currentTime < progress.nextSessionUnlockTime;
    const isLimitReached = !isPremium && progress.wordsLearnedToday >= DAILY_LIMIT;
    const isLocked = !isPremium && (isTimeLocked || isLimitReached);
    
    const target = isPremium ? PREMIUM_VISUAL_TARGET : DAILY_LIMIT;
    const progressPercent = Math.min((progress.wordsLearnedToday / target) * 100, 100);
    
    const rank = getUserRank(learnedCount);
    const wordsToNext = rank.nextThreshold - learnedCount;

    // AI Stats
    const aiLimit = isPremium ? AI_LIMIT_PREMIUM : AI_LIMIT_FREE;
    const aiLeft = Math.max(0, aiLimit - progress.aiGenerationsToday);

    // Time Formatting
    let lockLabel = 'Доступно завтра';
    if (isLocked && progress.nextSessionUnlockTime) {
        const date = new Date(progress.nextSessionUnlockTime);
        const timeStr = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        lockLabel = `Доступно завтра в ${timeStr}`;
    }

    return (
        <div className="bg-slate-50 min-h-screen pb-32 font-sans">
            {/* HEADER / PROFILE SUMMARY */}
            <div className="pt-6 px-6 pb-6 bg-white border-b border-slate-100 rounded-b-[2.5rem] shadow-sm mb-6">
                <div onClick={() => setViewState('profile')} className="flex items-center gap-4 cursor-pointer active:opacity-70 transition-opacity">
                    <div className="relative shrink-0">
                        {progress.photoUrl ? (
                            <img 
                                src={progress.photoUrl} 
                                alt="Profile" 
                                className="w-14 h-14 rounded-full border border-slate-100 shadow-sm object-cover"
                            />
                        ) : (
                            <div className="w-14 h-14 bg-gradient-to-br from-violet-100 to-fuchsia-50 rounded-full flex items-center justify-center text-xl font-bold text-violet-600 border border-violet-100">
                                {progress.userName ? progress.userName[0].toUpperCase() : 'U'}
                            </div>
                        )}
                        {isPremium && (
                            <div className="absolute -top-1 -right-1 bg-white rounded-full p-0.5 shadow-sm">
                                <div className="bg-gradient-to-br from-yellow-300 to-amber-500 rounded-full w-5 h-5 flex items-center justify-center">
                                    <Crown className="w-3 h-3 text-white fill-white" />
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="flex-1 min-w-0">
                        <h2 className="text-lg font-bold text-slate-900 leading-tight truncate">{progress.userName || 'User'}</h2>
                        <div className="flex items-center gap-1.5 mt-1">
                            <span className="text-lg">{rank.icon}</span>
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">Ранг: {rank.title}</span>
                        </div>
                    </div>
                    
                    <button 
                         onClick={(e) => { e.stopPropagation(); triggerHaptic('light'); setViewState('shop'); }}
                         className="flex items-center gap-1.5 pl-2 pr-3 py-1.5 bg-amber-50 text-amber-800 rounded-full border border-amber-100 active:scale-95 transition-transform"
                    >
                        <div className="w-6 h-6 bg-amber-200 rounded-full flex items-center justify-center">
                            <Coins className="w-3.5 h-3.5 text-amber-800 fill-amber-800" />
                        </div>
                        <span className="font-bold text-sm">{progress.wallet.coins}</span>
                    </button>
                </div>

                {/* Rank Progress Bar inside Header */}
                {!rank.isMax && (
                    <div className="mt-4">
                        <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase mb-1.5">
                            <span>Прогресс ранга</span>
                            <span>{wordsToNext} слов до {rank.nextTitle}</span>
                        </div>
                        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                             <div className="bg-violet-50 h-full rounded-full transition-all duration-500" style={{ width: `${Math.min(100, ((rank.currentThreshold + learnedCount) / rank.nextThreshold) * 100)}%` }}></div>
                        </div>
                    </div>
                )}
            </div>

            <div className="px-5 space-y-5">
                {/* 1. DAILY GOAL CARD */}
                <div className="bg-white p-5 rounded-[2rem] shadow-sm border border-slate-100 relative overflow-hidden group">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <span className="inline-block px-2.5 py-0.5 bg-violet-50 text-violet-700 text-[10px] font-bold uppercase rounded-md mb-2">
                                {isPremium ? 'Безлимит' : 'План на день'}
                            </span>
                            <div className="flex items-baseline gap-1">
                                <h2 className="text-3xl font-black text-slate-900 tracking-tight">{progress.wordsLearnedToday}</h2>
                                <span className="text-lg font-bold text-slate-300">/ {isPremium ? '∞' : DAILY_LIMIT}</span>
                            </div>
                        </div>
                        <div className="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center">
                            <Zap className="w-5 h-5 text-violet-600 fill-current" />
                        </div>
                    </div>
                    
                    <div className="w-full bg-slate-50 rounded-full h-3 mb-5 overflow-hidden">
                        <div 
                            className="bg-violet-600 h-full rounded-full transition-all duration-1000 ease-out" 
                            style={{ width: `${progressPercent}%` }}
                        ></div>
                    </div>

                    {/* AI Stats Row */}
                    <div className="flex items-center justify-between mb-4 px-1">
                        <div className="flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-fuchsia-500" />
                            <span className="text-xs font-bold text-slate-500">AI Генерации</span>
                        </div>
                        <div className={`text-xs font-bold px-2 py-0.5 rounded-md border ${aiLeft === 0 ? 'bg-rose-50 text-rose-600 border-rose-100' : 'bg-fuchsia-50 text-fuchsia-700 border-fuchsia-100'}`}>
                             {aiLeft} / {aiLimit} доступно
                        </div>
                    </div>

                    <button 
                        onClick={() => { triggerHaptic('medium'); onStartDaily(); }}
                        disabled={isLocked}
                        className={`w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-sm active:scale-[0.98] ${isLocked ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'bg-slate-900 text-white hover:bg-slate-800'}`}
                    >
                        {isLocked ? <Clock className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                        {isLocked ? lockLabel : 'Учить новые слова'}
                    </button>
                </div>

                {/* 2. MAIN 2x2 GRID */}
                <div className="grid grid-cols-2 gap-3">
                    {/* Top Left: Review */}
                    <button onClick={() => { triggerHaptic('light'); onStartReview(); }} className="bg-white p-4 rounded-[2rem] border border-slate-100 shadow-sm text-left active:scale-[0.98] transition-transform hover:shadow-md flex flex-col justify-between h-32 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-16 h-16 bg-amber-50 rounded-bl-[2rem] -mr-4 -mt-4 z-0"></div>
                        <div className="w-10 h-10 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600 mb-2 relative z-10">
                            <RotateCcw className="w-5 h-5" />
                        </div>
                        <div className="relative z-10">
                            <div className="font-bold text-slate-900 text-base leading-tight">Повторение</div>
                            <div className="text-[10px] text-slate-400 font-bold uppercase mt-1">{dueCount} слов</div>
                        </div>
                    </button>
                    
                    {/* Top Right: Shop */}
                    <button onClick={() => { triggerHaptic('light'); setViewState('shop'); }} className="bg-white p-4 rounded-[2rem] border border-slate-100 shadow-sm text-left active:scale-[0.98] transition-transform hover:shadow-md flex flex-col justify-between h-32 relative overflow-hidden">
                         <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-50 rounded-bl-[2rem] -mr-4 -mt-4 z-0"></div>
                         <div className="w-10 h-10 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-2 relative z-10">
                            <ShoppingBag className="w-5 h-5" />
                         </div>
                         <div className="relative z-10">
                            <div className="font-bold text-slate-900 text-base leading-tight">Магазин</div>
                            <div className="text-[10px] text-slate-400 font-bold uppercase mt-1">Тратить</div>
                         </div>
                    </button>

                    {/* Bottom Left: Achievements */}
                    <button onClick={() => { triggerHaptic('light'); setViewState('achievements'); }} className="bg-white p-4 rounded-[2rem] border border-slate-100 shadow-sm text-left active:scale-[0.98] transition-transform hover:shadow-md flex flex-col justify-between h-32 relative overflow-hidden">
                         <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-50 rounded-bl-[2rem] -mr-4 -mt-4 z-0"></div>
                         <div className="w-10 h-10 bg-yellow-100 rounded-2xl flex items-center justify-center text-yellow-600 mb-2 relative z-10">
                            <Trophy className="w-5 h-5 fill-current" />
                         </div>
                         <div className="relative z-10">
                            <div className="font-bold text-slate-900 text-base leading-tight">Награды</div>
                            <div className="text-[10px] text-slate-400 font-bold uppercase mt-1">{unlockedCount} открыто</div>
                         </div>
                    </button>

                    {/* Bottom Right: Blitz Mode */}
                    <button onClick={() => { triggerHaptic('light'); setViewState('blitz_intro'); }} className="bg-slate-900 p-4 rounded-[2rem] shadow-sm text-left active:scale-[0.98] transition-transform hover:shadow-md flex flex-col justify-between h-32 relative overflow-hidden group">
                         <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                         <div className="w-10 h-10 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-2 relative z-10">
                            <Zap className="w-5 h-5 fill-current" />
                         </div>
                         <div className="relative z-10 text-white">
                            <div className="font-bold text-base leading-tight">Blitz</div>
                            <div className="text-[10px] text-white/60 font-bold uppercase mt-1">Мини-игра</div>
                         </div>
                    </button>
                </div>

                {/* 3. GENERAL STATS ROW */}
                <div 
                    onClick={() => setShowStatInfo(!showStatInfo)}
                    className="bg-white p-4 rounded-[2rem] border border-slate-100 shadow-sm relative transition-all active:scale-[0.99]"
                >
                    <div className="absolute top-3 right-3 text-slate-300">
                        <HelpCircle className="w-4 h-4" />
                    </div>
                    <div className="flex justify-around items-center">
                        <div className="flex flex-col items-center text-center">
                            <div className="flex items-center gap-1 mb-1 text-orange-500">
                                <Flame className="w-5 h-5 fill-current" />
                                <span className="text-lg font-bold text-slate-900">{progress.streak}</span>
                            </div>
                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wide">Дней подряд</span>
                        </div>
                        <div className="w-px h-8 bg-slate-100"></div>
                        <div className="flex flex-col items-center text-center">
                            <div className="flex items-center gap-1 mb-1 text-violet-500">
                                <Globe2 className="w-5 h-5" />
                                <span className="text-lg font-bold text-slate-900">{coverage.toFixed(0)}%</span>
                            </div>
                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wide">Охват языка</span>
                        </div>
                        <div className="w-px h-8 bg-slate-100"></div>
                        <div className="flex flex-col items-center text-center">
                             <div className="flex items-center gap-1 mb-1 text-emerald-500">
                                <Target className="w-5 h-5" />
                                <span className="text-lg font-bold text-slate-900">{learnedCount}</span>
                            </div>
                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wide">Выучено слов</span>
                        </div>
                    </div>
                    
                    {showStatInfo && (
                        <div className="mt-4 pt-4 border-t border-slate-50 text-xs text-slate-500 space-y-2 animate-in slide-in-from-top-2">
                             <p><b className="text-slate-900">Дней подряд:</b> Число дней непрерывного обучения.</p>
                             <p><b className="text-slate-900">Охват языка:</b> Процент понимания английской речи (на основе частотного словаря).</p>
                             <p><b className="text-slate-900">Выучено слов:</b> Общее количество слов, которые вы прошли.</p>
                        </div>
                    )}
                </div>

                {/* 4. PREMIUM BANNER - DETAILED VERSION */}
                {!isPremium && (
                    <div onClick={handleBuyPremium} className="bg-gradient-to-r from-violet-600 to-fuchsia-600 p-6 rounded-[2rem] text-white shadow-xl shadow-violet-200/50 cursor-pointer active:scale-[0.99] transition-transform relative overflow-hidden group">
                        <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                        <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-24 h-24 bg-black/10 rounded-full blur-2xl"></div>
                        
                        <div className="relative z-10 flex justify-between items-start mb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm shadow-inner">
                                    <Crown className="w-6 h-6 text-yellow-300 fill-current" />
                                </div>
                                <div>
                                    <h3 className="font-extrabold text-xl leading-none">VocabMaster Pro</h3>
                                    <p className="text-violet-100 text-xs font-medium mt-1">Разблокируй максимум</p>
                                </div>
                            </div>
                            <div className="bg-white/20 px-3 py-1 rounded-lg backdrop-blur-md text-[10px] font-bold uppercase tracking-wider">
                                от 150 ⭐️
                            </div>
                        </div>

                        <div className="relative z-10 space-y-2 mb-4">
                            <div className="flex items-center gap-2 text-sm font-medium text-violet-50">
                                <Check className="w-4 h-4 text-emerald-300 shrink-0" />
                                <span>Нет ограничений слов/день</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm font-medium text-violet-50">
                                <Check className="w-4 h-4 text-emerald-300 shrink-0" />
                                <span>Доступ к 10,000 слов (B2-C2)</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm font-medium text-violet-50">
                                <Check className="w-4 h-4 text-emerald-300 shrink-0" />
                                <span>ИИ тьютор - 50 разборов/день</span>
                            </div>
                        </div>

                        <div className="relative z-10 w-full bg-white text-violet-700 py-3 rounded-xl font-bold text-center text-sm shadow-md flex items-center justify-center gap-2 hover:bg-violet-50 transition-colors">
                            <span>Выбрать план</span>
                            <ArrowRight className="w-4 h-4" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
