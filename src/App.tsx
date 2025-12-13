
import React, { useState, useEffect } from 'react';
import { UserProgress, ViewState, ProficiencyLevel } from './types';
import { LandingPage } from './components/LandingPage';
import { Dashboard } from './components/Dashboard';
import { LearningSession } from './components/LearningSession';
import { LevelsScreen } from './components/LevelsScreen';
import { LevelBrowser } from './components/LevelBrowser';
import { DictionaryView } from './components/DictionaryView';
import { ProfileView } from './components/ProfileView';
import { AchievementsView } from './components/AchievementsView';
import { ProgressStatsView } from './components/ProgressStatsView';
import { BlitzGame } from './components/BlitzGame';
import { ShopView } from './components/ShopView';
import { DataManagementView } from './components/DataManagementView';
import { SyncConflictModal } from './components/SyncConflictModal';
import { RewardOverlay, RewardType } from './components/RewardOverlay';
import { initUserProgress, completeOnboarding, syncTelegramUserData } from './services/storageService';
import { triggerHaptic } from './utils/uiHelpers';
import { Loader2 } from 'lucide-react';

const App: React.FC = () => {
    const [progress, setProgress] = useState<UserProgress | null>(null);
    const [view, setView] = useState<ViewState>('onboarding');
    const [selectedLevel, setSelectedLevel] = useState<ProficiencyLevel>(ProficiencyLevel.A1);
    
    // Reward System
    const [rewardType, setRewardType] = useState<RewardType | null>(null);

    // Sync Conflict
    const [conflictData, setConflictData] = useState<{ local: number, cloud: number } | null>(null);

    // Only run once on mount
    useEffect(() => {
        let isMounted = true;

        const loadData = async () => {
            try {
                // The heavy lifting is done in initUserProgress (IndexedDB loading)
                const { data, hasConflict, cloudDate } = await initUserProgress();
                
                if (!isMounted) return;

                // Remove the HTML Loader if it exists
                const htmlLoader = document.getElementById('app-loader');
                if (htmlLoader) htmlLoader.style.display = 'none';

                setProgress(data);
                
                if (hasConflict && cloudDate) {
                    setConflictData({ local: data.lastLocalUpdate, cloud: cloudDate });
                }

                if (!data.hasSeenOnboarding) {
                    setView('onboarding');
                } else {
                    setView('dashboard');
                    // Sync Telegram data quietly
                    syncTelegramUserData().catch(err => console.warn("TG Sync error", err));
                }
            } catch (e) {
                console.error("Critical: Failed to load app data", e);
                // In case of error, we DON'T set progress, which keeps the React loader visible,
                // OR we could force a fallback. But the HTML fallback button handles the "stuck" case now.
            } finally {
                if (window.Telegram?.WebApp) {
                    window.Telegram.WebApp.ready();
                    window.Telegram.WebApp.expand();
                    window.Telegram.WebApp.setHeaderColor('#0f172a');
                    window.Telegram.WebApp.setBackgroundColor('#0f172a');
                }
            }
        };

        loadData();

        return () => { isMounted = false; };
    }, []);

    const handleUpdateProgress = async () => {
        const { data } = await initUserProgress();
        setProgress(data);
    };

    const handleCompleteOnboarding = async (name: string) => {
        const newProgress = await completeOnboarding(name);
        setProgress(newProgress);
        setView('dashboard');
    };

    const handleSyncResolve = async (useCloud: boolean) => {
        setConflictData(null);
        await handleUpdateProgress();
    };

    // React-level loader (shows only if React mounted but data fetching)
    if (!progress) {
        return (
            <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
                <Loader2 className="w-8 h-8 text-violet-500 animate-spin" />
            </div>
        );
    }

    const goBack = () => {
        triggerHaptic('light');
        setView('dashboard');
    };

    return (
        <>
            {conflictData && (
                <SyncConflictModal 
                    localDate={conflictData.local} 
                    cloudDate={conflictData.cloud} 
                    onResolve={handleSyncResolve} 
                />
            )}
            
            <RewardOverlay type={rewardType} onClose={() => setRewardType(null)} />

            {view === 'onboarding' && (
                <LandingPage onComplete={handleCompleteOnboarding} />
            )}

            {view === 'dashboard' && (
                <Dashboard 
                    progress={progress} 
                    setViewState={setView} 
                    onStartDaily={() => setView('learn_daily')}
                    onStartReview={() => setView('learn_review')}
                    onUpdate={handleUpdateProgress}
                />
            )}

            {view === 'learn_daily' && (
                <DailyFlow 
                    progress={progress} 
                    onBack={goBack} 
                    onComplete={() => {
                        handleUpdateProgress();
                        goBack();
                    }}
                    onBuyPremium={() => setView('profile')}
                />
            )}

            {view === 'learn_review' && (
                <LearningSession 
                    mode="review" 
                    progress={progress} 
                    onComplete={() => {
                        handleUpdateProgress();
                        goBack();
                    }}
                    onBuyPremium={() => setView('profile')}
                />
            )}

            {view === 'dictionary' && (
                <DictionaryView 
                    progress={progress} 
                    onBack={goBack} 
                    onUpdate={handleUpdateProgress} 
                />
            )}

            {view === 'levels' && (
                <LevelsBrowseFlow 
                    progress={progress} 
                    onBack={goBack} 
                    onUpdate={handleUpdateProgress}
                />
            )}

            {view === 'blitz_intro' && (
                 <LevelsScreen 
                    progress={progress} 
                    mode="blitz" 
                    onBack={goBack} 
                    onSelectLevel={(lvl) => {
                        setSelectedLevel(lvl);
                        setView('blitz_game');
                    }}
                />
            )}

            {view === 'blitz_game' && (
                <BlitzGame 
                    level={selectedLevel} 
                    progress={progress} 
                    onClose={() => {
                        handleUpdateProgress();
                        setView('dashboard');
                    }}
                />
            )}

            {view === 'profile' && (
                <ProfileView 
                    progress={progress} 
                    onUpdate={handleUpdateProgress} 
                    onLogout={() => window.location.reload()} 
                    onShowReward={(type) => setRewardType(type)}
                    onNavigate={(v) => setView(v)}
                />
            )}
            
            {view === 'data_management' && (
                <DataManagementView 
                    progress={progress} 
                    onBack={() => setView('profile')} 
                    onUpdate={handleUpdateProgress}
                />
            )}

            {view === 'shop' && (
                <ShopView 
                    progress={progress} 
                    onBack={goBack} 
                    onUpdate={handleUpdateProgress}
                    onShowReward={(type) => setRewardType(type)}
                />
            )}

            {view === 'achievements' && (
                <AchievementsView 
                    progress={progress} 
                    onBack={goBack} 
                />
            )}

            {view === 'progress_stats' && (
                <ProgressStatsView 
                    progress={progress} 
                    onBack={goBack} 
                />
            )}
        </>
    );
};

// Sub-components to prevent re-rendering entire app
const DailyFlow: React.FC<{
    progress: UserProgress, 
    onBack: () => void, 
    onComplete: () => void,
    onBuyPremium: () => void
}> = ({ progress, onBack, onComplete, onBuyPremium }) => {
    const [lvl, setLvl] = useState<ProficiencyLevel | null>(null);

    if (lvl) {
        return (
            <LearningSession 
                mode="daily" 
                level={lvl} 
                progress={progress} 
                onComplete={onComplete}
                onBuyPremium={onBuyPremium}
            />
        );
    }

    return (
        <LevelsScreen 
            progress={progress} 
            mode="learn" 
            onBack={onBack} 
            onSelectLevel={setLvl} 
        />
    );
};

const LevelsBrowseFlow: React.FC<{
    progress: UserProgress,
    onBack: () => void,
    onUpdate: () => void
}> = ({ progress, onBack, onUpdate }) => {
    const [lvl, setLvl] = useState<ProficiencyLevel | null>(null);

    if (lvl) {
        return (
            <LevelBrowser 
                level={lvl} 
                progress={progress} 
                onBack={() => setLvl(null)} 
                onUpdate={onUpdate}
            />
        );
    }

    return (
        <LevelsScreen 
            progress={progress} 
            mode="browse" 
            onBack={onBack} 
            onSelectLevel={setLvl} 
        />
    );
};

export default App;
