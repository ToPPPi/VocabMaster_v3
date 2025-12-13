
import React, { useState, useEffect } from 'react';
import { Loader2, LayoutGrid, Layers, BarChart3, Library, User as UserIcon, Zap } from 'lucide-react';
import { ProficiencyLevel, ViewState, UserProgress } from './types';
import { getUserProgress, completeOnboarding, resetUserProgress, syncTelegramUserData, logoutUser } from './services/storageService';
import { triggerHaptic } from './utils/uiHelpers';

// Components
import { LandingPage } from './components/LandingPage';
import { Dashboard } from './components/Dashboard';
import { LearningSession } from './components/LearningSession';
import { LevelsScreen } from './components/LevelsScreen';
import { LevelBrowser } from './components/LevelBrowser';
import { DictionaryView } from './components/DictionaryView';
import { ProfileView } from './components/ProfileView';
import { ProgressStatsView } from './components/ProgressStatsView';
import { AchievementsView } from './components/AchievementsView';
import { BlitzGame } from './components/BlitzGame';
import { ShopView } from './components/ShopView';
import { RewardOverlay, RewardType } from './components/RewardOverlay';

const App: React.FC = () => {
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [view, setView] = useState<ViewState | 'level_browser' | 'progress_stats'>('onboarding');
  const [activeLevel, setActiveLevel] = useState<ProficiencyLevel | null>(null);
  const [levelsMode, setLevelsMode] = useState<'learn' | 'browse' | 'blitz'>('browse');
  
  // Reward State
  const [reward, setReward] = useState<RewardType | null>(null);
  
  // Navigation State
  const [scrollToPremium, setScrollToPremium] = useState(false);

  useEffect(() => {
      const load = async () => {
          await syncTelegramUserData(); // Sync name and photo
          const p = await getUserProgress();
          setProgress(p);
          if (p.hasSeenOnboarding) setView('dashboard');
          else setView('onboarding');
          
          if (window.Telegram?.WebApp) {
            window.Telegram.WebApp.ready();
            window.Telegram.WebApp.expand();
            // Set header color to match light/dark mode later if needed, but standard is safe
            window.Telegram.WebApp.setHeaderColor('#F1F5F9'); 
            window.Telegram.WebApp.setBackgroundColor('#F1F5F9');
        }
      };
      load();
  }, []);

  // --- PREVENT ZOOM (IOS NATIVE FEEL) ---
  useEffect(() => {
    const handleGestureStart = (e: any) => {
        e.preventDefault();
    };
    
    // Prevent Pinch-to-Zoom
    document.addEventListener('gesturestart', handleGestureStart);
    
    // Prevent Double-Tap Zoom on non-interactive elements
    let lastTouchEnd = 0;
    const handleTouchEnd = (e: any) => {
        const now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            // Check if target is not an input
            if(e.target && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
                e.preventDefault();
            }
        }
        lastTouchEnd = now;
    };
    document.addEventListener('touchend', handleTouchEnd, false);

    return () => {
        document.removeEventListener('gesturestart', handleGestureStart);
        document.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  // --- ANDROID BACK BUTTON HANDLING ---
  useEffect(() => {
      const tg = window.Telegram?.WebApp;
      if (!tg) return;

      const handleBack = () => {
          // If in a deep view, go back to dashboard
          if (view !== 'dashboard' && view !== 'onboarding') {
              setView('dashboard');
          }
      };

      if (tg.BackButton) {
         tg.BackButton.onClick(handleBack);
      }

      // Show back button only when not on main screens
      if (view !== 'dashboard' && view !== 'onboarding') {
          tg.BackButton?.show();
      } else {
          tg.BackButton?.hide();
      }

      return () => {
          if(tg.BackButton) tg.BackButton.offClick(handleBack);
      };
  }, [view]);

  const refreshProgress = async () => {
      const p = await getUserProgress();
      // Ensure state update triggers re-render by creating a new object reference
      setProgress({ ...p });
      if(!p.hasSeenOnboarding && view !== 'onboarding') setView('onboarding');
  };

  const finishOnboarding = async (name: string) => { 
      await completeOnboarding(name); 
      await refreshProgress(); 
      setView('dashboard'); 
  };
  
  const handleLevelSelect = (level: ProficiencyLevel) => {
      setActiveLevel(level);
      // Standard routing for non-blitz modes
      if (levelsMode === 'learn') {
          setView('learn_daily');
      } else {
          setView('level_browser');
      }
  };

  const handleLogout = async () => {
      // Explicitly set hasSeenOnboarding to false so UI and Data are in sync
      await logoutUser();
      // Refresh local state to reflect this change
      await refreshProgress();
      setView('onboarding');
  };

  const handleGoToPremium = () => {
      setScrollToPremium(true);
      setView('profile');
  };

  const handleTabChange = (target: any) => {
      setScrollToPremium(false); // Reset scroll trigger when manually navigating
      setView(target);
  };

  if (!progress) return <div className="min-h-screen flex items-center justify-center bg-slate-50"><Loader2 className="w-8 h-8 animate-spin text-violet-600"/></div>;

  const TabButton = ({ target, icon: Icon, label, customAction }: { target: any, icon: any, label: string, customAction?: () => void }) => {
      const isActive = view === target;
      return (
          <button 
            onClick={() => { 
                triggerHaptic('selection'); 
                if (customAction) customAction();
                handleTabChange(target); 
            }} 
            className={`flex flex-col items-center justify-center w-full h-full transition-colors duration-200 ${isActive ? 'text-violet-600 dark:text-violet-400' : 'text-slate-400 dark:text-slate-500'}`}
          >
              <Icon className={`w-6 h-6 mb-1 ${isActive ? 'fill-violet-100 stroke-violet-600 dark:fill-violet-900 dark:stroke-violet-400' : 'stroke-current'}`} strokeWidth={isActive ? 2.5 : 2} />
              <span className={`text-[10px] font-bold ${isActive ? 'text-violet-700 dark:text-violet-300' : 'text-slate-400 dark:text-slate-500'}`}>{label}</span>
          </button>
      );
  }

  // Full Screen Game Mode Check
  const isFullScreen = view === 'blitz_game';

  return (
    // DARK MODE WRAPPER
    // If progress.darkMode is true, add 'dark' class to outer div
    <div className={progress.darkMode ? 'dark' : ''}>
        <div className={`max-w-md mx-auto h-[100dvh] ${isFullScreen ? 'bg-slate-900' : 'bg-slate-50 dark:bg-slate-950'} flex flex-col font-sans relative shadow-2xl md:shadow-none overflow-hidden transition-colors duration-300`}>
            
            {/* Reward Overlay Layer */}
            <RewardOverlay type={reward} onClose={() => setReward(null)} />

            <div className={`flex-1 overflow-y-auto no-scrollbar relative z-10 ${!isFullScreen ? 'pb-24' : ''}`}>
                {view === 'onboarding' && <LandingPage onComplete={finishOnboarding} />}
                
                {view === 'dashboard' && (
                    <Dashboard 
                        progress={progress} 
                        setViewState={setView} 
                        onStartDaily={() => { 
                            setLevelsMode('learn'); 
                            setView('levels'); 
                        }} 
                        onStartReview={() => setView('learn_review')} 
                        onUpdate={refreshProgress} 
                    />
                )}

                {view === 'learn_daily' && (
                    <LearningSession 
                        mode="daily" 
                        level={activeLevel || ProficiencyLevel.A1} 
                        progress={progress} 
                        onComplete={() => { refreshProgress(); setView('dashboard'); }} 
                        onBuyPremium={handleGoToPremium}
                    />
                )}
                
                {view === 'learn_review' && (
                    <LearningSession 
                        mode="review" 
                        progress={progress} 
                        onComplete={() => { refreshProgress(); setView('dashboard'); }} 
                        onBuyPremium={handleGoToPremium}
                    />
                )}
                
                {/* Blitz Intro: Direct Routing to Game */}
                {view === 'blitz_intro' && (
                    <LevelsScreen 
                        progress={progress} 
                        mode="blitz" 
                        onBack={() => setView('dashboard')} 
                        onSelectLevel={(lvl) => {
                            setActiveLevel(lvl);
                            setView('blitz_game'); 
                        }} 
                    />
                )}
                
                {view === 'blitz_game' && <BlitzGame level={activeLevel || ProficiencyLevel.A1} progress={progress} onClose={() => { refreshProgress(); setView('dashboard'); }} />}
                
                {view === 'shop' && (
                    <ShopView 
                        progress={progress} 
                        onBack={() => setView('dashboard')} 
                        onUpdate={refreshProgress} 
                        onShowReward={(type) => setReward(type)}
                    />
                )}

                {view === 'levels' && (
                    <LevelsScreen 
                        progress={progress} 
                        mode={levelsMode as 'learn' | 'browse'}
                        onBack={() => setView('dashboard')} 
                        onSelectLevel={handleLevelSelect} 
                    />
                )}
                
                {view === 'level_browser' && <LevelBrowser level={activeLevel || ProficiencyLevel.A1} progress={progress} onBack={() => { setLevelsMode('browse'); setView('levels'); }} onUpdate={refreshProgress} />}
                {view === 'dictionary' && <DictionaryView progress={progress} onBack={() => setView('dashboard')} onUpdate={refreshProgress} />}
                
                {view === 'profile' && (
                    <ProfileView 
                        progress={progress} 
                        onUpdate={refreshProgress} 
                        onLogout={handleLogout} 
                        scrollToPremium={scrollToPremium}
                        onShowReward={(type) => setReward(type)}
                    />
                )}
                
                {view === 'progress_stats' && <ProgressStatsView progress={progress} onBack={() => setView('dashboard')} />}
                {view === 'achievements' && <AchievementsView progress={progress} onBack={() => setView('dashboard')} />} 
            </div>
            
            {/* Navigation Bar - Clean, sticky, glassmorphism without heavy borders */}
            {!isFullScreen && ['dashboard', 'levels', 'dictionary', 'profile', 'progress_stats', 'shop', 'achievements', 'level_browser'].includes(view as any) && (
                <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto z-50">
                    <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-t border-slate-200/60 dark:border-slate-800 pb-safe transition-colors duration-300">
                        <div className="flex justify-around items-center h-16 px-1">
                            <TabButton target="dashboard" icon={LayoutGrid} label="Главная" />
                            <TabButton 
                                target="levels" 
                                icon={Layers} 
                                label="Уровни" 
                                customAction={() => setLevelsMode('browse')}
                            />
                            <TabButton target="progress_stats" icon={BarChart3} label="Прогресс" />
                            <TabButton target="dictionary" icon={Library} label="Словарь" />
                            <TabButton target="profile" icon={UserIcon} label="Профиль" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>
  );
};

export default App;
