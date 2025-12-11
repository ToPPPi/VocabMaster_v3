
import React, { useState, useEffect } from 'react';
import { Loader2, Search, Volume2, Book, CheckCircle, Clock, AlertCircle, Trash2, Tag, ChevronLeft, ChevronRight, PenLine, Save, X, ChevronRight as ChevronRightIcon } from 'lucide-react';
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
        triggerHaptic('medium');
        if (selectedWord?.id === wordId) setSelectedWord(null);
        await deleteWordFromProgress(wordId);
        onUpdate();
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

    const getRegisterBadge = (register?: string) => {
        if (!register || register === 'Neutral') return null;
        let styleClass = 'bg-slate-100 text-slate-600 border-slate-200';
        if (register === 'Slang') styleClass = 'bg-pink-100 text-pink-700 border-pink-200';
        else if (register === 'Rude') styleClass = 'bg-red-100 text-red-700 border-red-200';
        else if (register === 'Spoken' || register === 'Informal') styleClass = 'bg-cyan-100 text-cyan-800 border-cyan-200';
        else if (register === 'Literary') styleClass = 'bg-amber-100 text-amber-800 border-amber-200';
        else if (register === 'Formal') styleClass = 'bg-indigo-100 text-indigo-700 border-indigo-200';

        return (
            <div className={`flex items-center gap-1 px-2 py-0.5 rounded-md border ${styleClass}`}>
                <Tag className="w-3 h-3"/>
                <span className="text-[10px] font-bold uppercase">{register}</span>
            </div>
        );
    };

    if (isLoading) return <div className="min-h-screen flex items-center justify-center"><Loader2 className="w-8 h-8 animate-spin text-violet-600"/></div>;

    if (selectedWord) {
        const isEditingDetail = editingId === selectedWord.id;
        const detailComment = progress.wordComments[selectedWord.id];

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
                    <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-slate-100 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-50">{getStatusBadge(selectedWord.id)}</div>
                        <h1 className="text-4xl font-black text-slate-900 mb-2 mt-4">{selectedWord.term}</h1>
                        <div className="flex items-center justify-center gap-2 mb-4">
                            {selectedWord.transcription && <span className="text-lg text-slate-400 font-mono">{selectedWord.transcription}</span>}
                             <button onClick={() => speak(selectedWord.term)} className="w-8 h-8 bg-violet-50 rounded-full flex items-center justify-center text-violet-600 active:scale-90 transition-transform">
                                 <Volume2 className="w-4 h-4" />
                             </button>
                        </div>
                        <p className="text-2xl font-bold text-violet-600">{selectedWord.translation}</p>
                    </div>
                    {/* Definition */}
                    <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
                        <span className="text-xs font-bold text-slate-400 uppercase block mb-2 tracking-wide">Определение</span>
                        <p className="text-slate-800 text-lg leading-relaxed font-medium">{selectedWord.definition}</p>
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
                </div>
            </div>
        );
    }

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
                                        <div className="flex flex-wrap items-center gap-2 mb-1">
                                            <span className="font-bold text-slate-900 text-lg leading-tight truncate">{w.term}</span>
                                            {/* CHANGED: whitespace-normal break-words to fix truncation issue */}
                                            <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md whitespace-normal break-words text-left h-auto">{w.translation}</span>
                                            {getRegisterBadge(w.register)}
                                        </div>
                                        <p className="text-sm text-slate-500 leading-snug font-medium line-clamp-1">{w.definition}</p>
                                     </div>
                                </div>
                                <button onClick={(e) => { e.stopPropagation(); handleDelete(w.id); }} className="p-2 -mr-2 -mt-2 text-slate-300 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-colors shrink-0">
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                            <div className="mt-3 pt-3 border-t border-slate-50 flex items-start justify-between gap-4">
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
                                            {userComment ? <p className="text-sm text-slate-700 bg-yellow-50 px-2 py-1.5 rounded-lg w-full break-words whitespace-pre-wrap leading-snug">{userComment}</p> : <span className="text-xs text-slate-300 font-medium pt-0.5">Заметка</span>}
                                        </div>
                                    )}
                                </div>
                                <div className="shrink-0 self-center pl-2">{getStatusBadge(w.id)}</div>
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
