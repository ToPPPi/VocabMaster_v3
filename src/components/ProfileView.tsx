
import React, { useState } from 'react';
import { Check, Crown, BarChart3, Sparkles, Zap, Clock, Star, Infinity, Loader2, Database, Download, Upload, Users, Share2, MessageCircle, LogOut, Calendar } from 'lucide-react';
import { Header } from './Header';
import { UserProgress } from '../types';
import { buyPremium, isUserPremium, exportUserData, importUserData, resetUserProgress, getSecureNow } from '../services/storageService';
import { triggerHaptic, shareApp } from '../utils/uiHelpers';

interface ProfileViewProps {
    progress: UserProgress;
    onUpdate: () => void;
    onLogout: () => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({ progress, onUpdate, onLogout }) => {
    const [isLoadingPayment, setIsLoadingPayment] = useState<string | null>(null);
    const [showImportInput, setShowImportInput] = useState(false);
    const [importCode, setImportCode] = useState("");
    const [importStatus, setImportStatus] = useState<{success?: boolean, msg?: string} | null>(null);
    
    // Secret Reset Logic
    const [resetTaps, setResetTaps] = useState(0);

    const isPremium = isUserPremium(progress);
    
    // Format Expiration Date
    const getExpirationDate = () => {
        if (progress.premiumStatus) return 'Навсегда'; // Legacy
        if (!progress.premiumExpiration) return null;
        
        if (progress.premiumExpiration < getSecureNow()) return 'Истек';

        const date = new Date(progress.premiumExpiration);
        return date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });
    };

    const expDate = getExpirationDate();

    const handleBuy = async (plan: 'month' | 'year') => {
        triggerHaptic('medium');
        setIsLoadingPayment(plan);
        try {
            const success = await buyPremium(plan);
            if (success) {
                await onUpdate();
                triggerHaptic('success');
            } else {
                triggerHaptic('error');
            }
        } catch (e) {
            console.error(e);
        } finally {
            setIsLoadingPayment(null);
        }
    };

    const handleExport = async () => {
        triggerHaptic('medium');
        const code = await exportUserData();
        if (code) {
            navigator.clipboard.writeText(code);
            alert("Код резервной копии скопирован в буфер обмена!\n\nСохраните его в надежном месте (например, в 'Избранном' Telegram).");
        } else {
            alert("Ошибка при создании резервной копии.");
        }
    };

    const handleImport = async () => {
        if (!importCode.trim()) return;
        triggerHaptic('medium');
        const result = await importUserData(importCode);
        setImportStatus({ success: result.success, msg: result.message });
        
        if (result.success) {
            triggerHaptic('success');
            setTimeout(() => {
                window.location.reload();
            }, 1500);
        } else {
            triggerHaptic('error');
        }
    };

    const openChannel = () => {
        if (window.Telegram?.WebApp) {
            window.Telegram.WebApp.openTelegramLink('https://t.me/vocabmaster_news'); 
        } else {
            window.open('https://t.me/vocabmaster_news', '_blank');
        }
    };

    const handleSecretReset = async () => {
        const newTaps = resetTaps + 1;
        setResetTaps(newTaps);
        triggerHaptic('light'); // Feedback for every tap
        
        if (newTaps === 7) triggerHaptic('warning');
        
        // Reduced to 10 taps for better usability
        if (newTaps >= 10) {
            triggerHaptic('heavy');
            const confirm = window.confirm("⚠️ СБРОС ДАННЫХ\n\nВы уверены, что хотите полностью стереть прогресс? Это действие необратимо.");
            if (confirm) {
                await resetUserProgress();
                window.location.reload();
            }
            setResetTaps(0);
        }
    };

    return (
        <div className="bg-slate-50 min-h-screen pb-32">
            <Header title="Профиль" />
            
            <div className="p-5 space-y-6">
                {/* User Info Card */}
                <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4">
                    <div className="relative shrink-0">
                        {progress.photoUrl ? (
                            <img 
                                src={progress.photoUrl} 
                                alt="Profile" 
                                className="w-16 h-16 rounded-full border border-slate-100 shadow-sm object-cover"
                            />
                        ) : (
                            <div className="w-16 h-16 bg-gradient-to-br from-violet-100 to-fuchsia-50 rounded-full flex items-center justify-center text-2xl font-bold text-violet-600 border border-violet-100">
                                {progress.userName ? progress.userName[0].toUpperCase() : 'U'}
                            </div>
                        )}
                        {isPremium && (
                            <div className="absolute -top-1 -right-1 bg-white rounded-full p-0.5 shadow-sm">
                                <div className="bg-gradient-to-br from-yellow-300 to-amber-500 rounded-full w-6 h-6 flex items-center justify-center">
                                    <Crown className="w-3.5 h-3.5 text-white fill-white" />
                                </div>
                            </div>
                        )}
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-slate-900">{progress.userName || 'User'}</h2>
                        <div className="flex flex-col mt-1">
                            <div className="mt-1 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-100 w-fit">
                                <span className={`w-2 h-2 rounded-full ${isPremium ? 'bg-amber-400' : 'bg-slate-400'}`}></span>
                                <span className="text-xs font-bold text-slate-600">
                                    {isPremium ? 'Premium Активен' : 'Бесплатный'}
                                </span>
                            </div>
                            {isPremium && expDate && (
                                <span className="text-[10px] text-emerald-600 font-bold mt-1 ml-1">
                                    Действует до: {expDate}
                                </span>
                            )}
                        </div>
                    </div>
                </div>

                {/* Premium Section */}
                <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
                    <h3 className="text-center text-lg font-bold text-slate-900 mb-2">Тарифы Premium</h3>
                    <p className="text-center text-xs text-slate-400 mb-6 px-4">Подписки суммируются. Если у вас есть активная подписка, срок будет продлен.</p>
                    
                    {/* Subscription Buttons */}
                    <div className="grid grid-cols-1 gap-4 mb-6">
                        
                        {/* Monthly Plan */}
                        <button 
                             onClick={() => handleBuy('month')}
                             disabled={isLoadingPayment !== null}
                             className="relative overflow-hidden p-4 rounded-2xl border-2 transition-all active:scale-[0.98] bg-white border-violet-100 hover:border-violet-300 group"
                        >
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-violet-100 rounded-full flex items-center justify-center text-violet-600 group-hover:scale-110 transition-transform">
                                        <Calendar className="w-5 h-5" />
                                    </div>
                                    <div className="text-left">
                                        <div className="font-bold text-slate-900">1 Месяц</div>
                                        <div className="text-[10px] text-slate-500 font-bold uppercase">150 Stars (≈299₽)</div>
                                    </div>
                                </div>
                                {isLoadingPayment === 'month' ? (
                                    <Loader2 className="w-5 h-5 animate-spin text-violet-600" />
                                ) : (
                                    <div className="bg-violet-50 text-violet-700 px-3 py-1.5 rounded-lg text-xs font-bold">
                                        Купить
                                    </div>
                                )}
                            </div>
                        </button>

                        {/* Annual Plan */}
                        <button 
                             onClick={() => handleBuy('year')}
                             disabled={isLoadingPayment !== null}
                             className="relative overflow-hidden p-4 rounded-2xl border-2 transition-all active:scale-[0.98] bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200 hover:border-amber-300 group"
                        >
                            <div className="absolute top-0 right-0 bg-red-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-bl-xl uppercase shadow-sm">
                                Выгодно (-45%)
                            </div>
                            
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gradient-to-br from-amber-300 to-orange-400 rounded-full flex items-center justify-center text-white shadow-sm group-hover:scale-110 transition-transform">
                                        <Star className="w-5 h-5 fill-current" />
                                    </div>
                                    <div className="text-left">
                                        <div className="font-bold text-slate-900">1 Год</div>
                                        <div className="text-[10px] text-slate-500 font-bold uppercase">1000 Stars (≈2000₽)</div>
                                    </div>
                                </div>
                                {isLoadingPayment === 'year' ? (
                                    <Loader2 className="w-5 h-5 animate-spin text-amber-600" />
                                ) : (
                                    <div className="bg-slate-900 text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow-lg">
                                        Купить
                                    </div>
                                )}
                            </div>
                        </button>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-3">
                        <h4 className="text-xs font-bold text-slate-400 uppercase text-center mb-2">Преимущества</h4>
                        <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                            <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                            <span>Все 10,000 слов (A1 - C2)</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                            <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                            <span>Безлимитное обучение в день</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                            <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                            <span>ИИ тьютор (50 разборов в день)</span>
                        </div>
                    </div>
                </div>

                {/* Data Management & Community Blocks */}
                <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
                    <div className="flex items-center gap-2 mb-4 text-slate-900">
                        <Database className="w-5 h-5 text-slate-400" />
                        <h3 className="text-lg font-bold">Управление данными</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <button 
                            onClick={handleExport}
                            className="flex flex-col items-center justify-center gap-2 p-4 bg-slate-50 rounded-2xl border border-slate-100 active:bg-slate-100 active:scale-95 transition-all"
                        >
                            <Download className="w-6 h-6 text-violet-600" />
                            <span className="text-xs font-bold text-slate-600">Скачать</span>
                        </button>
                        <button 
                            onClick={() => setShowImportInput(!showImportInput)}
                            className="flex flex-col items-center justify-center gap-2 p-4 bg-slate-50 rounded-2xl border border-slate-100 active:bg-slate-100 active:scale-95 transition-all"
                        >
                            <Upload className="w-6 h-6 text-emerald-600" />
                            <span className="text-xs font-bold text-slate-600">Загрузить</span>
                        </button>
                    </div>
                    {showImportInput && (
                        <div className="mt-4 animate-in slide-in-from-top-2">
                             <textarea 
                                value={importCode}
                                onChange={(e) => setImportCode(e.target.value)}
                                placeholder="Вставьте код..."
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs font-mono h-24 mb-3 focus:ring-2 focus:ring-violet-200 outline-none"
                             />
                             {importStatus && <div className="text-xs mb-2 text-emerald-600">{importStatus.msg}</div>}
                             <button onClick={handleImport} className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold text-sm">Восстановить</button>
                        </div>
                    )}
                </div>

                <button 
                    onClick={() => { triggerHaptic('medium'); onLogout(); }}
                    className="w-full bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 font-bold py-4 rounded-2xl shadow-sm active:scale-[0.98] transition-transform flex items-center justify-center gap-2"
                >
                    <LogOut className="w-5 h-5" />
                    Выйти
                </button>
                
                <div 
                    onClick={handleSecretReset}
                    className="text-center pt-2 pb-4 cursor-pointer select-none active:opacity-50"
                >
                    <p className="text-xs text-slate-400 font-medium">
                        VocabMaster v1.2.0 {resetTaps > 0 && <span className="text-rose-400 font-bold">({resetTaps})</span>}
                    </p>
                    <p className="text-[10px] text-slate-300">support@vocabmaster.app</p>
                </div>
            </div>
        </div>
    );
};
