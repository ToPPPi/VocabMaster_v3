
import React, { useState, useEffect } from 'react';
import { Loader2, LayoutGrid, Layers, BarChart3, Library, User as UserIcon, AlertTriangle, RefreshCw, Send } from 'lucide-react';
import { ProficiencyLevel, ViewState, UserProgress } from './types';
import { initUserProgress, downloadCloudData, saveUserProgress, completeOnboarding, syncTelegramUserData, logoutUser, resetUserProgress } from './services/storageService'; 
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
import { DataManagementView } from './components/DataManagementView';
import { SyncConflictModal } from './components/SyncConflictModal'; 
import { RecoveryView } from './components/RecoveryView';

const App: React.FC = () => {
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [view, setView] = useState<ViewState | 'level_browser' | 'progress_stats'>('onboarding');
  const [activeLevel, setActiveLevel] = useState<ProficiencyLevel | null>(null);
  const [levelsMode, setLevelsMode] = useState<'learn' | 'browse' | 'blitz'>('browse');
  
  const [conflictData, setConflictData] = useState<{localDate: number, cloudDate: number} | null>(null);
  const [reward, setReward] = useState<RewardType | null>(null);
  const [scrollToPremium, setScrollToPremium] = useState(false);

  // States for Critical Errors and Environment
  const [isCriticalError, setIsCriticalError] = useState(false);
  const [isBrowserEnv, setIsBrowserEnv] = useState(false);

  useEffect(() => {
      // Check Environment
      const isTg = !!window.Telegram?.WebApp?.initData;
      // It is browser env if NOT in telegram AND NOT in development mode (localhost)
      // This allows you to test normally on localhost, but shows banner on Vercel web
      const isDev = (import.meta as any).env?.DEV;
      
      if (!isTg && !isDev) {
          setIsBrowserEnv(true);
      }

      const load = async () => {
          try {
              // 1. Init Data (Fast Boot Strategy)
              const { data, hasConflict, cloudDate, criticalError } = await initUserProgress();
              
              if (criticalError) {
                  setIsCriticalError(true);
                  return;
              }

              // 2. Render UI immediately
              if (hasConflict && cloudDate) {
                  setConflictData({ localDate: data.lastLocalUpdate, cloudDate: cloudDate });
                  setProgress(data); 
              } else {
                  setProgress(data);
                  if (data.hasSeenOnboarding) setView('dashboard');
                  else setView('onboarding');
              }

              // 3. Post-render tasks
              syncTelegramUserData().catch(console.warn);
              
              if (window.Telegram?.WebApp) {
                window.Telegram.WebApp.ready();
                window.Telegram.WebApp.expand();
                window.Telegram.WebApp.setHeaderColor('#F1F5F9'); 
                window.Telegram.WebApp.setBackgroundColor('#F1F5F9');
            }
          } catch (e) {
              console.error("Init Failed:", e);
              setIsCriticalError(true);
          }
      };
      load();
  }, []);

  const handleConflictResolve = async (useCloud: boolean) => {
      setConflictData(null);
      if (useCloud) {
          const newData = await downloadCloudData();
          if (newData) {
              setProgress(newData);
              if (newData.hasSeenOnboarding) setView('dashboard');
          }
      } else {
          if (progress) {
              await saveUserProgress(progress, true);
          }
          if (progress?.hasSeenOnboarding) setView('dashboard');
          else setView('onboarding');
      }
  };

  // Prevent Pull-to-Refresh on Mobile
  useEffect(() => {
    const handleGestureStart = (e: any) => e.preventDefault();
    document.addEventListener('gesturestart', handleGestureStart);
    return () => document.removeEventListener('gesturestart', handleGestureStart);
  }, []);

  useEffect(() => {
      const tg = window.Telegram?.WebApp;
      if (!tg) return;
      const handleBack = () => {
          if (view !== 'dashboard' && view !== 'onboarding') setView('dashboard');
      };
      if (tg.BackButton) tg.BackButton.onClick(handleBack);
      if (view !== 'dashboard' && view !== 'onboarding') tg.BackButton?.show();
      else tg.BackButton?.hide();
      return () => { if(tg.BackButton) tg.BackButton.offClick(handleBack); };
  }, [view]);

  const refreshProgress = async () => {
      const { data } = await initUserProgress();
      setProgress({ ...data });
      if(!data.hasSeenOnboarding && view !== 'onboarding') setView('onboarding');
  };

  const finishOnboarding = async (name: string) => { 
      await completeOnboarding(name); 
      await refreshProgress(); 
      setView('dashboard'); 
  };
  
  const handleLevelSelect = (level: ProficiencyLevel) => {
      setActiveLevel(level);
      if (levelsMode === 'learn') setView('learn_daily');
      else setView('level_browser');
  };

  const handleLogout = async () => {
      triggerHaptic('medium');
      try { await logoutUser(); await refreshProgress(); } 
      catch (e) { console.error("Logout failed:", e); } 
      finally { setView('onboarding'); }
  };

  const handleGoToPremium = () => { setScrollToPremium(true); setView('profile'); };
  const handleTabChange = (target: any) => { setScrollToPremium(false); setView(target); };

  // --- CRITICAL RECOVERY MODE ---
  if (isCriticalError) {
      return <RecoveryView />;
  }

  // --- LOADING STATE ---
  if (!progress) {
      return (
          <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 p-6 text-center">
              <Loader2 className="w-10 h-10 animate-spin text-violet-600 mb-6"/>
              <p className="text-slate-400 text-sm font-medium">Загрузка словаря...</p>
          </div>
      );
  }

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

  const isFullScreen = view === 'blitz_game';

  return (
    <div className={progress.darkMode ? 'dark' : ''}>
        <div className={`max-w-md mx-auto h-[100dvh] ${isFullScreen ? 'bg-slate-900' : 'bg-slate-50 dark:bg-slate-950'} flex flex-col font-sans relative shadow-2xl md:shadow-none overflow-hidden transition-colors duration-300`}>
            
            {/* WEB BROWSER WARNING BANNER */}
            {isBrowserEnv && view !== 'onboarding' && (
                <div className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-[10px] font-bold py-2 px-4 text-center relative z-50 flex justify-between items-center shadow-md animate-in slide-in-from-top duration-500">
                    <span>Вы в демо-режиме (Браузер).</span>
                    <a href="https://t.me/VocabMasterBot/app" target="_blank" rel="noopener noreferrer" className="bg-white text-violet-700 px-2 py-1 rounded-md flex items-center gap-1 hover:bg-slate-100 transition-colors">
                        <Send className="w-3 h-3" /> Открыть App
                    </a>
                </div>
            )}

            {conflictData && (
                <SyncConflictModal 
                    localDate={conflictData.localDate} 
                    cloudDate={conflictData.cloudDate}
                    onResolve={handleConflictResolve}
                />
            )}

            <RewardOverlay type={reward} onClose={() => setReward(null)} />

            <div className={`flex-1 overflow-y-auto no-scrollbar relative z-10 ${!isFullScreen ? 'pb-24' : ''}`}>
                {view === 'onboarding' && <LandingPage onComplete={finishOnboarding} />}
                
                {view === 'dashboard' && (
                    <Dashboard 
                        progress={progress} 
                        setViewState={setView} 
                        onStartDaily={() => { setLevelsMode('learn'); setView('levels'); }} 
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
                
                {view === 'blitz_intro' && (
                    <LevelsScreen 
                        progress={progress} 
                        mode="blitz" 
                        onBack={() => setView('dashboard')} 
                        onSelectLevel={(lvl) => { setActiveLevel(lvl); setView('blitz_game'); }} 
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
                        onNavigate={setView}
                    />
                )}
                
                {view === 'data_management' && (
                    <DataManagementView 
                        progress={progress}
                        onBack={() => setView('profile')}
                        onUpdate={refreshProgress}
                    />
                )}
                
                {view === 'progress_stats' && <ProgressStatsView progress={progress} onBack={() => setView('dashboard')} />}
                {view === 'achievements' && <AchievementsView progress={progress} onBack={() => setView('dashboard')} />} 
            </div>
            
            {!isFullScreen && ['dashboard', 'levels', 'dictionary', 'profile', 'progress_stats', 'shop', 'achievements', 'level_browser', 'data_management'].includes(view as any) && (
                <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto z-50">
                    <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-t border-slate-200/60 dark:border-slate-800 pb-safe transition-colors duration-300">
                        <div className="flex justify-around items-center h-16 px-1">
                            <TabButton target="dashboard" icon={LayoutGrid} label="Главная" />
                            <TabButton target="levels" icon={Layers} label="Уровни" customAction={() => setLevelsMode('browse')} />
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
