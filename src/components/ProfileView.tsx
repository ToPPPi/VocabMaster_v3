
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
    
    // Calculate days left if premium
    const getDaysLeft = () => {
        if (progress.premiumStatus) return 'Навсегда';
        if (!progress.premiumExpiration) return '0 дней';
        const diff = progress.premiumExpiration - getSecureNow();
        if (diff <= 0) return 'Истек';
        const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
        return `${days} дней`;
    };

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
        if (newTaps === 15) triggerHaptic('warning');
        if (newTaps >= 20) {
            triggerHaptic('heavy');
            const confirm = window.confirm("⚠️ SECRET RESET\n\nВы уверены, что хотите полностью сбросить данные? Это действие необратимо.");
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
                        <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-slate-400 text-xs font-medium">Осталось: {isPremium ? getDaysLeft() : '0 дней'}</span>
                        </div>
                        <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-100">
                            <span className={`w-2 h-2 rounded-full ${isPremium ? 'bg-amber-400' : 'bg-slate-400'}`}></span>
                            <span className="text-xs font-bold text-slate-600">
                                {isPremium ? 'Premium Активен' : 'Бесплатный аккаунт'}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Premium Section */}
                <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
                    <h3 className="text-center text-lg font-bold text-slate-900 mb-6">Тарифы Premium</h3>
                    
                    {/* Subscription Buttons */}
                    <div className="grid grid-cols-1 gap-4 mb-6">
                        
                        {/* Monthly Plan */}
                        <button 
                             onClick={() => handleBuy('month')}
                             disabled={isLoadingPayment !== null}
                             className="relative overflow-hidden p-4 rounded-2xl border-2 transition-all active:scale-[0.98] bg-white border-violet-100 hover:border-violet-300"
                        >
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-violet-100 rounded-full flex items-center justify-center text-violet-600">
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
                                    <div className="bg-violet-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold">
                                        Купить
                                    </div>
                                )}
                            </div>
                        </button>

                        {/* Annual Plan */}
                        <button 
                             onClick={() => handleBuy('year')}
                             disabled={isLoadingPayment !== null}
                             className="relative overflow-hidden p-4 rounded-2xl border-2 transition-all active:scale-[0.98] bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200 hover:border-amber-300"
                        >
                            <div className="absolute top-0 right-0 bg-red-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-bl-xl uppercase">
                                Выгодно (-45%)
                            </div>
                            
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gradient-to-br from-amber-300 to-orange-400 rounded-full flex items-center justify-center text-white shadow-sm">
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
                        <h4 className="text-xs font-bold text-slate-400 uppercase text-center mb-2">Что дает Premium</h4>
                        <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                            <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                            <span>Доступ ко всем 10,000 словам (B2, C1, C2)</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                            <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                            <span>Безлимитное обучение</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                            <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                            <span>50 AI-разборов в день</span>
                        </div>
                    </div>
                </div>

                {/* Data Management & Community Blocks (Keep existing) */}
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

                <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
                    <div className="flex items-center gap-2 mb-4 text-slate-900">
                        <Users className="w-5 h-5 text-violet-500" />
                        <h3 className="text-lg font-bold">Сообщество</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <button onClick={shareApp} className="p-4 bg-indigo-50 rounded-2xl flex flex-col items-center gap-2 border border-indigo-100"><Share2 className="w-6 h-6 text-indigo-600"/><span className="text-xs font-bold text-indigo-800">Поделиться</span></button>
                        <button onClick={openChannel} className="p-4 bg-sky-50 rounded-2xl flex flex-col items-center gap-2 border border-sky-100"><MessageCircle className="w-6 h-6 text-sky-600"/><span className="text-xs font-bold text-sky-800">Канал</span></button>
                    </div>
                </div>

                <button 
                    onClick={() => { triggerHaptic('medium'); onLogout(); }}
                    className="w-full bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 font-bold py-4 rounded-2xl shadow-sm active:scale-[0.98] transition-transform flex items-center justify-center gap-2"
                >
                    <LogOut className="w-5 h-5" />
                    Выйти
                </button>
                
                <p 
                    onClick={handleSecretReset}
                    className="text-center text-xs text-slate-400 font-medium pt-2 active:text-rose-400 transition-colors cursor-pointer select-none"
                >
                    VocabMaster v1.2.0 • support@vocabmaster.app {resetTaps > 0 && `(${resetTaps})`}
                </p>
            </div>
        </div>
    );
};
