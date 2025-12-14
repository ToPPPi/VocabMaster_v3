
import React, { useState, useEffect, useRef } from 'react';
import { Upload, HardDrive, Copy, Check, Trash2, AlertTriangle, FileText, CheckCircle, Loader2, ChevronDown, ChevronUp, RefreshCcw } from 'lucide-react';
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
    const [dbSize, setDbSize] = useState<string>('0 KB');
    
    // UI States: 'none', 'export', 'import'
    const [expandedSection, setExpandedSection] = useState<'none' | 'export' | 'import'>('none');
    
    // Export State
    const [generatedCode, setGeneratedCode] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [isCopied, setIsCopied] = useState(false);
    const exportAreaRef = useRef<HTMLTextAreaElement>(null);

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
        const json = JSON.stringify(progress);
        const bytes = new Blob([json]).size;
        setDbSize((bytes / 1024).toFixed(2) + ' KB');
    };

    // --- UPDATE APP LOGIC ---
    const handleForceUpdate = async () => {
        triggerHaptic('medium');
        if (window.confirm("Это принудительно обновит приложение до последней версии (очистит кэш). Ваши данные сохранятся. Продолжить?")) {
            if ('serviceWorker' in navigator) {
                const registrations = await navigator.serviceWorker.getRegistrations();
                for (const registration of registrations) {
                    await registration.unregister();
                }
            }
            // Clear browser cache via reload
            window.location.reload();
        }
    };

    // --- EXPORT LOGIC ---
    const toggleExport = async () => {
        if (expandedSection === 'export') {
            setExpandedSection('none');
            return;
        }

        setIsGenerating(true);
        setExpandedSection('export'); 
        setGeneratedCode(''); 
        triggerHaptic('medium');

        try {
            await forceSave(); 
            setTimeout(async () => {
                const code = await exportUserData();
                if (code) {
                    setGeneratedCode(code);
                } else {
                    alert("Ошибка: Не удалось сгенерировать код.");
                }
                setIsGenerating(false);
            }, 300);
        } catch (e) {
            alert("Ошибка генерации кода");
            setIsGenerating(false);
        }
    };

    const handleManualCopy = () => {
        triggerHaptic('selection');
        if (exportAreaRef.current) {
            exportAreaRef.current.select();
            exportAreaRef.current.setSelectionRange(0, 99999);
            
            try {
                document.execCommand('copy');
                if (navigator.clipboard && window.isSecureContext) {
                    navigator.clipboard.writeText(generatedCode);
                }
                setIsCopied(true);
                triggerHaptic('success');
                setTimeout(() => setIsCopied(false), 3000);
            } catch (err) {
                alert("Не удалось скопировать. Выделите текст и скопируйте вручную.");
            }
        }
    };

    // --- IMPORT LOGIC ---
    const toggleImport = () => {
        if (expandedSection === 'import') {
            setExpandedSection('none');
        } else {
            triggerHaptic('light');
            setExpandedSection('import');
            setImportStatus('idle');
            setImportInput('');
        }
    };

    const handleRestore = async () => {
        if (!importInput.trim()) return;
        
        const confirm = window.confirm("Внимание! Текущие данные будут заменены данными из кода. Продолжить?");
        if (!confirm) return;

        setImportStatus('processing');
        setImportProgress(0);
        triggerHaptic('medium');

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
        <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pb-32">
            <Header title="Данные и Бэкап" onBack={onBack} />
            
            <div className="p-5 space-y-6">
                
                {/* 1. LOCAL STATUS ONLY */}
                <div className="bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                                <HardDrive className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 dark:text-white text-sm">Локальное хранилище</h3>
                                <p className="text-[10px] text-slate-400 dark:text-slate-500 font-mono mt-1">Размер БД: {dbSize}</p>
                            </div>
                        </div>
                        <CheckCircle className="w-5 h-5 text-emerald-500" />
                    </div>

                    <button 
                        onClick={handleForceUpdate}
                        className="w-full py-2 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-xl text-xs font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform"
                    >
                        <RefreshCcw className="w-3 h-3" />
                        Обновить версию приложения
                    </button>
                </div>

                {/* 2. MANUAL BACKUP ACTIONS */}
                <div>
                    <h3 className="font-bold text-slate-900 dark:text-white px-2 mb-2 text-sm flex items-center gap-2">
                        <FileText className="w-4 h-4 text-slate-400"/>
                        Перенос данных (Вручную)
                    </h3>
                    <p className="px-2 mb-4 text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed">
                        Чтобы перенести прогресс на другое устройство или сохранить его, используйте код восстановления.
                    </p>

                    <div className="space-y-3">
                        {/* --- EXPORT SECTION --- */}
                        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-all shadow-sm">
                            <button 
                                onClick={toggleExport}
                                className="w-full p-4 flex items-center justify-between active:bg-slate-50 dark:active:bg-slate-800 transition-colors"
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${expandedSection === 'export' ? 'bg-violet-100 text-violet-600' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>
                                        <Copy className="w-5 h-5"/>
                                    </div>
                                    <div className="text-left">
                                        <span className="text-sm font-bold text-slate-900 dark:text-white block">Получить код (Сохранить)</span>
                                        <span className="text-[10px] text-slate-500">Создать резервную копию</span>
                                    </div>
                                </div>
                                {expandedSection === 'export' ? <ChevronUp className="w-5 h-5 text-slate-400"/> : <ChevronDown className="w-5 h-5 text-slate-400"/>}
                            </button>

                            {/* INLINE EXPORT CONTENT */}
                            {expandedSection === 'export' && (
                                <div className="px-4 pb-4 pt-0 animate-in slide-in-from-top-2">
                                    <div className="bg-slate-50 dark:bg-slate-950 rounded-xl p-3 border border-slate-100 dark:border-slate-800 mt-2">
                                        {isGenerating ? (
                                            <div className="flex flex-col items-center justify-center py-6 text-slate-400">
                                                <Loader2 className="w-6 h-6 animate-spin mb-2 text-violet-500" />
                                                <span className="text-xs">Генерация кода...</span>
                                            </div>
                                        ) : (
                                            <>
                                                <p className="text-[10px] text-slate-400 mb-2">
                                                    Скопируйте этот код и сохраните его в надежном месте (например, в "Избранном" Telegram).
                                                </p>
                                                <textarea
                                                    ref={exportAreaRef}
                                                    readOnly
                                                    value={generatedCode}
                                                    onClick={(e) => (e.target as HTMLTextAreaElement).select()}
                                                    placeholder="Код появится здесь..."
                                                    className="w-full h-24 p-3 text-[10px] font-mono bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 rounded-lg border border-slate-200 dark:border-slate-700 resize-none focus:outline-none mb-3"
                                                />
                                                <button 
                                                    onClick={handleManualCopy}
                                                    disabled={!generatedCode}
                                                    className={`w-full py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all active:scale-95 ${isCopied ? 'bg-emerald-500 text-white' : 'bg-slate-900 dark:bg-violet-600 text-white disabled:opacity-50 disabled:cursor-not-allowed'}`}
                                                >
                                                    {isCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                                    {isCopied ? 'Скопировано!' : 'Скопировать в буфер'}
                                                </button>
                                            </>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* --- IMPORT SECTION --- */}
                        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-all shadow-sm">
                            <button 
                                onClick={toggleImport}
                                className="w-full p-4 flex items-center justify-between active:bg-slate-50 dark:active:bg-slate-800 transition-colors"
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${expandedSection === 'import' ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>
                                        <Upload className="w-5 h-5"/>
                                    </div>
                                    <div className="text-left">
                                        <span className="text-sm font-bold text-slate-900 dark:text-white block">Ввести код (Восстановить)</span>
                                        <span className="text-[10px] text-slate-500">Загрузить данные из копии</span>
                                    </div>
                                </div>
                                {expandedSection === 'import' ? <ChevronUp className="w-5 h-5 text-slate-400"/> : <ChevronDown className="w-5 h-5 text-slate-400"/>}
                            </button>

                            {/* INLINE IMPORT CONTENT */}
                            {expandedSection === 'import' && (
                                <div className="px-4 pb-4 pt-0 animate-in slide-in-from-top-2">
                                    <div className="bg-slate-50 dark:bg-slate-950 rounded-xl p-3 border border-slate-100 dark:border-slate-800 mt-2">
                                        {importStatus === 'idle' || importStatus === 'error' ? (
                                            <>
                                                <p className="text-[10px] text-slate-400 mb-2">
                                                    Вставьте код (начинается с VM5:...), который вы сохранили ранее.
                                                </p>
                                                <textarea
                                                    value={importInput}
                                                    onChange={(e) => setImportInput(e.target.value)}
                                                    placeholder="Вставьте код сюда..."
                                                    className="w-full h-24 p-3 text-[10px] font-mono bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-lg border border-slate-200 dark:border-slate-700 resize-none focus:ring-2 focus:ring-violet-500 outline-none mb-3"
                                                />
                                                
                                                {importStatus === 'error' && (
                                                    <div className="bg-rose-50 text-rose-600 text-[10px] p-2 rounded-lg mb-3 flex items-center gap-2">
                                                        <AlertTriangle className="w-3 h-3" /> {importError}
                                                    </div>
                                                )}

                                                <button 
                                                    onClick={handleRestore}
                                                    disabled={!importInput}
                                                    className="w-full py-3 bg-emerald-600 disabled:bg-slate-300 disabled:cursor-not-allowed text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all active:scale-95"
                                                >
                                                    <Upload className="w-4 h-4" />
                                                    Восстановить данные
                                                </button>
                                            </>
                                        ) : (
                                            <div className="py-4 text-center">
                                                {importStatus === 'processing' && (
                                                    <>
                                                        <div className="w-10 h-10 border-4 border-slate-200 border-t-violet-600 rounded-full animate-spin mx-auto mb-3"></div>
                                                        <h4 className="font-bold text-slate-900 dark:text-white text-xs mb-2">Обработка...</h4>
                                                        <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden max-w-[150px] mx-auto">
                                                            <div className="h-full bg-violet-600 transition-all duration-300" style={{ width: `${importProgress}%` }}></div>
                                                        </div>
                                                    </>
                                                )}
                                                {importStatus === 'success' && (
                                                    <div className="animate-in zoom-in duration-300">
                                                        <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-2">
                                                            <Check className="w-6 h-6" />
                                                        </div>
                                                        <h4 className="font-bold text-slate-900 dark:text-white text-sm">Готово!</h4>
                                                        <p className="text-slate-500 text-[10px]">Перезагрузка...</p>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* 4. DANGER ZONE */}
                <div className="pt-8 pb-4 text-center">
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
        </div>
    );
};
