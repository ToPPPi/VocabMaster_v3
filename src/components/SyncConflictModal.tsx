
import React from 'react';
import { Cloud, Smartphone, ArrowRight, AlertTriangle } from 'lucide-react';

interface SyncConflictModalProps {
    localDate: number;
    cloudDate: number;
    onResolve: (useCloud: boolean) => void;
}

export const SyncConflictModal: React.FC<SyncConflictModalProps> = ({ localDate, cloudDate, onResolve }) => {
    
    const formatDate = (ts: number) => {
        return new Date(ts).toLocaleString('ru-RU', { 
            day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' 
        });
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-6 animate-in fade-in duration-300">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 w-full max-w-sm shadow-2xl border border-slate-200 dark:border-slate-800">
                
                <div className="flex flex-col items-center text-center mb-6">
                    <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mb-4">
                        <AlertTriangle className="w-8 h-8 text-amber-600 dark:text-amber-400" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Рассинхронизация</h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        Мы нашли более новые данные в облаке. Какую версию использовать?
                    </p>
                </div>

                <div className="space-y-3">
                    {/* Cloud Option (Newer) */}
                    <button 
                        onClick={() => onResolve(true)}
                        className="w-full bg-violet-50 dark:bg-violet-900/20 border-2 border-violet-500 rounded-2xl p-4 flex items-center justify-between group active:scale-[0.98] transition-transform"
                    >
                        <div className="flex items-center gap-3">
                            <Cloud className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                            <div className="text-left">
                                <div className="font-bold text-slate-900 dark:text-white text-sm">Облако (Новее)</div>
                                <div className="text-xs text-slate-500 dark:text-slate-400">{formatDate(cloudDate)}</div>
                            </div>
                        </div>
                        <div className="w-6 h-6 rounded-full bg-violet-600 flex items-center justify-center">
                            <ArrowRight className="w-3 h-3 text-white" />
                        </div>
                    </button>

                    {/* Local Option (Older) */}
                    <button 
                        onClick={() => onResolve(false)}
                        className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 flex items-center justify-between active:scale-[0.98] transition-transform opacity-70 hover:opacity-100"
                    >
                        <div className="flex items-center gap-3">
                            <Smartphone className="w-6 h-6 text-slate-500" />
                            <div className="text-left">
                                <div className="font-bold text-slate-700 dark:text-slate-300 text-sm">Этот телефон</div>
                                <div className="text-xs text-slate-500 dark:text-slate-400">{formatDate(localDate)}</div>
                            </div>
                        </div>
                    </button>
                </div>
                
                <p className="text-xs text-center text-slate-400 mt-6">
                    Выбранная версия перезапишет другую.
                </p>
            </div>
        </div>
    );
};
