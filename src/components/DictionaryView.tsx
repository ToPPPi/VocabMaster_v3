
import React, { useState, useEffect } from 'react';
import { Loader2, Search, Volume2, Book, CheckCircle, Clock, AlertCircle, Trash2, Tag, ChevronLeft, ChevronRight, PenLine, Save, X, Lightbulb } from 'lucide-react';
import { Header } from './Header';
import { UserProgress, Word, ProficiencyLevel } from '../types';
import { getAllWords, deleteWordFromProgress, saveWordComment } from '../services/storageService';
import { triggerHaptic, speak } from '../utils/uiHelpers';

const PAGE_SIZE = 20;

interface DictionaryViewProps {
    progress: UserProgress;
    onBack: () => void;
    onUpdate: () => void;
}

export const DictionaryView: React.FC<DictionaryViewProps> = ({ progress, onBack, onUpdate }) => {
    const [viewState, setViewState] = useState<'overview' | 'list'>('overview');
    const [selectedLevel, setSelectedLevel] = useState<ProficiencyLevel | null>(null);
    const [selectedWord, setSelectedWord] = useState<Word | null>(null);
    const [allWords, setAllWords] = useState<Word[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(0);
    const [search, setSearch] = useState("");
    
    // Comment state
    const [editingId, setEditingId] = useState<string | null>(null);
    const [commentText, setCommentText] = useState("");

    useEffect(() => {
        const load = async () => {
            const w = await getAllWords();
            setAllWords(w);
            setIsLoading(false);
        };
        load();
    }, []);

    useEffect(() => {
        setPage(0);
    }, [search]);

    useEffect(() => {
        const scrollContainer = document.querySelector('.overflow-y-auto');
        if (scrollContainer) scrollContainer.scrollTo({ top: 0 });
        else window.scrollTo({ top: 0 });
    }, [page, selectedWord]);

    const learnedIds = Object.keys(progress.wordProgress);
    const learnedWords = allWords.filter(w => learnedIds.includes(w.id));
    const levelCounts: Record<string, number> = {};
    Object.values(ProficiencyLevel).forEach(lvl => {
        levelCounts[lvl] = learnedWords.filter(w => w.level === lvl).length;
    });

    const handleLevelSelect = (level: ProficiencyLevel) => {
        triggerHaptic('medium');
        setSelectedLevel(level);
        setViewState('list');
        setSearch("");
    };

    const handleBack = () => {
        if (selectedWord) {
            setSelectedWord(null);
            setEditingId(null);
        } else if (viewState === 'list') {
            setViewState('overview');
            setSelectedLevel(null);
        } else {
            onBack();
        }
    };

    let displayWords = learnedWords;
    if (selectedLevel) displayWords = displayWords.filter(w => w.level === selectedLevel);
    const filtered = displayWords.filter(w => w.term.toLowerCase().includes(search.toLowerCase()));
    
    const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
    const paginatedWords = filtered.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

    const handleDelete = async (wordId: string) => {
        const confirm = window.confirm("Удалить это слово из изученных?");
        if (!confirm) return;

        triggerHaptic('medium');
        if (selectedWord?.id === wordId) setSelectedWord(null);
        await deleteWordFromProgress(wordId);
        await onUpdate();
        
        // Refresh local list state if needed, though parent update should trigger
        setAllWords(prev => [...prev]); // Force re-render just in case
    };

    const handleEditComment = (wordId: string, currentComment: string = "") => {
        triggerHaptic('light');
        setEditingId(wordId);
        setCommentText(currentComment);
    };

    const handleSaveComment = async (wordId: string) => {
        triggerHaptic('medium');
        await saveWordComment(wordId, commentText);
        setEditingId(null);
        onUpdate();
    };
    
    const handleDeleteComment = async (wordId: string) => {
        triggerHaptic('medium');
        await saveWordComment(wordId, "");
        setEditingId(null);
        onUpdate();
    };

    const handleCancelEdit = () => {
        setEditingId(null);
    };

    const getStatusBadge = (wordId: string) => {
        const status = progress.wordProgress[wordId]?.status;
        const rating = progress.wordProgress[wordId]?.easeFactor; 
        if (status === 'mastered' || (rating && rating > 2.8)) {
            return <div className="flex items-center gap-1 bg-emerald-100 px-2.5 py-1 rounded-lg shrink-0 border border-emerald-200"><CheckCircle className="w-3 h-3 text-emerald-600"/><span className="text-[10px] font-bold text-emerald-700 uppercase">Выучено</span></div>;
        }
        if (status === 'learning' || status === 'review') {
            if (rating && rating < 2.0) {
                return <div className="flex items-center gap-1 bg-rose-100 px-2.5 py-1 rounded-lg shrink-0 border border-rose-200"><AlertCircle className="w-3 h-3 text-rose-600"/><span className="text-[10px] font-bold text-rose-700 uppercase">Сложно</span></div>;
            }
            return <div className="flex items-center gap-1 bg-amber-100 px-2.5 py-1 rounded-lg shrink-0 border border-amber-200"><Clock className="w-3 h-3 text-amber-600"/><span className="text-[10px] font-bold text-amber-700 uppercase">Учу</span></div>;
        }
        return <div className="flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded-lg shrink-0 border border-slate-200"><Book className="w-3 h-3 text-slate-500"/><span className="text-[10px] font-bold text-slate-600 uppercase">Новое</span></div>;
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

    // --- DETAIL VIEW ---
    if (selectedWord) {
        const userComment = progress.wordComments?.[selectedWord.id];
        const isEditing = editingId === selectedWord.id;

        return (
            <div className="bg-slate-50 min-h-screen pb-safe animate-in slide-in-from-right-4 duration-300">
                 <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-md px-4 py-3 border-b border-slate-100 flex items-center justify-between">
                    <button onClick={() => { triggerHaptic('light'); handleBack(); }} className="p-2 -ml-2 rounded-full hover:bg-slate-100 text-slate-600">
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <span className="font-bold text-slate-900">Детали слова</span>
                    <div className="w-10"></div> 
                </div>

                <div className="p-5 pb-32 space-y-6">
                    {/* Main Header Card */}
                    <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 relative overflow-hidden">
                        {/* FIX: Badge moved to relative layout to prevent overlap */}
                        <div className="flex justify-between items-center mb-4">
                             {getStatusBadge(selectedWord.id)}
                             <button 
                                onClick={(e) => { e.stopPropagation(); speak(selectedWord.term); }}
                                className="w-12 h-12 bg-violet-50 rounded-xl flex items-center justify-center text-violet-600 active:scale-95 transition-transform shrink-0"
                            >
                                <Volume2 className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="flex justify-between items-start pb-4 border-b border-slate-50 mb-4">
                            <div className="pr-4 w-full">
                                <h2 className="text-3xl font-black text-slate-900 leading-tight break-words">{selectedWord.term}</h2>
                                {selectedWord.transcription && <span className="text-sm text-slate-400 font-mono mt-1 block">{selectedWord.transcription}</span>}
                                <p className="text-xl text-violet-600 font-bold mt-2">{selectedWord.translation}</p>
                            </div>
                        </div>

                        {/* Metadata Tags */}
                        <div className="flex gap-2 flex-wrap mb-6">
                            {selectedWord.register && (
                                <span className={`px-2 py-1 text-xs font-bold rounded-lg uppercase flex items-center gap-1 ${getRegisterBadgeClass(selectedWord.register)}`}>
                                    <Tag className="w-3 h-3"/> {selectedWord.register}
                                </span>
                            )}
                            <span className="px-2 py-1 bg-slate-100 text-slate-500 text-xs font-bold rounded-lg uppercase">{selectedWord.partOfSpeech}</span>
                            {selectedWord.frequency && (
                                <span className="px-2 py-1 bg-slate-100 text-slate-500 text-xs font-bold rounded-lg uppercase">{selectedWord.frequency} FREQ</span>
                            )}
                        </div>

                        {/* Definition */}
                        <div>
                            <span className="text-xs font-bold text-slate-400 uppercase block mb-2 tracking-wide">Определение</span>
                            <p className="text-slate-800 text-lg leading-relaxed font-medium">{selectedWord.definition}</p>
                        </div>
                    </div>

                    {/* Context Usage */}
                    {selectedWord.usageContext && (
                        <div className="bg-emerald-50 rounded-2xl p-5 border border-emerald-100">
                            <div className="flex items-center gap-2 mb-2 text-emerald-700">
                                <Lightbulb className="w-4 h-4" />
                                <span className="font-bold text-xs uppercase">Контекст использования</span>
                            </div>
                            <p className="text-sm text-slate-700 whitespace-pre-line leading-relaxed">{selectedWord.usageContext}</p>
                        </div>
                    )}

                    {/* Note Input in Detail View */}
                    <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                        <span className="text-xs font-bold text-slate-400 uppercase block mb-3 tracking-wide">Моя заметка</span>
                        {isEditing ? (
                            <div className="flex flex-col gap-2">
                                <textarea 
                                    autoFocus 
                                    value={commentText} 
                                    onChange={(e) => setCommentText(e.target.value)} 
                                    placeholder="Ваша заметка..." 
                                    className="w-full bg-yellow-50 border border-yellow-200 rounded-lg px-3 py-2 text-sm text-slate-800 resize-none h-24" 
                                />
                                <div className="flex gap-2 justify-end">
                                    <button onClick={() => handleSaveComment(selectedWord.id)} className="px-4 py-2 bg-emerald-100 text-emerald-600 rounded-lg font-bold text-xs flex items-center gap-1"><Save className="w-3 h-3"/> Сохранить</button>
                                    <button onClick={handleCancelEdit} className="px-4 py-2 bg-slate-100 text-slate-500 rounded-lg font-bold text-xs">Отмена</button>
                                </div>
                            </div>
                        ) : (
                            <div 
                                onClick={() => handleEditComment(selectedWord.id, userComment)}
                                className={`p-3 rounded-xl border-2 border-dashed cursor-pointer transition-colors ${userComment ? 'bg-yellow-50 border-yellow-200' : 'bg-slate-50 border-slate-200 hover:bg-slate-100'}`}
                            >
                                {userComment ? (
                                    <div className="flex items-start gap-2">
                                        <PenLine className="w-4 h-4 text-yellow-600 shrink-0 mt-0.5" />
                                        <p className="text-sm text-slate-800 break-words">{userComment}</p>
                                    </div>
                                ) : (
                                    <div className="flex items-center justify-center gap-2 text-slate-400 text-sm font-medium">
                                        <PenLine className="w-4 h-4" /> Написать заметку
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Examples */}
                    <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                        <span className="text-xs font-bold text-slate-400 uppercase block mb-3 tracking-wide">Примеры</span>
                        <div className="space-y-4">
                            {selectedWord.examples.map((ex, i) => (
                                <div key={i} className="pl-3 border-l-2 border-violet-200">
                                    <p className="text-slate-900 font-medium mb-1">"{ex.en}"</p>
                                    <p className="text-slate-500 text-sm">{ex.ru}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button 
                        onClick={() => handleDelete(selectedWord.id)}
                        className="w-full py-4 bg-white border border-rose-100 text-rose-500 font-bold rounded-2xl flex items-center justify-center gap-2 mt-4 active:bg-rose-50"
                    >
                        <Trash2 className="w-5 h-5" />
                        Удалить из словаря
                    </button>
                </div>
            </div>
        );
    }

    // --- OVERVIEW ---
    if (viewState === 'overview') {
        return (
             <div className="bg-slate-50 min-h-screen pb-32">
                <Header title="Мой Словарь" subtitle={`${learnedWords.length} всего`} onBack={onBack} />
                <div className="p-5 grid grid-cols-2 gap-4">
                    {Object.values(ProficiencyLevel).map(lvl => {
                        const count = levelCounts[lvl] || 0;
                        const hasWords = count > 0;
                        return (
                            <button key={lvl} onClick={() => hasWords && handleLevelSelect(lvl)} className={`bg-white p-5 rounded-3xl border shadow-sm flex flex-col items-start gap-4 transition-all text-left group ${hasWords ? 'border-violet-100 hover:shadow-md active:scale-95 cursor-pointer' : 'border-slate-100 opacity-60 cursor-default'}`}>
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${hasWords ? 'bg-violet-50 text-violet-600 group-hover:bg-violet-100' : 'bg-slate-100 text-slate-400'}`}>
                                    <Book className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className={`font-bold text-xl ${hasWords ? 'text-slate-900' : 'text-slate-400'}`}>{lvl}</h3>
                                    <p className={`text-sm font-medium mt-1 ${hasWords ? 'text-violet-600' : 'text-slate-400'}`}>{count} слов</p>
                                </div>
                            </button>
                        );
                    })}
                </div>
             </div>
        );
    }

    // --- LIST VIEW ---
    return (
        <div className="bg-slate-50 min-h-screen pb-32">
            <Header title={`Словарь ${selectedLevel}`} subtitle={`${displayWords.length} слов`} onBack={handleBack} />
            <div className="px-5 py-2 sticky top-20 z-30 bg-slate-50/95 backdrop-blur-sm pb-4">
                 <div className="relative">
                    <Search className="absolute left-4 top-4 text-slate-400 w-5 h-5" />
                    <input type="text" placeholder="Поиск..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100 text-slate-900 font-medium shadow-sm" />
                 </div>
            </div>
            <div className="px-5 space-y-3">
                {paginatedWords.length === 0 ? (
                    <div className="text-center py-20 opacity-50"><Book className="w-12 h-12 mx-auto mb-2" /><p>Пусто</p></div>
                ) : paginatedWords.map((w, index) => {
                    const userComment = progress.wordComments?.[w.id];
                    const isEditing = editingId === w.id;
                    return (
                        <div key={`${w.id}-${index}`} onClick={() => { triggerHaptic('light'); setSelectedWord(w); }} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm transition-all hover:shadow-md relative group cursor-pointer active:scale-[0.99]">
                            <div className="flex justify-between items-start gap-3 mb-2">
                                <div className="flex items-start gap-3 flex-1 min-w-0">
                                     <button onClick={(e) => { e.stopPropagation(); speak(w.term); }} className="mt-0.5 w-9 h-9 bg-violet-50 rounded-xl flex items-center justify-center text-violet-600 active:bg-violet-100 shrink-0">
                                         <Volume2 className="w-5 h-5" />
                                     </button>
                                     <div className="flex-1 min-w-0">
                                        <div className="flex flex-col mb-1">
                                            <span className="font-bold text-slate-900 text-lg leading-tight truncate">{w.term}</span>
                                            <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md mt-1 w-fit whitespace-normal break-words">{w.translation}</span>
                                        </div>
                                        <p className="text-sm text-slate-500 leading-relaxed font-medium whitespace-normal break-words">{w.definition}</p>
                                     </div>
                                </div>
                                <div className="shrink-0 pl-1 flex flex-col gap-2 items-end">
                                    {getStatusBadge(w.id)}
                                    {/* Added Trash Button here */}
                                    <button 
                                        onClick={(e) => { e.stopPropagation(); handleDelete(w.id); }}
                                        className="p-2 text-slate-300 hover:text-rose-500 transition-colors"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                            <div className="mt-2 pt-2 border-t border-slate-50 flex items-start justify-between gap-4">
                                <div className="flex-1 min-w-0" onClick={(e) => e.stopPropagation()}>
                                    {isEditing ? (
                                        <div className="flex items-start gap-2 flex-col sm:flex-row">
                                            <textarea autoFocus value={commentText} onChange={(e) => setCommentText(e.target.value)} placeholder="Ваша заметка..." className="w-full bg-yellow-50 border border-yellow-200 rounded-lg px-3 py-2 text-sm text-slate-800 resize-none" />
                                            <div className="flex gap-2 self-end sm:self-auto">
                                                <button onClick={() => handleSaveComment(w.id)} className="p-2 bg-emerald-100 text-emerald-600 rounded-lg"><Save className="w-4 h-4"/></button>
                                                <button onClick={() => handleDeleteComment(w.id)} className="p-2 bg-rose-100 text-rose-600 rounded-lg"><Trash2 className="w-4 h-4"/></button>
                                                <button onClick={handleCancelEdit} className="p-2 bg-slate-100 text-slate-500 rounded-lg"><X className="w-4 h-4"/></button>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="flex items-start gap-2 group/comment cursor-pointer w-full min-w-0" onClick={(e) => { e.stopPropagation(); handleEditComment(w.id, userComment); }}>
                                            <div className={`mt-0.5 shrink-0 ${userComment ? 'text-yellow-500' : 'text-slate-300 group-hover/comment:text-slate-400'}`}><PenLine className="w-3.5 h-3.5" /></div>
                                            {userComment ? <p className="text-sm text-slate-700 bg-yellow-50 px-2 py-1.5 rounded-lg w-full break-words whitespace-pre-wrap leading-snug">{userComment}</p> : <span className="text-xs text-slate-300 font-medium pt-0.5">Добавить заметку</span>}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="fixed bottom-24 left-0 right-0 px-6 flex justify-center pointer-events-none z-30">
                 <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-6 pointer-events-auto">
                    <button onClick={() => { triggerHaptic('light'); setPage(p => Math.max(0, p - 1)); }} disabled={page === 0} className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-50 text-slate-600"><ChevronLeft className="w-6 h-6" /></button>
                    <span className="text-sm font-bold text-slate-500 min-w-[3rem] text-center">{page + 1} / {Math.max(1, totalPages)}</span>
                    <button onClick={() => { triggerHaptic('light'); setPage(p => Math.min(totalPages - 1, p + 1)); }} disabled={page >= totalPages - 1} className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200 disabled:opacity-50 text-slate-600"><ChevronRight className="w-6 h-6" /></button>
                 </div>
            </div>
        </div>
    );
};
