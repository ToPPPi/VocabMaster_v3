
import React, { useState } from 'react';
import { Users, Share2, MessageCircle, Database, Download, Upload, Loader2, Copy, Check } from 'lucide-react';
import { exportUserData, importUserData } from '../../services/storageService';
import { shareApp, triggerHaptic } from '../../utils/uiHelpers';

interface DataManagementSectionProps {
    onUpdate: () => void;
}

export const DataManagementSection: React.FC<DataManagementSectionProps> = ({ onUpdate }) => {
    const [showImportInput, setShowImportInput] = useState(false);
    const [importCode, setImportCode] = useState("");
    const [isRestoring, setIsRestoring] = useState(false);
    const [actionStatus, setActionStatus] = useState<{success?: boolean, msg?: string} | null>(null);
    const [exportedData, setExportedData] = useState<string | null>(null);
    const [copySuccess, setCopySuccess] = useState(false);

    const handleExport = async () => {
        triggerHaptic('medium');
        const code = await exportUserData();
        if (code) {
            setExportedData(code);
            // Auto copy if possible
            if (navigator.clipboard) {
                navigator.clipboard.writeText(code).then(() => {
                    setCopySuccess(true);
                    setTimeout(() => setCopySuccess(false), 2000);
                }).catch(() => {});
            }
        } else {
            alert("Ошибка при создании резервной копии.");
        }
    };

    const handleImport = async () => {
        if (!importCode.trim()) return;
        if (isRestoring) return;

        triggerHaptic('medium');
        setIsRestoring(true);
        
        try {
            const result = await importUserData(importCode);
            setActionStatus({ success: result.success, msg: result.message });
            
            if (result.success) {
                triggerHaptic('success');
                setImportCode("");
                await onUpdate();
                setTimeout(() => {
                    window.location.reload();
                }, 1500);
            } else {
                triggerHaptic('error');
                setIsRestoring(false);
            }
        } catch (e) {
            console.error(e);
            setActionStatus({ success: false, msg: "Критическая ошибка восстановления." });
            setIsRestoring(false);
        }
    };

    return (
        <div className="space-y-4">
            {/* Community Block */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm p-5 transition-colors">
                <div className="flex items-center gap-2 mb-3 text-slate-900 dark:text-white">
                    <Users className="w-5 h-5 text-slate-400" />
                    <h3 className="text-lg font-bold">Сообщество</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <button onClick={shareApp} className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300 flex flex-col items-center gap-1 active:scale-95 transition-transform hover:bg-slate-100 dark:hover:bg-slate-700">
                        <Share2 className="w-5 h-5 text-violet-500" />
                        Пригласить друга
                    </button>
                    <button onClick={() => window.Telegram?.WebApp.openTelegramLink('https://t.me/vocabmasters_bot')} className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300 flex flex-col items-center gap-1 active:scale-95 transition-transform hover:bg-slate-100 dark:hover:bg-slate-700">
                        <MessageCircle className="w-5 h-5 text-sky-500" />
                        Наш канал
                    </button>
                </div>
            </div>

            {/* Data Block */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm p-5 transition-colors">
                <div className="flex items-center gap-2 mb-3 text-slate-900 dark:text-white">
                    <Database className="w-5 h-5 text-slate-400" />
                    <h3 className="text-lg font-bold">Управление данными</h3>
                </div>
                
                {!exportedData ? (
                    <div className="grid grid-cols-2 gap-3">
                        <button 
                            onClick={handleExport}
                            className="flex flex-col items-center justify-center gap-2 p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 active:bg-slate-100 dark:active:bg-slate-700 active:scale-95 transition-all"
                        >
                            <Download className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                            <span className="text-[10px] font-bold text-slate-600 dark:text-slate-300 text-center leading-tight">Получить<br/>код копии</span>
                        </button>
                        <button 
                            onClick={() => { setShowImportInput(!showImportInput); setActionStatus(null); setExportedData(null); }}
                            className="flex flex-col items-center justify-center gap-2 p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 active:bg-slate-100 dark:active:bg-slate-700 active:scale-95 transition-all"
                        >
                            <Upload className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                            <span className="text-[10px] font-bold text-slate-600 dark:text-slate-300 text-center leading-tight">Восста-<br/>новить</span>
                        </button>
                    </div>
                ) : (
                    <div className="animate-in slide-in-from-top-2">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-xs font-bold text-slate-500 dark:text-slate-400">Ваш код восстановления:</span>
                            <button onClick={() => setExportedData(null)} className="text-[10px] text-rose-500 font-bold">Закрыть</button>
                        </div>
                        <textarea 
                            readOnly
                            value={exportedData}
                            className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3 text-[10px] font-mono h-32 mb-3 focus:outline-none text-slate-600 dark:text-slate-300 resize-none break-all"
                            onClick={(e) => (e.target as HTMLTextAreaElement).select()}
                        />
                        <button 
                            onClick={() => {
                                navigator.clipboard.writeText(exportedData);
                                setCopySuccess(true);
                                setTimeout(() => setCopySuccess(false), 2000);
                            }}
                            className={`w-full py-3 rounded-xl font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2 ${copySuccess ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'}`}
                        >
                            {copySuccess ? <Check className="w-4 h-4"/> : <Copy className="w-4 h-4"/>}
                            {copySuccess ? 'Скопировано!' : 'Копировать'}
                        </button>
                        <p className="text-[10px] text-slate-400 text-center mt-2">
                            Этот код содержит всю вашу базу данных. Сохраните его.
                        </p>
                    </div>
                )}

                {/* Import Logic */}
                {showImportInput && !exportedData && (
                    <div className="mt-4 animate-in slide-in-from-top-2 bg-slate-50 dark:bg-slate-800 p-3 rounded-xl border border-slate-200 dark:border-slate-700">
                        <span className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-2 block">Вставьте код (начинается с VM5:):</span>
                        <textarea 
                            value={importCode}
                            onChange={(e) => setImportCode(e.target.value)}
                            onClick={(e) => (e.target as HTMLTextAreaElement).select()}
                            placeholder='Вставьте длинный код сюда...'
                            className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-3 text-[10px] font-mono h-32 mb-3 focus:ring-2 focus:ring-emerald-200 dark:focus:ring-emerald-800 outline-none text-slate-900 dark:text-slate-200 resize-none leading-tight break-all"
                            disabled={isRestoring}
                            autoCapitalize="off"
                            autoCorrect="off"
                            spellCheck={false}
                            autoComplete="off"
                        />
                        {actionStatus && <div className={`text-xs mb-3 font-bold ${actionStatus.success ? 'text-emerald-600' : 'text-rose-600'}`}>{actionStatus.msg}</div>}
                        
                        <button 
                            onClick={handleImport} 
                            disabled={isRestoring || !importCode.trim()}
                            className={`w-full py-3 rounded-xl font-bold text-sm shadow-md transition-transform flex items-center justify-center gap-2 ${isRestoring ? 'bg-slate-200 dark:bg-slate-700 text-slate-500 cursor-not-allowed' : 'bg-emerald-600 text-white active:scale-95'}`}
                        >
                            {isRestoring ? (
                                <>
                                    <Loader2 className="w-4 h-4 animate-spin"/>
                                    <span>Проверка...</span>
                                </>
                            ) : (
                                "Восстановить БД"
                            )}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
