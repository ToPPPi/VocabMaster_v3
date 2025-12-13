
import React, { useState, useEffect } from 'react';
import { Upload, Cloud, HardDrive, Copy, Check, Trash2, AlertTriangle, FileText, CheckCircle, Smartphone } from 'lucide-react';
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
    
    // Action States
    const [isExporting, setIsExporting] = useState(false);
    const [isCopied, setIsCopied] = useState(false);
    
    // Import UI
    const [importInput, setImportInput] = useState('');
    const [showImport, setShowImport] = useState(false);

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

    // Robust Copy Function (Works in all WebViews)
    const handleCopyBackup = async () => {
        setIsExporting(true);
        triggerHaptic('medium');
        try {
            await forceSave();
            const code = await exportUserData();
            
            // Method 1: Modern API
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(code);
                handleCopySuccess();
            } else {
                throw new Error("Secure Context not available");
            }
        } catch (e) {
            // Method 2: Fallback (Hidden TextArea) - 100% reliable in Telegram Webview
            try {
                const code = await exportUserData();
                const textArea = document.createElement("textarea");
                textArea.value = code;
                
                // Ensure it's not visible but part of DOM
                textArea.style.position = "fixed";
                textArea.style.left = "-9999px";
                textArea.style.top = "0";
                document.body.appendChild(textArea);
                
                textArea.focus();
                textArea.select();
                
                const successful = document.execCommand('copy');
                document.body.removeChild(textArea);
                
                if (successful) {
                    handleCopySuccess();
                } else {
                    prompt("Не удалось скопировать автоматически. Скопируйте код вручную:", code);
                }
            } catch (err) {
                alert("Ошибка копирования. Попробуйте еще раз.");
            }
        }
        setIsExporting(false);
    };

    const handleCopySuccess = () => {
        setIsCopied(true);
        triggerHaptic('success');
        setTimeout(() => setIsCopied(false), 3000);
    };

    const handleImportSubmit = async () => {
        if (!importInput) return;
        const confirm = window.confirm("Внимание! Вы восстанавливаете старую версию. Текущий прогресс будет перезаписан. Продолжить?");
        if (!confirm) return;

        triggerHaptic('medium');
        const res = await importUserData(importInput);
        if (res.success) {
            alert(res.message);
            window.location.reload();
        } else {
            alert(res.message);
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
                    
                    <div className="mt-4 pt-3 border-t border-slate-50 dark:border-slate-800">
                        <p className="text-[10px] text-slate-400 text-center flex items-center justify-center gap-1">
                            <Smartphone className="w-3 h-3" />
                            Синхронизация происходит автоматически в фоновом режиме.
                        </p>
                    </div>
                </div>

                {/* 2. MANUAL BACKUP (CODE ONLY) */}
                <div>
                    <h3 className="font-bold text-slate-900 dark:text-white px-2 mb-2 text-sm flex items-center gap-2">
                        <FileText className="w-4 h-4 text-slate-400"/>
                        Ручной перенос (Backup Code)
                    </h3>
                    <p className="px-2 mb-4 text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed">
                        Если вы хотите перенести прогресс на <b>другой аккаунт Telegram</b>, скопируйте этот код и введите его на новом устройстве.
                    </p>

                    <div className="space-y-3">
                        <button 
                            onClick={handleCopyBackup}
                            disabled={isExporting}
                            className={`w-full p-4 rounded-2xl border flex items-center justify-between gap-3 transition-all active:scale-[0.98] ${isCopied ? 'bg-emerald-50 border-emerald-200 text-emerald-700' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white shadow-sm'}`}
                        >
                            <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isCopied ? 'bg-emerald-100' : 'bg-violet-100 dark:bg-violet-900/30'}`}>
                                    {isCopied ? <Check className="w-5 h-5 text-emerald-600"/> : <Copy className="w-5 h-5 text-violet-600 dark:text-violet-400"/>}
                                </div>
                                <div className="text-left">
                                    <span className="text-sm font-bold block">{isCopied ? 'Скопировано в буфер!' : 'Скопировать код восстановления'}</span>
                                    <span className="text-[10px] text-slate-400 dark:text-slate-500 font-medium">Нажмите, чтобы сохранить</span>
                                </div>
                            </div>
                        </button>

                        <button 
                            onClick={() => setShowImport(!showImport)}
                            className="w-full p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-between active:scale-[0.98] transition-all hover:bg-slate-100 dark:hover:bg-slate-800"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                                    <Upload className="w-5 h-5 text-slate-500 dark:text-slate-400" />
                                </div>
                                <div className="text-left">
                                    <span className="text-sm font-bold block">У меня есть код</span>
                                    <span className="text-[10px] opacity-70">Восстановить данные из буфера</span>
                                </div>
                            </div>
                            <span className="text-xs font-bold text-violet-600 dark:text-violet-400">Ввести</span>
                        </button>
                    </div>

                    {/* IMPORT AREA */}
                    {showImport && (
                        <div className="mt-3 bg-slate-100 dark:bg-slate-800 p-4 rounded-2xl animate-in slide-in-from-top-4 border border-slate-200 dark:border-slate-700">
                            <textarea 
                                className="w-full h-32 p-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-xs font-mono mb-3 focus:ring-2 focus:ring-violet-500 outline-none dark:text-white"
                                placeholder="Вставьте сюда код начинающийся с VM5:..."
                                value={importInput}
                                onChange={(e) => setImportInput(e.target.value)}
                            />
                            <button 
                                onClick={handleImportSubmit}
                                className="w-full py-3 bg-emerald-600 text-white font-bold rounded-xl text-sm active:scale-95 transition-transform shadow-lg shadow-emerald-500/20"
                            >
                                Восстановить из кода
                            </button>
                        </div>
                    )}
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
                    <p className="text-[10px] text-slate-400 mt-2 max-w-[200px] mx-auto">
                        {resetTaps > 0 ? "Внимание: Это действие необратимо удалит всё!" : "Для защиты от случайного нажатия, кнопка требует 10 нажатий подряд."}
                    </p>
                </div>
            </div>
        </div>
    );
};
