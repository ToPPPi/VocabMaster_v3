
import React, { useState, useEffect } from 'react';
import { Database, Upload, RefreshCw, AlertTriangle, Loader2 } from 'lucide-react';
import { importUserData, resetUserProgress } from '../services/storageService';

export const RecoveryView: React.FC = () => {
    const [code, setCode] = useState('');
    const [status, setStatus] = useState<'idle' | 'processing' | 'error' | 'success'>('idle');
    const [errorMsg, setErrorMsg] = useState('');
    const [progress, setProgress] = useState(0);

    const handleRestore = async () => {
        if (!code.trim()) return;
        setStatus('processing');
        setProgress(5);
        
        // Simulate progress for visual feedback
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 90) return 90;
                return prev + Math.floor(Math.random() * 10);
            });
        }, 200);
        
        try {
            // First, try to clear potential corruption
            await resetUserProgress();
            
            // Artificial delay to let user see "Cleaning..." phase if it's too fast
            await new Promise(r => setTimeout(r, 500));
            
            // Then import
            const res = await importUserData(code);
            
            clearInterval(interval);
            setProgress(100);

            if (res.success) {
                setStatus('success');
                setTimeout(() => window.location.reload(), 1500);
            } else {
                setStatus('error');
                setErrorMsg(res.message);
            }
        } catch (e: any) {
            clearInterval(interval);
            setStatus('error');
            setErrorMsg(e.message || "Ошибка восстановления");
        }
    };

    const handleFactoryReset = async () => {
        if (window.confirm("Вы уверены? Это удалит старую базу данных и создаст новую пустую. Ваш прогресс обнулится.")) {
            await resetUserProgress();
            window.location.reload();
        }
    };

    return (
        <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6 text-center font-sans">
            <div className="w-20 h-20 bg-rose-500/20 rounded-full flex items-center justify-center mb-6 animate-pulse border border-rose-500/50">
                <Database className="w-10 h-10 text-rose-500" />
            </div>
            
            <h1 className="text-2xl font-bold mb-2 text-rose-400">Сбой базы данных</h1>
            <p className="text-slate-400 text-sm mb-8 max-w-xs">
                Локальное хранилище на вашем телефоне повреждено или недоступно. Мы не можем загрузить ваши слова.
            </p>

            <div className="w-full max-w-sm bg-slate-800/50 p-6 rounded-2xl border border-slate-700 mb-6 transition-all duration-300">
                <h3 className="font-bold text-white mb-2 text-sm">Вариант 1: Восстановление</h3>
                <p className="text-xs text-slate-400 mb-4">
                    Вставьте код резервной копии, который бот присылал вам в чат (начинается с VM5:).
                </p>
                
                <textarea 
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Вставьте код здесь..."
                    disabled={status === 'processing' || status === 'success'}
                    className="w-full h-24 bg-slate-900 border border-slate-700 rounded-xl p-3 text-xs font-mono text-slate-300 mb-3 focus:outline-none focus:border-violet-500 disabled:opacity-50"
                />
                
                {status === 'processing' && (
                    <div className="mb-4 space-y-2">
                        <div className="flex justify-between text-xs text-slate-400 px-1">
                            <span>Обработка данных...</span>
                            <span>{progress}%</span>
                        </div>
                        <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                            <div 
                                className="h-full bg-violet-500 transition-all duration-300 ease-out" 
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    </div>
                )}
                
                {status === 'error' && (
                    <div className="text-rose-400 text-xs font-bold mb-3 flex items-center justify-center gap-1 animate-in fade-in">
                        <AlertTriangle className="w-3 h-3" /> {errorMsg}
                    </div>
                )}

                <button 
                    onClick={handleRestore}
                    disabled={status === 'processing' || status === 'success' || !code}
                    className={`w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
                        status === 'success' 
                            ? 'bg-emerald-500 text-white scale-105' 
                            : status === 'processing'
                                ? 'bg-slate-700 text-slate-300 cursor-wait'
                                : 'bg-violet-600 text-white active:scale-95 hover:bg-violet-500'
                    } disabled:opacity-80`}
                >
                    {status === 'processing' ? (
                        <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Подождите...
                        </>
                    ) : status === 'success' ? (
                        <>
                            <Upload className="w-4 h-4" />
                            Успешно!
                        </>
                    ) : (
                        <>
                            <Upload className="w-4 h-4" />
                            Восстановить
                        </>
                    )}
                </button>
            </div>

            <button 
                onClick={handleFactoryReset}
                className="text-slate-500 text-xs font-bold flex items-center gap-2 hover:text-white transition-colors"
            >
                <RefreshCw className="w-3 h-3" />
                Сбросить и начать заново (Без кода)
            </button>
        </div>
    );
};
