
import React, { useState, useEffect } from 'react';
import { Download, Upload, Cloud, HardDrive, RefreshCw, Copy, Check, Trash2, AlertTriangle, FileText, CheckCircle, ArrowDownCircle } from 'lucide-react';
import { Header } from './Header';
import { UserProgress } from '../types';
import { exportUserData, importUserData, getUserProgress, forceSave, resetUserProgress, downloadCloudData } from '../services/storage/core';
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
    const [isSyncing, setIsSyncing] = useState(false);
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

    // 1. Force upload LOCAL -> CLOUD
    const handleForceSync = async () => {
        setIsSyncing(true);
        triggerHaptic('medium');
        await forceSave(); 
        setTimeout(async () => {
            const p = await getUserProgress();
            if (p.lastCloudSync) {
                 const date = new Date(p.lastCloudSync);
                 setLastSyncTime(date.toLocaleString('ru-RU', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }));
            }
            setIsSyncing(false);
            triggerHaptic('success');
        }, 1500);
    };

    // 2. Force download CLOUD -> LOCAL
    const handleCloudDownload = async () => {
        const confirm = window.confirm("Внимание: Данные на этом телефоне будут заменены данными из облака Telegram. Продолжить?");
        if (!confirm) return;
        
        setIsSyncing(true);
        triggerHaptic('medium');
        
        try {
            const data = await downloadCloudData();
            if (data) {
                triggerHaptic('success');
                alert("Успешно! Данные из облака загружены.");
                window.location.reload();
            } else {
                triggerHaptic('error');
                alert("В облаке пусто или произошла ошибка загрузки.");
            }
        } catch (e) {
            alert("Ошибка соединения с облаком.");
        } finally {
            setIsSyncing(false);
        }
    };

    // 3. Backup to Clipboard (Preferred)
    const handleCopyBackup = async () => {
        setIsExporting(true);
        triggerHaptic('medium');
        try {
            await forceSave();
            const code = await exportUserData();
            
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(code);
                setIsCopied(true);
                setTimeout(() => setIsCopied(false), 3000);
                triggerHaptic('success');
            } else {
                // Fallback for some webviews
                prompt("Скопируйте этот код вручную:", code);
                setIsCopied(true);
            }
        } catch (e) {
            alert("Ошибка создания бэкапа");
        }
        setIsExporting(false);
    };

    // 4. Backup to File (Might fail on some Android WebViews)
    const handleFileExport = async () => {
        setIsExporting(true);
        triggerHaptic('light');
        try {
            await forceSave();
            const code = await exportUserData();
            const blob = new Blob([code], { type: "text/plain" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            const dateStr = new Date().toISOString().slice(0,10);
            a.download = `vocabmaster_${dateStr}.txt`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            triggerHaptic('success');
        } catch (e) {
            alert("Ваше устройство блокирует скачивание файлов. Пожалуйста, используйте кнопку 'Скопировать код'.");
        }
        setIsExporting(false);
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
            <Header title="Управление данными" onBack={onBack} />
            
            <div className="p-5 space-y-6">
                
                {/* 1. STATUS CARD */}
                <div className="bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
                    <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                                <HardDrive className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 dark:text-white text-sm">На этом телефоне</h3>
                                <p className="text-[10px] text-slate-500 dark:text-slate-400">Локальная база данных</p>
                            </div>
                        </div>
                        <span className="text-xs font-bold text-slate-900 dark:text-white">{dbSize}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-sky-100 dark:bg-sky-900/30 rounded-full flex items-center justify-center text-sky-600 dark:text-sky-400">
                                <Cloud className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 dark:text-white text-sm">В облаке Telegram</h3>
                                <p className="text-[10px] text-slate-500 dark:text-slate-400">
                                    {lastSyncTime === 'Никогда' ? 'Не синхронизировано' : `Синхр: ${lastSyncTime}`}
                                </p>
                            </div>
                        </div>
                        {isSyncing ? (
                            <RefreshCw className="w-5 h-5 text-violet-500 animate-spin" />
                        ) : (
                            <CheckCircle className="w-5 h-5 text-emerald-500" />
                        )}
                    </div>
                </div>

                {/* 2. CLOUD SYNC CONTROL */}
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-2xl border border-blue-100 dark:border-blue-900/50">
                    <h4 className="font-bold text-blue-800 dark:text-blue-300 text-xs mb-2 flex items-center gap-2">
                        <Cloud className="w-3 h-3" /> Автоматическая синхронизация
                    </h4>
                    <p className="text-[11px] text-blue-700/80 dark:text-blue-200/80 leading-relaxed mb-3">
                        Обычно приложение делает всё само. Нажимайте эти кнопки только если вы сменили телефон или видите проблемы.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-2">
                        <button 
                            onClick={handleForceSync}
                            disabled={isSyncing}
                            className="py-3 bg-blue-600 text-white rounded-xl text-xs font-bold active:scale-95 transition-transform flex items-center justify-center gap-2 shadow-sm"
                        >
                            {isSyncing ? <RefreshCw className="w-3 h-3 animate-spin"/> : <Upload className="w-3 h-3"/>}
                            Отправить в Облако
                        </button>
                        <button 
                            onClick={handleCloudDownload}
                            disabled={isSyncing}
                            className="py-3 bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 rounded-xl text-xs font-bold active:scale-95 transition-transform flex items-center justify-center gap-2"
                        >
                            {isSyncing ? <RefreshCw className="w-3 h-3 animate-spin"/> : <ArrowDownCircle className="w-3 h-3"/>}
                            Скачать из Облака
                        </button>
                    </div>
                </div>

                {/* 3. MANUAL BACKUP (CODE) */}
                <div>
                    <h3 className="font-bold text-slate-900 dark:text-white px-2 mb-2 text-sm flex items-center gap-2">
                        <FileText className="w-4 h-4 text-slate-400"/>
                        Ручной перенос данных
                    </h3>
                    <p className="px-2 mb-3 text-[10px] text-slate-500 dark:text-slate-400">
                        Используйте это для переноса прогресса на <b>другой аккаунт Telegram</b> или как вечную резервную копию.
                    </p>

                    <div className="grid grid-cols-2 gap-3 mb-3">
                        <button 
                            onClick={handleCopyBackup}
                            disabled={isExporting}
                            className={`p-4 rounded-2xl border flex flex-col items-center justify-center gap-2 transition-all active:scale-95 ${isCopied ? 'bg-emerald-50 border-emerald-200 text-emerald-700' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'}`}
                        >
                            {isCopied ? <Check className="w-6 h-6"/> : <Copy className="w-6 h-6 text-violet-500"/>}
                            <span className="text-xs font-bold">{isCopied ? 'Скопировано!' : 'Скопировать код'}</span>
                        </button>

                        <button 
                            onClick={handleFileExport}
                            disabled={isExporting}
                            className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 flex flex-col items-center justify-center gap-2 active:scale-95 transition-all opacity-80"
                        >
                            <Download className="w-6 h-6 text-slate-400" />
                            <span className="text-xs font-bold">Скачать файл</span>
                        </button>
                    </div>

                    <button 
                        onClick={() => setShowImport(!showImport)}
                        className="w-full p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-between active:scale-[0.98] transition-all"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                                <Upload className="w-4 h-4 text-slate-500" />
                            </div>
                            <div className="text-left">
                                <span className="text-xs font-bold block">Вставить код восстановления</span>
                                <span className="text-[10px] text-slate-400">Если у вас есть сохраненный код</span>
                            </div>
                        </div>
                        <span className="text-xs font-bold text-violet-600 dark:text-violet-400">Открыть</span>
                    </button>

                    {/* IMPORT AREA */}
                    {showImport && (
                        <div className="mt-3 bg-slate-100 dark:bg-slate-800 p-4 rounded-2xl animate-in slide-in-from-top-4">
                            <textarea 
                                className="w-full h-32 p-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-xs font-mono mb-3 focus:ring-2 focus:ring-violet-500 outline-none dark:text-white"
                                placeholder="Вставьте сюда код начинающийся с VM5:..."
                                value={importInput}
                                onChange={(e) => setImportInput(e.target.value)}
                            />
                            <button 
                                onClick={handleImportSubmit}
                                className="w-full py-3 bg-emerald-600 text-white font-bold rounded-xl text-sm active:scale-95 transition-transform"
                            >
                                Применить код
                            </button>
                        </div>
                    )}
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
                    <p className="text-[10px] text-slate-400 mt-2 max-w-[200px] mx-auto">
                        {resetTaps > 0 ? "Внимание: Это действие необратимо удалит всё!" : "Для защиты от случайного нажатия, кнопка требует 10 нажатий подряд."}
                    </p>
                </div>
            </div>
        </div>
    );
};
