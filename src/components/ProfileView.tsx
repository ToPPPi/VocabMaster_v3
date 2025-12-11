
import React, { useState } from 'react';
import { Check, Crown, BarChart3, Sparkles, Zap, Clock, Star, Infinity, Loader2, Database, Download, Upload, Users, Share2, MessageCircle, LogOut, Calendar, BookOpen, Flame } from 'lucide-react';
import { Header } from './Header';
import { UserProgress } from '../types';
import { buyPremium, isUserPremium, exportUserData, importUserData, resetUserProgress, getSecureNow } from '../services/storageService';
import { triggerHaptic, shareApp } from '../utils/uiHelpers';

interface ProfileViewProps {
    progress: UserProgress;
    onUpdate: () => void;
    onLogout: () => void;
}

const BenefitRow = ({ icon: Icon, title, free, premium, highlight }: any) => (
    <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
        <div className="flex items-center gap-2 mb-2">
            <Icon className="w-5 h-5 text-violet-600" />
            <span className="font-bold text-slate-900 text-sm">{title}</span>
        </div>
        <div className="grid grid-cols-2 gap-4 text-xs">
            <div>
                <div className="font-bold text-slate-400 uppercase tracking-wider mb-0.5" style={{fontSize: '10px'}}>БЕСПЛАТНО</div>
                <div className="text-slate-600 font-medium">{free}</div>
            </div>
            <div>
                <div className="font-bold text-emerald-600 uppercase tracking-wider mb-0.5" style={{fontSize: '10px'}}>ПРЕМИУМ</div>
                <div className={`font-bold ${highlight ? 'text-emerald-700' : 'text-slate-900'}`}>{premium}</div>
            </div>
        </div>
    </div>
);

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
        if (progress.premiumStatus) return 'Навсегда'; 
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

    const handleSecretReset = async () => {
        const newTaps = resetTaps + 1;
        setResetTaps(newTaps);
        triggerHaptic('light'); 
        
        if (newTaps === 7) triggerHaptic('warning');
        
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
                                    {isPremium ? 'Premium Активен' : 'Бесплатный аккаунт'}
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

                {/* Community & Data - Grouped */}
                <div className="space-y-4">
                    <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-5">
                        <div className="flex items-center gap-2 mb-3 text-slate-900">
                            <Users className="w-5 h-5 text-slate-400" />
                            <h3 className="text-lg font-bold">Сообщество</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <button onClick={shareApp} className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs font-bold text-slate-600 flex flex-col items-center gap-1 active:scale-95 transition-transform">
                                <Share2 className="w-5 h-5 text-violet-500" />
                                Пригласить друга
                            </button>
                            <button onClick={() => window.Telegram?.WebApp.openTelegramLink('https://t.me/vocabmaster_news')} className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs font-bold text-slate-600 flex flex-col items-center gap-1 active:scale-95 transition-transform">
                                <MessageCircle className="w-5 h-5 text-sky-500" />
                                Наш канал
                            </button>
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-5">
                        <div className="flex items-center gap-2 mb-3 text-slate-900">
                            <Database className="w-5 h-5 text-slate-400" />
                            <h3 className="text-lg font-bold">Управление данными</h3>
                        </div>
                        <p className="text-xs text-slate-400 mb-4">Ваш прогресс хранится на этом устройстве. Рекомендуем периодически сохранять резервную копию.</p>
                        <div className="grid grid-cols-2 gap-3">
                            <button 
                                onClick={handleExport}
                                className="flex flex-col items-center justify-center gap-2 p-4 bg-slate-50 rounded-2xl border border-slate-100 active:bg-slate-100 active:scale-95 transition-all"
                            >
                                <Download className="w-6 h-6 text-violet-600" />
                                <span className="text-xs font-bold text-slate-600">Скачать копию</span>
                            </button>
                            <button 
                                onClick={() => setShowImportInput(!showImportInput)}
                                className="flex flex-col items-center justify-center gap-2 p-4 bg-slate-50 rounded-2xl border border-slate-100 active:bg-slate-100 active:scale-95 transition-all"
                            >
                                <Upload className="w-6 h-6 text-emerald-600" />
                                <span className="text-xs font-bold text-slate-600">Восстановить</span>
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
                </div>

                <button 
                    onClick={() => { triggerHaptic('medium'); onLogout(); }}
                    className="w-full bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 font-bold py-4 rounded-2xl shadow-sm active:scale-[0.98] transition-transform flex items-center justify-center gap-2"
                >
                    <LogOut className="w-5 h-5" />
                    Выйти
                </button>

                {/* PREMIUM SECTION */}
                {!progress.premiumStatus && (
                    <div className="pt-6">
                        <h3 className="text-center text-lg font-bold text-slate-900 mb-6">Преимущества Premium</h3>
                        
                        <div className="space-y-3 mb-6">
                            <BenefitRow 
                                icon={Sparkles} 
                                title="Глубина словаря" 
                                free="3,000 слов (95%)" 
                                premium="10,000 слов (98%)" 
                                highlight={true}
                            />
                            <BenefitRow 
                                icon={BarChart3} 
                                title="Скорость обучения" 
                                free="10 слов/день" 
                                premium="Без ограничений" 
                                highlight={true}
                            />
                            <BenefitRow 
                                icon={Zap} 
                                title="ИИ Тьютор" 
                                free="5 разборов/день" 
                                premium="50 разборов/день" 
                                highlight={true}
                            />
                            <BenefitRow 
                                icon={Clock} 
                                title="Система повторений" 
                                free="Линейная (+3 дня)" 
                                premium="Умная (FSRS/Anki)" 
                                highlight={true}
                            />
                        </div>

                        {/* Payment Options Block */}
                        <div className="bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-3xl p-6 shadow-xl shadow-violet-200/50 relative overflow-hidden text-white">
                            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-3xl -ml-10 -mb-10 pointer-events-none"></div>

                            <div className="relative z-10 flex flex-col items-center mb-6 text-center">
                                <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-2 shadow-inner border border-white/20">
                                    <Crown className="w-7 h-7 text-yellow-300 fill-yellow-300 drop-shadow-sm" />
                                </div>
                                <h3 className="text-2xl font-black tracking-tight">VocabMaster <span className="text-yellow-300">Pro</span></h3>
                                <p className="text-xs text-violet-100 font-medium max-w-[200px] leading-tight mt-1 opacity-90">
                                    Снимите все лимиты и ускорьте обучение
                                </p>
                            </div>

                            <div className="space-y-4 relative z-10">
                                {/* Month Plan */}
                                <button 
                                    onClick={() => handleBuy('month')}
                                    disabled={isLoadingPayment !== null}
                                    className="w-full bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl p-4 transition-all active:scale-95 flex items-center justify-between group backdrop-blur-sm"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white/80 group-hover:text-white transition-colors border border-white/10">
                                            <Star className="w-5 h-5 fill-current" />
                                        </div>
                                        <div className="text-left">
                                            <div className="font-bold text-white">1 Месяц</div>
                                            <div className="text-xs text-violet-200 font-medium">150 ⭐️ <span className="opacity-50">•</span> ≈ 299 ₽</div>
                                        </div>
                                    </div>
                                    <div className="text-white text-xs font-bold bg-white/20 border border-white/20 px-3 py-2 rounded-xl group-hover:bg-white/30 transition-colors">
                                        {isLoadingPayment === 'month' ? <Loader2 className="w-4 h-4 animate-spin"/> : 'Купить'}
                                    </div>
                                </button>

                                {/* Year Plan */}
                                <button 
                                    onClick={() => handleBuy('year')}
                                    disabled={isLoadingPayment !== null}
                                    className="w-full relative group"
                                >
                                    <div className="absolute -top-3 right-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-md z-20 border-2 border-white flex items-center gap-1 transform group-hover:scale-110 transition-transform">
                                        <Flame className="w-3 h-3 fill-current" /> ВЫГОДНО
                                    </div>

                                    <div className="bg-white text-slate-900 rounded-2xl p-1 shadow-lg active:scale-95 transition-transform">
                                        <div className="flex items-center justify-between p-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center text-violet-600">
                                                    <Crown className="w-5 h-5 fill-current" />
                                                </div>
                                                <div className="text-left">
                                                    <div className="font-bold text-lg leading-tight text-slate-900">1 Год</div>
                                                    <div className="text-xs text-slate-500 font-medium mt-0.5">1000 ⭐️ <span className="text-slate-300">•</span> ≈ 1,990 ₽</div>
                                                </div>
                                            </div>
                                            <div className="bg-slate-900 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-sm group-hover:bg-slate-800 transition-colors">
                                                {isLoadingPayment === 'year' ? <Loader2 className="w-4 h-4 animate-spin"/> : 'Купить'}
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                
                <div 
                    onClick={handleSecretReset}
                    className="text-center pt-2 pb-4 cursor-pointer select-none active:opacity-50"
                >
                    <p className="text-xs text-slate-400 font-medium">
                        VocabMaster v1.2.0 {resetTaps > 0 && <span className="text-rose-400 font-bold">({resetTaps})</span>}
                    </p>
                    {/* NEW HINT TEXT */}
                    <p className="text-[10px] text-slate-300 mt-1">(Нажмите 10 раз для сброса данных)</p>
                    <p className="text-[10px] text-slate-300 mt-1">support@vocabmaster.app</p>
                </div>
            </div>
        </div>
    );
};
