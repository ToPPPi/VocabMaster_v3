
import React, { useState, useEffect } from 'react';
import { Loader2, BookOpen, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { Header } from './Header';
import { ProficiencyLevel, UserProgress, Word } from '../types';
import { getWordsByLevelAsync, toggleKnownStatus } from '../services/storageService';
import { triggerHaptic } from '../utils/uiHelpers';

const PAGE_SIZE = 20;

interface LevelBrowserProps {
    level: ProficiencyLevel;
    progress: UserProgress;
    onBack: () => void;
    onUpdate: () => void;
}

export const LevelBrowser: React.FC<LevelBrowserProps> = ({ level, progress, onBack, onUpdate }) => {
    const [page, setPage] = useState(0);
    const [allWords, setAllWords] = useState<Word[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    
    // Initial known state from props
    const [knownWords, setKnownWords] = useState<Set<string>>(new Set());

    // CRITICAL FIX: Removed 'progress' from dependency array.
    // We only want to load the word LIST once.
    // The 'known' status is handled via the separate Set state.
    // This prevents the list from reshuffling or pagination breaking when a user clicks a heart.
    useEffect(() => {
        const load = async () => {
            const words = await getWordsByLevelAsync(level);
            setAllWords(words);
            // Initialize known state only once on mount
            setKnownWords(new Set(Object.keys(progress.wordProgress)));
            setIsLoading(false);
        };
        load();
    }, [level]); 

    const handleToggleKnown = async (wordId: string) => {
        triggerHaptic('selection');
        
        // 1. Instant Visual Update (Optimistic)
        setKnownWords(prev => {
            const newSet = new Set(prev);
            if (newSet.has(wordId)) {
                newSet.delete(wordId);
            } else {
                newSet.add(wordId);
            }
            return newSet;
        });

        // 2. Background Save
        try {
            await toggleKnownStatus(wordId);
            // We DO NOT call onUpdate() here to avoid parent re-render which might force reload
        } catch (e) {
            console.error("Failed to toggle word", e);
        }
    };

    const handleBack = () => {
        onUpdate(); // Update parent only when leaving
        onBack();
    };

    if (isLoading) return <div className="min-h-screen flex items-center justify-center"><Loader2 className="w-8 h-8 animate-spin text-violet-600"/></div>;

    const totalPages = Math.ceil(allWords.length / PAGE_SIZE);
    const displayWords = allWords.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

    return (
        <div className="bg-slate-50 min-h-screen pb-32">
            <Header 
                title={`Уровень ${level}`} 
                subtitle={`Стр ${page + 1} из ${totalPages || 1}`}
                onBack={handleBack} 
                rightContent={<div className="text-xs font-bold text-violet-600 bg-violet-50 px-3 py-1.5 rounded-full">{allWords.length} слов</div>}
            />

            <div className="p-4 space-y-3">
                {displayWords.length === 0 ? (
                    <div className="text-center py-20 text-slate-400">
                        <BookOpen className="w-16 h-16 mx-auto mb-4 opacity-30" />
                        <p className="text-lg font-medium">Слов пока нет.</p>
                    </div>
                ) : (
                    displayWords.map((word, index) => {
                        const isKnown = knownWords.has(word.id);
                        return (
                            <div key={`${word.id}-${index}`} className="bg-white px-5 py-4 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between gap-3">
                                <div className="flex-1 min-w-0">
                                    <div className="flex flex-col mb-1.5">
                                        <span className="font-bold text-slate-900 text-lg">{word.term}</span>
                                        <span className="text-sm font-bold text-violet-600 bg-violet-50 px-2 py-1 rounded-md mt-1 w-fit whitespace-normal break-words leading-snug">
                                            {word.translation}
                                        </span>
                                    </div>
                                    <p className="text-sm text-slate-500 leading-snug font-medium">
                                        {word.definition}
                                    </p>
                                </div>
                                <button 
                                    onClick={() => handleToggleKnown(word.id)}
                                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all shadow-sm shrink-0 ${isKnown ? 'bg-violet-500 text-white shadow-violet-200 scale-105' : 'bg-slate-100 text-slate-300 hover:bg-slate-200'}`}
                                >
                                    <Heart className={`w-6 h-6 ${isKnown ? 'fill-current' : ''}`} />
                                </button>
                            </div>
                        );
                    })
                )}
            </div>

            <div className="fixed bottom-24 left-0 right-0 px-6 flex justify-center pointer-events-none z-30">
                 <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-6 pointer-events-auto">
                    <button 
                        onClick={() => { triggerHaptic('light'); setPage(p => Math.max(0, p - 1)); }}
                        disabled={page === 0}
                        className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-50 text-slate-600"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <span className="text-sm font-bold text-slate-500 min-w-[3rem] text-center">
                        {page + 1} / {Math.max(1, totalPages)}
                    </span>
                    <button 
                        onClick={() => { triggerHaptic('light'); setPage(p => Math.min(totalPages - 1, p + 1)); }}
                        disabled={page >= totalPages - 1}
                        className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-50 text-slate-600"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                 </div>
            </div>
        </div>
    );
};
