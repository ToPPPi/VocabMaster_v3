
import React, { useState, useEffect } from 'react';
import { LogOut, Moon, Sun, Loader2 } from 'lucide-react';
import { Header } from './Header';
import { UserProgress, ViewState } from '../types';
import { isUserPremium, getSecureNow, toggleDarkMode, logoutUser } from '../services/storageService';
import { triggerHaptic } from '../utils/uiHelpers';
import { RewardType } from './RewardOverlay';

// Modular Components
import { UserInfoCard } from './profile/UserInfoCard';
import { DataManagementSection } from './profile/DataManagementSection';
import { PremiumSection } from './profile/PremiumSection';
import { DevZone } from './profile/DevZone';

interface ProfileViewProps {
    progress: UserProgress;
    onUpdate: () => void;
    onLogout: () => void;
    scrollToPremium?: boolean;
    onShowReward?: (type: RewardType) => void;
    onNavigate: (view: ViewState) => void; 
}

export const ProfileView: React.FC<ProfileViewProps> = ({ progress, onUpdate, onLogout, scrollToPremium, onShowReward, onNavigate }) => {
    const [isLoggingOut, setIsLoggingOut] = useState(false);

    const isPremium = isUserPremium(progress);
    
    useEffect(() => {
        if (scrollToPremium && !isPremium) {
            const element = document.getElementById('premium-section');
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        }
    }, [scrollToPremium, isPremium]);
    
    const getExpirationDate = () => {
        if (progress.premiumStatus) return 'Навсегда'; 
        if (!progress.premiumExpiration) return null;
        if (progress.premiumExpiration < getSecureNow()) return 'Истек';
        const date = new Date(progress.premiumExpiration);
        return date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });
    };

    const handleToggleDark = async () => {
        triggerHaptic('medium');
        await toggleDarkMode();
        await onUpdate();
    };

    const handleLogoutAction = async () => {
        if (isLoggingOut) return;
        triggerHaptic('medium');
        setIsLoggingOut(true);
        // Ensure sync before logout
        try {
            await logoutUser();
        } finally {
            onLogout();
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
            
            <div className="p-5 space-y-6">
                <UserInfoCard 
                    progress={progress} 
                    isPremium={isPremium} 
                    expDate={getExpirationDate()} 
                />

                <DataManagementSection onUpdate={onUpdate} onNavigate={onNavigate} />

                <PremiumSection 
                    progress={progress} 
                    onUpdate={onUpdate} 
                    onShowReward={onShowReward}
                />
                
                <div className="space-y-4 pt-4 border-t border-slate-200/50 dark:border-slate-700/50 mt-6">
                    <button 
                        onClick={handleLogoutAction}
                        disabled={isLoggingOut}
                        className={`w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-bold py-4 rounded-2xl shadow-sm active:scale-[0.98] transition-all flex items-center justify-center gap-2 ${isLoggingOut ? 'text-slate-400 cursor-not-allowed opacity-70' : 'text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-900/10'}`}
                    >
                        {isLoggingOut ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                Сохранение и выход...
                            </>
                        ) : (
                            <>
                                <LogOut className="w-5 h-5" />
                                Выйти из аккаунта
                            </>
                        )}
                    </button>
                </div>
                
                <div className="text-center pt-2 pb-4">
                    <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                        VocabMaster v1.0.0
                    </p>
                    <p className="text-[10px] text-slate-300 dark:text-slate-600 mt-1">support@vocabmaster.app</p>
                </div>

                <DevZone onUpdate={onUpdate} />
            </div>
        </div>
    );
};
