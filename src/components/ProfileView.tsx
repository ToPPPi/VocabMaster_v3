
import React, { useState, useEffect } from 'react';
import { Check, Crown, BarChart3, Sparkles, Zap, Clock, Star, Infinity, Loader2, Database, Download, Upload, Users, Share2, MessageCircle, LogOut, Calendar, BookOpen, Flame, Wrench, KeyRound, Gift, Ticket, X, TestTube, Moon, Sun } from 'lucide-react';
import { Header } from './Header';
import { ProficiencyLevel, UserProgress } from '../types';
import { buyPremium, isUserPremium, exportUserData, importUserData, resetUserProgress, getSecureNow, togglePremium, redeemPromoCode, dev_UnlockRealWords, dev_PopulateReview, toggleDarkMode } from '../services/storageService';
import { triggerHaptic, shareApp } from '../utils/uiHelpers';
import { RewardType } from './RewardOverlay';

interface ProfileViewProps {
    progress: UserProgress;
    onUpdate: () => void;
    onLogout: () => void;
    scrollToPremium?: boolean;
    onShowReward?: (type: RewardType) => void;
}

const BenefitRow = ({ icon: Icon, title, free, premium, highlight }: any) => (
    <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm transition-colors">
        <div className="flex items-center gap-2 mb-2">
            <Icon className="w-5 h-5 text-violet-600 dark:text-violet-400" />
            <span className="font-bold text-slate-900 dark:text-white text-sm">{title}</span>
        </div>
        <div className="grid grid-cols-2 gap-4 text-xs">
            <div>
                <div className="font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-0.5" style={{fontSize: '10px'}}>БЕСПЛАТНО</div>
                <div className="text-slate-600 dark:text-slate-300 font-medium">{free}</div>
            </div>
            <div>
                <div className="font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-0.5" style={{fontSize: '10px'}}>ПРЕМИУМ</div>
                <div className={`font-bold ${highlight ? 'text-emerald-700 dark:text-emerald-300' : 'text-slate-900 dark:text-white'}`}>{premium}</div>
            </div>
        </div>
    </div>
);

export const ProfileView: React.FC<ProfileViewProps> = ({ progress, onUpdate, onLogout, scrollToPremium, onShowReward }) => {
    const [isLoadingPayment, setIsLoadingPayment] = useState<string | null>(null);
    const [showImportInput, setShowImportInput] = useState(false);
    const [showPromoInput, setShowPromoInput] = useState(false);
    const [importCode, setImportCode] = useState("");
    const [promoCode, setPromoCode] = useState("");
    const [actionStatus, setActionStatus] = useState<{success?: boolean, msg?: string} | null>(null);
    
    // Dev Tools State
    const [isDevLoading, setIsDevLoading] = useState(false);
    const [loadingProgress, setLoadingProgress] = useState(0); // 0-100
    const [loadingText, setLoadingText] = useState("");
    
    // Secret Reset Logic
    const [resetTaps, setResetTaps] = useState(0);

    const isPremium = isUserPremium(progress);
    
    // Auto-scroll logic
    useEffect(() => {
        if (scrollToPremium && !isPremium) {
            const element = document.getElementById('premium-section');
            if (element) {
                // Short delay to ensure rendering
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        }
    }, [scrollToPremium, isPremium]);
    
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
                // Trigger Meme/Sound Reward
                if (onShowReward) {
                    onShowReward(plan === 'year' ? 'premium_year' : 'premium_month');
                }
            } else {
                triggerHaptic('error');
            }
        } catch (e) {
            console.error(e);
        } finally {
            setIsLoadingPayment(null);
        }
    };

    const handleToggleDark = async () => {
        triggerHaptic('medium');
        await toggleDarkMode();
        await onUpdate();
    };

    const handleDevPremium = async () => {
        triggerHaptic('success');
        await togglePremium(true);
        await onUpdate();
        alert("Developer Premium Granted!");
    };

    const handleDevUnlockWords = async () => {
        const confirm = window.confirm(`Добавить 500 реальных слов в словарь?`);
        if(!confirm) return;
        
        setIsDevLoading(true);
        setLoadingText("Поиск слов в базе...");
        setLoadingProgress(0);

        try {
            const count = await dev_UnlockRealWords(500, (percent) => {
                setLoadingProgress(percent);
                if (percent > 90) setLoadingText("Сохранение в облако...");
                else if (percent > 50) setLoadingText("Добавление слов...");
            });
            await onUpdate();
            triggerHaptic('success');
            alert(`Успешно добавлено слов: ${count}\n(Всего доступно в базе на данный момент: ${count})`);
        } catch (e) {
            console.error(e);
            alert("Ошибка при добавлении.");
        } finally {
            setIsDevLoading(false);
        }
    };

    const handleDevPopulateReview = async () => {
        const confirm = window.confirm(`Сгенерировать 15 слов для повторения?`);
        if(!confirm) return;

        setIsDevLoading(true);
        setLoadingText("Подготовка очереди...");
        setLoadingProgress(0);

        try {
            const count = await dev_PopulateReview(15, (percent) => {
                setLoadingProgress(percent);
                if (percent > 80) setLoadingText("Сохранение...");
            });
            await onUpdate();
            triggerHaptic('success');
            alert(`Успешно добавлено в очередь повторения: ${count} слов.`);
        } catch (e) {
            console.error(e);
            alert("Ошибка при заполнении очереди.");
        } finally {
            setIsDevLoading(false);
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
        setActionStatus({ success: result.success, msg: result.message });
        
        if (result.success) {
            triggerHaptic('success');
            setTimeout(() => {
                window.location.reload();
            }, 1500);
        } else {
            triggerHaptic('error');
        }
    };

    const handlePromoRedeem = async () => {
        if (!promoCode.trim()) return;
        triggerHaptic('medium');
        const result = await redeemPromoCode(promoCode);
        setActionStatus({ success: result.success, msg: result.message });
        
        if (result.success) {
            triggerHaptic('success');
            await onUpdate();
            // Trigger Meme/Sound Reward for Promo
            if (onShowReward && result.message.includes('план')) {
                 const isYear = result.message.includes('YEAR') || result.message.includes('LIFETIME');
                 onShowReward(isYear ? 'premium_year' : 'premium_month');
            }
            setPromoCode("");
            setTimeout(() => {
                setShowPromoInput(false);
                setActionStatus(null);
            }, 2000);
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
        <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pb-32 transition-colors duration-300 relative">
            <Header title="Профиль" rightContent={
                <button 
                    onClick={handleToggleDark}
                    className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-yellow-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                    {progress.darkMode ? <Sun className="w-5 h-5 fill-current"/> : <Moon className="w-5 h-5 fill-current"/>}
                </button>
            }/>
            
            {/* LOADING OVERLAY */}
            {isDevLoading && (
                <div className="fixed inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-6 animate-in fade-in duration-200">
                    <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 w-full max-w-sm shadow-2xl border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center">
                        <Loader2 className="w-12 h-12 text-violet-600 dark:text-violet-400 animate-spin mb-4" />
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{loadingText}</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">Пожалуйста, не закрывайте приложение.</p>
                        
                        {/* Progress Bar */}
                        <div className="w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                            <div 
                                className="h-full bg-gradient-to-r from-violet-600 to-fuchsia-600 transition-all duration-300 ease-out"
                                style={{ width: `${loadingProgress}%` }}
                            ></div>
                        </div>
                        <span className="text-xs font-bold text-slate-400 mt-2">{loadingProgress}%</span>
                    </div>
                </div>
            )}

            <div className="p-5 space-y-6">
                {/* User Info Card */}
                <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm flex items-center gap-4 transition-colors">
                    <div className="relative shrink-0">
                        {progress.photoUrl ? (
                            <img 
                                src={progress.photoUrl} 
                                alt="Profile" 
                                className="w-16 h-16 rounded-full border border-slate-100 dark:border-slate-700 shadow-sm object-cover"
                            />
                        ) : (
                            <div className="w-16 h-16 bg-gradient-to-br from-violet-100 to-fuchsia-50 dark:from-violet-900 dark:to-fuchsia-900 rounded-full flex items-center justify-center text-2xl font-bold text-violet-600 dark:text-violet-200 border border-violet-100 dark:border-violet-800">
                                {progress.userName ? progress.userName[0].toUpperCase() : 'U'}
                            </div>
                        )}
                        {isPremium && (
                            <div className="absolute -top-1 -right-1 bg-white dark:bg-slate-900 rounded-full p-0.5 shadow-sm">
                                <div className="bg-gradient-to-br from-yellow-300 to-amber-500 rounded-full w-6 h-6 flex items-center justify-center">
                                    <Crown className="w-3.5 h-3.5 text-white fill-white" />
                                </div>
                            </div>
                        )}
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white">{progress.userName || 'User'}</h2>
                        <div className="flex flex-col mt-1">
                            <div className="mt-1 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 w-fit">
                                <span className={`w-2 h-2 rounded-full ${isPremium ? 'bg-amber-400' : 'bg-slate-400'}`}></span>
                                <span className="text-xs font-bold text-slate-600 dark:text-slate-300">
                                    {isPremium ? 'Premium Активен' : 'Бесплатный аккаунт'}
                                </span>
                            </div>
                            {isPremium && expDate && (
                                <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold mt-1 ml-1">
                                    Действует до: {expDate}
                                </span>
                            )}
                        </div>
                    </div>
                </div>

                {/* Community & Data - Grouped */}
                <div className="space-y-4">
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

                    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm p-5 transition-colors">
                        <div className="flex items-center gap-2 mb-3 text-slate-900 dark:text-white">
                            <Database className="w-5 h-5 text-slate-400" />
                            <h3 className="text-lg font-bold">Управление данными</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <button 
                                onClick={handleExport}
                                className="flex flex-col items-center justify-center gap-2 p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 active:bg-slate-100 dark:active:bg-slate-700 active:scale-95 transition-all"
                            >
                                <Download className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                                <span className="text-[10px] font-bold text-slate-600 dark:text-slate-300 text-center leading-tight">Скачать<br/>копию</span>
                            </button>
                            <button 
                                onClick={() => { setShowImportInput(!showImportInput); setShowPromoInput(false); setActionStatus(null); }}
                                className="flex flex-col items-center justify-center gap-2 p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 active:bg-slate-100 dark:active:bg-slate-700 active:scale-95 transition-all"
                            >
                                <Upload className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                                <span className="text-[10px] font-bold text-slate-600 dark:text-slate-300 text-center leading-tight">Восста-<br/>новить</span>
                            </button>
                        </div>

                        {/* Import Logic */}
                        {showImportInput && (
                            <div className="mt-4 animate-in slide-in-from-top-2 bg-slate-50 dark:bg-slate-800 p-3 rounded-xl border border-slate-200 dark:border-slate-700">
                                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-2 block">Восстановление данных</span>
                                <textarea 
                                    value={importCode}
                                    onChange={(e) => setImportCode(e.target.value)}
                                    placeholder="Вставьте код резервной копии..."
                                    className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-3 text-xs font-mono h-24 mb-3 focus:ring-2 focus:ring-emerald-200 dark:focus:ring-emerald-800 outline-none text-slate-900 dark:text-slate-200"
                                />
                                {actionStatus && <div className={`text-xs mb-2 font-bold ${actionStatus.success ? 'text-emerald-600' : 'text-rose-600'}`}>{actionStatus.msg}</div>}
                                <button onClick={handleImport} className="w-full py-3 bg-emerald-600 text-white rounded-xl font-bold text-sm shadow-md active:scale-95 transition-transform">Восстановить</button>
                            </div>
                        )}
                    </div>
                </div>

                {/* PREMIUM SECTION */}
                {!progress.premiumStatus && (
                    <div id="premium-section" className="pt-6">
                        <h3 className="text-center text-lg font-bold text-slate-900 dark:text-white mb-6">Преимущества Premium</h3>
                        
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
                                premium="Умная (FSRS)" 
                                highlight={true}
                            />
                        </div>

                        {/* Payment Options Block */}
                        <div className="bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-3xl p-6 shadow-xl shadow-violet-200/50 dark:shadow-none relative overflow-hidden text-white transition-all">
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
                                {showPromoInput ? (
                                    /* --- PROMO CODE INPUT MODE --- */
                                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                                        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4">
                                            <p className="text-violet-100 text-xs font-bold mb-3 text-center uppercase tracking-wide opacity-80">
                                                Ввод подарочного кода
                                            </p>
                                            
                                            <input 
                                                id="promo-input"
                                                type="text"
                                                value={promoCode}
                                                onChange={(e) => setPromoCode(e.target.value)}
                                                placeholder="ВВЕДИТЕ КОД"
                                                className="w-full bg-white text-slate-900 border-none rounded-xl px-4 py-3 text-sm font-bold text-center mb-3 placeholder:text-slate-300 focus:ring-2 focus:ring-yellow-300 outline-none uppercase tracking-widest"
                                                autoFocus
                                            />
                                            
                                            {actionStatus && (
                                                <div className={`text-xs mb-3 font-bold text-center px-2 py-1 rounded-lg ${actionStatus.success ? 'bg-emerald-500/20 text-emerald-200' : 'bg-rose-500/20 text-rose-200'}`}>
                                                    {actionStatus.msg}
                                                </div>
                                            )}

                                            <div className="flex gap-2">
                                                <button 
                                                    onClick={() => { setShowPromoInput(false); setActionStatus(null); setPromoCode(""); }}
                                                    className="flex-1 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold text-xs transition-colors"
                                                >
                                                    Отмена
                                                </button>
                                                <button 
                                                    onClick={handlePromoRedeem}
                                                    disabled={!promoCode}
                                                    className="flex-1 py-3 bg-yellow-400 text-yellow-900 rounded-xl font-bold text-xs shadow-lg active:scale-95 transition-transform disabled:opacity-50 disabled:scale-100"
                                                >
                                                    Активировать
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    /* --- STANDARD BUTTONS MODE --- */
                                    <>
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
                                        
                                        {/* Promo Link inside Card */}
                                        <div className="text-center pt-2">
                                            <button 
                                                onClick={() => { setShowPromoInput(true); setActionStatus(null); }}
                                                className="text-violet-200 text-xs font-medium hover:text-white underline decoration-violet-400/50 underline-offset-4 transition-colors"
                                            >
                                                У меня есть промокод
                                            </button>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                )}
                
                {/* ACTIONS AREA (Logout Only) */}
                <div className="space-y-4 pt-4 border-t border-slate-200/50 dark:border-slate-700/50 mt-6">
                    {/* LOGOUT BUTTON */}
                    <button 
                        onClick={() => { triggerHaptic('medium'); onLogout(); }}
                        className="w-full bg-white dark:bg-slate-900 text-rose-600 border border-slate-200 dark:border-slate-800 hover:bg-rose-50 dark:hover:bg-rose-900/10 font-bold py-4 rounded-2xl shadow-sm active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                    >
                        <LogOut className="w-5 h-5" />
                        Выйти из аккаунта
                    </button>
                </div>
                
                <div 
                    onClick={handleSecretReset}
                    className="text-center pt-2 pb-4 cursor-pointer select-none active:opacity-50"
                >
                    <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                        VocabMaster v1.2.0 {resetTaps > 0 && <span className="text-rose-400 font-bold">({resetTaps})</span>}
                    </p>
                    <p className="text-[10px] text-slate-300 dark:text-slate-600 mt-1">(Нажмите 10 раз для сброса данных)</p>
                    <p className="text-[10px] text-slate-300 dark:text-slate-600 mt-1">support@vocabmaster.app</p>
                </div>

                {/* Developer Section */}
                <div className="border-t border-slate-100 dark:border-slate-800 pt-4 mt-4 bg-slate-100 dark:bg-slate-900 rounded-2xl p-4 border-2 border-dashed border-slate-300 dark:border-slate-700">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Wrench className="w-4 h-4 text-slate-500" />
                        <span className="text-xs font-black text-slate-500 uppercase tracking-widest">Development Zone</span>
                    </div>
                    
                    <div className="space-y-3">
                        <button 
                            onClick={handleDevPremium}
                            className="w-full py-2 bg-slate-800 dark:bg-slate-800 text-slate-200 text-xs font-mono rounded-xl opacity-80 hover:opacity-100 transition-opacity"
                        >
                            [DEV] Grant Premium
                        </button>

                        <div className="flex gap-2">
                            <button 
                                onClick={handleDevUnlockWords}
                                disabled={isDevLoading}
                                className="flex-1 py-2 bg-emerald-600 text-white text-xs font-bold rounded-xl shadow-sm active:scale-95 flex items-center justify-center gap-2"
                            >
                                {isDevLoading ? <Loader2 className="w-3 h-3 animate-spin"/> : <TestTube className="w-3 h-3"/>}
                                Add 500 Real Words (Database Only)
                            </button>
                        </div>

                        <button 
                            onClick={handleDevPopulateReview}
                            disabled={isDevLoading}
                            className="w-full py-2 bg-amber-500 text-white text-xs font-bold rounded-xl shadow-sm active:scale-95 flex items-center justify-center gap-2"
                        >
                            {isDevLoading ? <Loader2 className="w-3 h-3 animate-spin"/> : <Clock className="w-3 h-3"/>}
                            [DEV] Populate Review Queue (15 words)
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
