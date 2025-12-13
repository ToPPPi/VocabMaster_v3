
import React, { useState, useEffect } from 'react';
import { Download, Upload, Cloud, HardDrive, RefreshCw, CheckCircle, AlertCircle, FileJson, Clock } from 'lucide-react';
import { Header } from './Header';
import { UserProgress } from '../types';
import { exportUserData, importUserData, getUserProgress, forceSave, resetUserProgress } from '../services/storage/core';
import { triggerHaptic } from '../utils/uiHelpers';

interface DataManagementViewProps {
    progress: UserProgress;
    onBack: () => void;
    onUpdate: () => void;
}

export const DataManagementView: React.FC<DataManagementViewProps> = ({ progress, onBack, onUpdate }) => {
    const [lastSyncTime, setLastSyncTime] = useState<string>('Никогда');
    const [dbSize, setDbSize] = useState<string>('0 KB');
    const [isExporting, setIsExporting] = useState(false);
    const [isSyncing, setIsSyncing] = useState(false);
    const [importInput, setImportInput] = useState('');
    const [showImport, setShowImport] = useState(false);

    useEffect(() => {
        updateStats();
    }, [progress]);

    const updateStats = () => {
        if (progress.lastCloudSync) {
            setLastSyncTime(new Date(progress.lastCloudSync).toLocaleString('ru-RU'));
        }
        const json = JSON.stringify(progress);
        const bytes = new Blob([json]).size;
        setDbSize((bytes / 1024).toFixed(2) + ' KB');
    };

    const handleForceSync = async () => {
        setIsSyncing(true);
        triggerHaptic('medium');
        await forceSave(); // This triggers the cloud backup logic in core
        setTimeout(async () => {
            const p = await getUserProgress();
            updateStats(); // Refresh UI with new timestamp
            setIsSyncing(false);
            triggerHaptic('success');
        }, 2000); // Fake delay for UX perception, real sync runs in background
    };

    const handleFileExport = async () => {
        setIsExporting(true);
        triggerHaptic('light');
        try {
            const code = await exportUserData();
            const blob = new Blob([code], { type: "text/plain" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `vocabmaster_backup_${new Date().toISOString().slice(0,10)}.txt`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            triggerHaptic('success');
        } catch (e) {
            alert("Ошибка экспорта");
        }
        setIsExporting(false);
    };

    const handleImportSubmit = async () => {
        if (!importInput) return;
        const confirm = window.confirm("Внимание! Это действие перезапишет текущий прогресс. Продолжить?");
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

    const handleHardReset = async () => {
        const c = window.confirm("Вы точно хотите УДАЛИТЬ ВСЕ данные? Это необратимо.");
        if (c) {
            const c2 = window.confirm("Последнее предупреждение. Удалить?");
            if (c2) {
                await resetUserProgress();
                window.location.reload();
            }
        }
    }

    return (
        <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pb-32">
            <Header title="Управление данными" onBack={onBack} />
            
            <div className="p-5 space-y-6">
                
                {/* STATUS CARD */}
                <div className="bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                            <HardDrive className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900 dark:text-white">Локальное хранилище</h3>
                            <p className="text-xs text-slate-500 dark:text-slate-400">IndexedDB (На телефоне)</p>
                        </div>
                        <div className="ml-auto text-right">
                            <span className="text-sm font-bold text-slate-900 dark:text-white">{dbSize}</span>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                        <div className="w-10 h-10 bg-sky-100 dark:bg-sky-900/30 rounded-full flex items-center justify-center text-sky-600 dark:text-sky-400">
                            <Cloud className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900 dark:text-white">Облако Telegram</h3>
                            <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                                <Clock className="w-3 h-3"/> Синхронизация: {lastSyncTime}
                            </p>
                        </div>
                    </div>
                </div>

                {/* ACTIONS GRID */}
                <h3 className="font-bold text-slate-900 dark:text-white px-2">Действия</h3>
                <div className="grid grid-cols-1 gap-3">
                    
                    <button 
                        onClick={handleForceSync}
                        disabled={isSyncing}
                        className="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 active:scale-[0.98] transition-all"
                    >
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400 ${isSyncing ? 'animate-spin' : ''}`}>
                            <RefreshCw className="w-6 h-6" />
                        </div>
                        <div className="text-left">
                            <div className="font-bold text-slate-900 dark:text-white">Синхронизировать сейчас</div>
                            <div className="text-xs text-slate-500 dark:text-slate-400">Принудительно отправить в облако</div>
                        </div>
                    </button>

                    <button 
                        onClick={handleFileExport}
                        disabled={isExporting}
                        className="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 active:scale-[0.98] transition-all"
                    >
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400">
                            <Download className="w-6 h-6" />
                        </div>
                        <div className="text-left">
                            <div className="font-bold text-slate-900 dark:text-white">Скачать файл бэкапа</div>
                            <div className="text-xs text-slate-500 dark:text-slate-400">Сохранить .txt файл на устройство</div>
                        </div>
                    </button>

                    <button 
                        onClick={() => setShowImport(!showImport)}
                        className="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 active:scale-[0.98] transition-all"
                    >
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400">
                            <Upload className="w-6 h-6" />
                        </div>
                        <div className="text-left">
                            <div className="font-bold text-slate-900 dark:text-white">Восстановить из файла</div>
                            <div className="text-xs text-slate-500 dark:text-slate-400">Загрузить данные из текста</div>
                        </div>
                    </button>
                </div>

                {/* IMPORT AREA */}
                {showImport && (
                    <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-2xl animate-in slide-in-from-top-4">
                        <p className="text-xs font-bold text-slate-500 mb-2">Вставьте код из файла сюда:</p>
                        <textarea 
                            className="w-full h-32 p-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-xs font-mono mb-3 focus:ring-2 focus:ring-violet-500 outline-none dark:text-white"
                            placeholder="VM5:..."
                            value={importInput}
                            onChange={(e) => setImportInput(e.target.value)}
                        />
                        <button 
                            onClick={handleImportSubmit}
                            className="w-full py-3 bg-emerald-600 text-white font-bold rounded-xl active:scale-95 transition-transform"
                        >
                            Применить восстановление
                        </button>
                    </div>
                )}

                <div className="pt-8 text-center">
                    <button onClick={handleHardReset} className="text-xs text-rose-400 underline opacity-70 hover:opacity-100">
                        Полный сброс (Factory Reset)
                    </button>
                </div>
            </div>
        </div>
    );
};
