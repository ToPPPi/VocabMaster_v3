
import React, { useState, useEffect } from 'react';
import { Upload, Cloud, HardDrive, Copy, Check, Trash2, AlertTriangle, FileText, CheckCircle, Smartphone, X, Loader2, ArrowRight } from 'lucide-react';
import { Header } from './Header';
import { UserProgress } from '../types';
import { exportUserData, importUserData, forceSave, resetUserProgress } from '../services/storage/core';
import { triggerHaptic } from '../utils/uiHelpers';

interface DataManagementViewProps {
    progress: UserProgress;
    onBack: () => void;
    onUpdate: () => void;
}

export const DataManagementView: React.FC<DataManagementViewProps> = ({ progress, onBack, onUpdate }) => {
    const [lastSyncTime, setLastSyncTime] = useState<string>('Никогда');
    const [dbSize, setDbSize] = useState<string>('0 KB');
    
    // UI States
    const [activeModal, setActiveModal] = useState<'none' | 'export' | 'import'>('none');
    
    // Export State
    const [generatedCode, setGeneratedCode] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [isCopied, setIsCopied] = useState(false);

    // Import State
    const [importInput, setImportInput] = useState('');
    const [importStatus, setImportStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle');
    const [importProgress, setImportProgress] = useState(0);
    const [importError, setImportError] = useState('');

    // Reset Logic
    const [resetTaps, setResetTaps] = useState(0);

    useEffect(() => {
        updateStats();
    }, [progress]);

    const updateStats = () => {
        if (progress.lastCloudSync) {
            const date = new Date(progress.lastCloudSync);
            setLastSyncTime(date.toLocaleString('ru-RU', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }));
        }
        const json = JSON.stringify(progress);
        const bytes = new Blob([json]).size;
        setDbSize((bytes / 1024).toFixed(2) + ' KB');
    };

    // --- EXPORT LOGIC ---
    const handleGenerateCode = async () => {
        setIsGenerating(true);
        triggerHaptic('medium');
        try {
            await forceSave(); // Ensure data is fresh
            const code = await exportUserData();
            setGeneratedCode(code);
            setActiveModal('export');
            
            // Try auto-copy immediately
            if (navigator.clipboard && window.isSecureContext) {
                navigator.clipboard.writeText(code).then(() => setIsCopied(true)).catch(() => {});
            }
        } catch (e) {
            alert("Ошибка генерации кода");
        } finally {
            setIsGenerating(false);
        }
    };

    const handleManualCopy = () => {
        triggerHaptic('selection');
        const textArea = document.getElementById('backup-code-area') as HTMLTextAreaElement;
        if (textArea) {
            textArea.select();
            textArea.setSelectionRange(0, 99999); // For mobile
            try {
                document.execCommand('copy'); // Fallback
                if (navigator.clipboard) {
                    navigator.clipboard.writeText(generatedCode);
                }
                setIsCopied(true);
                triggerHaptic('success');
                setTimeout(() => setIsCopied(false), 3000);
            } catch (err) {
                alert("Не удалось скопировать. Пожалуйста, выделите текст и скопируйте вручную.");
            }
        }
    };

    // --- IMPORT LOGIC ---
    const handleRestore = async () => {
        if (!importInput.trim()) return;
        
        const confirm = window.confirm("Внимание! Текущие данные будут заменены данными из кода. Продолжить?");
        if (!confirm) return;

        setImportStatus('processing');
        setImportProgress(0);
        triggerHaptic('medium');

        // Simulate progress for UX (since actual JSON parse is instant but we want user to feel weight)
        const progressInterval = setInterval(() => {
            setImportProgress(prev => {
                if (prev >= 90) {
                    clearInterval(progressInterval);
                    return 90;
                }
                return prev + 10;
            });
        }, 100);

        try {
            // Give UI time to render loading state
            await new Promise(r => setTimeout(r, 500));
            
            const res = await importUserData(importInput);
            
            clearInterval(progressInterval);
            setImportProgress(100);

            if (res.success) {
                setImportStatus('success');
                triggerHaptic('success');
                setTimeout(() => {
                    window.location.reload();
                }, 1500);
            } else {
                throw new Error(res.message);
            }
        } catch (e: any) {
            clearInterval(progressInterval);
            setImportStatus('error');
            setImportError(e.message || "Неверный формат кода");
            triggerHaptic('error');
        }
    };

    const handleResetTap = async () => {
        const newTaps = resetTaps + 1;
        setResetTaps(newTaps);
        triggerHaptic('light');

        if (newTaps >= 10) {
            triggerHaptic('warning');
            const c = window.confirm("ПОСЛЕДНЕЕ ПРЕДУПРЕЖДЕНИЕ: Вы удаляете ВСЕ данные приложения безвозвратно. Продолжить?");
            if (c) {
                await resetUserProgress();
                window.location.reload();
            }
            setResetTaps(0);
        }
    };

    return (
        <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pb-32 relative">
            <Header title="Данные и Бэкап" onBack={onBack} />
            
            <div className="p-5 space-y-6">
                
                {/* 1. STATUS CARD */}
                <div className="bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
                    <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                                <HardDrive className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 dark:text-white text-sm">Локально</h3>
                                <p className="text-[10px] text-slate-500 dark:text-slate-400">Память телефона ({dbSize})</p>
                            </div>
                        </div>
                        <CheckCircle className="w-5 h-5 text-emerald-500" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-sky-100 dark:bg-sky-900/30 rounded-full flex items-center justify-center text-sky-600 dark:text-sky-400">
                                <Cloud className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 dark:text-white text-sm">Облако Telegram</h3>
                                <p className="text-[10px] text-slate-500 dark:text-slate-400">
                                    {lastSyncTime === 'Никогда' ? 'Ожидание синхронизации...' : `Сохранено: ${lastSyncTime}`}
                                </p>
                            </div>
                        </div>
                        <CheckCircle className="w-5 h-5 text-sky-500" />
                    </div>
                </div>

                {/* 2. ACTIONS */}
                <div>
                    <h3 className="font-bold text-slate-900 dark:text-white px-2 mb-2 text-sm flex items-center gap-2">
                        <FileText className="w-4 h-4 text-slate-400"/>
                        Ручной перенос (Backup Code)
                    </h3>
                    <p className="px-2 mb-4 text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed">
                        Используйте этот метод для переноса данных между устройствами, если автоматическое облако не сработало.
                    </p>

                    <div className="space-y-3">
                        {/* GENERATE BUTTON */}
                        <button 
                            onClick={handleGenerateCode}
                            disabled={isGenerating}
                            className="w-full p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl flex items-center justify-between shadow-sm active:scale-[0.98] transition-all"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-violet-100 dark:bg-violet-900/30 rounded-full flex items-center justify-center text-violet-600 dark:text-violet-400">
                                    {isGenerating ? <Loader2 className="w-5 h-5 animate-spin"/> : <Copy className="w-5 h-5"/>}
                                </div>
                                <div className="text-left">
                                    <span className="text-sm font-bold text-slate-900 dark:text-white block">Получить код</span>
                                    <span className="text-[10px] text-slate-500">Скопировать текущий прогресс</span>
                                </div>
                            </div>
                            <ArrowRight className="w-5 h-5 text-slate-300" />
                        </button>

                        {/* RESTORE BUTTON */}
                        <button 
                            onClick={() => setActiveModal('import')}
                            className="w-full p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl flex items-center justify-between shadow-sm active:scale-[0.98] transition-all"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                                    <Upload className="w-5 h-5"/>
                                </div>
                                <div className="text-left">
                                    <span className="text-sm font-bold text-slate-900 dark:text-white block">Ввести код</span>
                                    <span className="text-[10px] text-slate-500">Восстановить данные из буфера</span>
                                </div>
                            </div>
                            <ArrowRight className="w-5 h-5 text-slate-300" />
                        </button>
                    </div>
                </div>

                {/* 4. DANGER ZONE */}
                <div className="pt-12 pb-4 text-center">
                    <button 
                        onClick={handleResetTap} 
                        className={`w-full py-4 border-2 border-dashed rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-95 ${resetTaps > 0 ? 'bg-rose-50 border-rose-300 text-rose-600' : 'border-slate-200 text-slate-400 hover:bg-rose-50 hover:border-rose-200 hover:text-rose-500'}`}
                    >
                        {resetTaps > 0 ? (
                            <>
                                <AlertTriangle className="w-5 h-5 animate-pulse" />
                                <span className="font-bold text-sm">Нажмите еще {10 - resetTaps} раз</span>
                            </>
                        ) : (
                            <>
                                <Trash2 className="w-4 h-4" />
                                <span className="font-bold text-xs">Полный сброс (Factory Reset)</span>
                            </>
                        )}
                    </button>
                </div>
            </div>

            {/* --- MODAL: EXPORT --- */}
            {activeModal === 'export' && (
                <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-t-3xl sm:rounded-3xl p-6 shadow-2xl border-t border-slate-100 dark:border-slate-800 animate-in slide-in-from-bottom-10 duration-300">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Ваш Backup Code</h3>
                            <button onClick={() => setActiveModal('none')} className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-500 hover:text-slate-800">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        
                        <p className="text-xs text-slate-500 mb-3">
                            Этот код содержит весь ваш прогресс. Сохраните его в заметках или отправьте в "Избранное" Telegram.
                        </p>

                        <div className="relative mb-4">
                            <textarea
                                id="backup-code-area"
                                readOnly
                                value={generatedCode}
                                className="w-full h-32 p-3 text-[10px] font-mono bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-300 rounded-xl border border-slate-200 dark:border-slate-800 resize-none focus:outline-none"
                                onClick={(e) => (e.target as HTMLTextAreaElement).select()}
                            />
                        </div>

                        <button 
                            onClick={handleManualCopy}
                            className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95 ${isCopied ? 'bg-emerald-500 text-white' : 'bg-slate-900 dark:bg-violet-600 text-white'}`}
                        >
                            {isCopied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                            {isCopied ? 'Скопировано!' : 'Скопировать в буфер'}
                        </button>
                    </div>
                </div>
            )}

            {/* --- MODAL: IMPORT --- */}
            {activeModal === 'import' && (
                <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-t-3xl sm:rounded-3xl p-6 shadow-2xl border-t border-slate-100 dark:border-slate-800 animate-in slide-in-from-bottom-10 duration-300">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Восстановление</h3>
                            <button onClick={() => { setActiveModal('none'); setImportStatus('idle'); setImportInput(''); }} className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-500 hover:text-slate-800">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {importStatus === 'idle' || importStatus === 'error' ? (
                            <>
                                <p className="text-xs text-slate-500 mb-3">
                                    Вставьте код (начинается с VM5:...), который вы сохранили ранее.
                                </p>
                                <textarea
                                    value={importInput}
                                    onChange={(e) => setImportInput(e.target.value)}
                                    placeholder="Вставьте код сюда..."
                                    className="w-full h-32 p-3 text-[10px] font-mono bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white rounded-xl border border-slate-200 dark:border-slate-800 resize-none focus:ring-2 focus:ring-violet-500 outline-none mb-2"
                                />
                                {importStatus === 'error' && (
                                    <div className="bg-rose-50 text-rose-600 text-xs p-3 rounded-xl mb-3 flex items-center gap-2">
                                        <AlertTriangle className="w-4 h-4" /> {importError}
                                    </div>
                                )}
                                <button 
                                    onClick={handleRestore}
                                    disabled={!importInput}
                                    className="w-full py-4 bg-emerald-600 disabled:bg-slate-300 disabled:cursor-not-allowed text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95"
                                >
                                    <Upload className="w-5 h-5" />
                                    Восстановить данные
                                </button>
                            </>
                        ) : (
                            <div className="py-8 text-center">
                                {importStatus === 'processing' && (
                                    <>
                                        <div className="w-16 h-16 border-4 border-slate-100 border-t-violet-600 rounded-full animate-spin mx-auto mb-4"></div>
                                        <h4 className="font-bold text-slate-900 dark:text-white mb-2">Обработка данных...</h4>
                                        <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden max-w-[200px] mx-auto">
                                            <div className="h-full bg-violet-600 transition-all duration-300" style={{ width: `${importProgress}%` }}></div>
                                        </div>
                                    </>
                                )}
                                {importStatus === 'success' && (
                                    <div className="animate-in zoom-in duration-300">
                                        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-4">
                                            <Check className="w-8 h-8" />
                                        </div>
                                        <h4 className="font-bold text-slate-900 dark:text-white text-lg">Готово!</h4>
                                        <p className="text-slate-500 text-xs">Приложение перезагружается...</p>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};
