
import React from 'react';
import { Brain, ArrowRight, CheckCircle2, Zap, Crown, Send, Mail, TrendingUp, BookOpen, Target } from 'lucide-react';
import { triggerHaptic, shareApp } from '../utils/uiHelpers';

interface LandingPageProps {
    onComplete: (name: string) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onComplete }) => {
  const handleStart = () => {
      triggerHaptic('medium');
      onComplete("User"); 
  };

  const openChannel = () => {
      if (window.Telegram?.WebApp) {
          window.Telegram.WebApp.openTelegramLink('https://t.me/vocabmaster_news'); 
      } else {
          window.open('https://t.me/vocabmaster_news', '_blank');
      }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans overflow-y-auto no-scrollbar relative flex flex-col">
        {/* Background Gradients */}
        <div className="fixed top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-violet-900/40 to-transparent pointer-events-none" />
        <div className="fixed -top-[20%] -right-[20%] w-[300px] h-[300px] bg-fuchsia-600/30 rounded-full blur-[100px] pointer-events-none" />
        <div className="fixed top-[40%] -left-[20%] w-[250px] h-[250px] bg-violet-600/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="flex-1">
            {/* --- HERO SECTION --- */}
            <div className="relative z-10 px-6 pt-12 pb-10 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6 animate-fade-in">
                    <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-bold tracking-wide uppercase text-emerald-300">Научный подход</span>
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 tracking-tight">
                    Преодолейте <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-white">
                        Плато Среднего Уровня
                    </span>
                </h1>
                
                <p className="text-slate-400 text-lg mb-8 max-w-xs mx-auto leading-relaxed">
                    Большинство застревают на 3,000 слов (95% понимания). Мы дадим вам <b>10,000 слов</b> для полной свободы (98% покрытия).
                </p>

                <button 
                    onClick={handleStart}
                    className="w-full max-w-sm mx-auto py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white rounded-2xl font-bold text-lg shadow-xl shadow-violet-900/50 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                >
                    Начать обучение <ArrowRight className="w-5 h-5" />
                </button>
            </div>

            {/* --- STATS SECTION (Math of Vocabulary) --- */}
            <div className="px-4 mb-16 relative z-10">
                <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-3 rounded-2xl">
                        <div className="text-xl font-bold text-slate-400">3k</div>
                        <div className="text-[9px] text-slate-500 uppercase font-bold mt-1">Выживание</div>
                        <div className="text-[10px] text-emerald-400 font-bold">95%</div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-3 rounded-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-violet-500/10"></div>
                        <div className="text-xl font-bold text-white">10k</div>
                        <div className="text-[9px] text-slate-300 uppercase font-bold mt-1">Свобода</div>
                        <div className="text-[10px] text-fuchsia-400 font-bold">98%</div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-3 rounded-2xl">
                        <div className="text-xl font-bold text-emerald-400">C2</div>
                        <div className="text-[9px] text-slate-500 uppercase font-bold mt-1">Уровень</div>
                        <div className="text-[10px] text-emerald-400 font-bold">Profi</div>
                    </div>
                </div>
            </div>

            {/* --- FEATURES SECTION --- */}
            <div className="px-6 mb-16 relative z-10">
                <h2 className="text-2xl font-bold mb-6 text-center">Математика Обучения</h2>
                
                <div className="space-y-4">
                    <div className="bg-slate-800/50 border border-slate-700 p-5 rounded-3xl flex items-start gap-4">
                        <div className="w-12 h-12 bg-rose-500/20 rounded-xl flex items-center justify-center text-rose-400 shrink-0">
                            <Brain className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-1">Только актуальная лексика</h3>
                            <p className="text-sm text-slate-400 leading-snug">Хватит тратить время на редкие существительные. Мы учим абстрактным понятиям (maintenance, implication), на которых строится реальная речь.</p>
                        </div>
                    </div>

                    <div className="bg-slate-800/50 border border-slate-700 p-5 rounded-3xl flex items-start gap-4">
                        <div className="w-12 h-12 bg-sky-500/20 rounded-xl flex items-center justify-center text-sky-400 shrink-0">
                            <TrendingUp className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-1">Эффект 98%</h3>
                            <p className="text-sm text-slate-400 leading-snug">Разница между 95% и 98% покрытия текста - это разница между мучительным переводом со словарем и чтением The Guardian за кофе.</p>
                        </div>
                    </div>

                    <div className="bg-slate-800/50 border border-slate-700 p-5 rounded-3xl flex items-start gap-4">
                        <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center text-amber-400 shrink-0">
                            <BookOpen className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg mb-1">Личный ИИ-Тьютор</h3>
                            <p className="text-sm text-slate-400 leading-snug">Мгновенно получайте объяснения нюансов, синонимов и мнемотехнику, словно занимаетесь с персональным репетитором.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- PRICING PREVIEW --- */}
            <div className="px-6 mb-12 relative z-10">
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-3xl p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-yellow-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-bl-xl">ИНВЕСТИЦИЯ</div>
                    <div className="flex items-center gap-2 mb-4">
                        <Crown className="w-6 h-6 text-yellow-400" />
                        <h3 className="text-xl font-bold text-white">Premium Доступ</h3>
                    </div>
                    <ul className="space-y-3 mb-6">
                        <li className="flex items-center gap-3 text-sm text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 
                            <span>Нет ограничений слов/день</span>
                        </li>
                        <li className="flex items-center gap-3 text-sm text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 
                            <span>Доступ к <b>10,000 слов</b> (B2-C2)</span>
                        </li>
                        <li className="flex items-center gap-3 text-sm text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 
                            <span>Продвинутый алгоритм (FSRS)</span>
                        </li>
                        <li className="flex items-center gap-3 text-sm text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 
                            <span>ИИ тьютор - 50 разборов/день</span>
                        </li>
                    </ul>
                    <div className="text-center bg-white/5 rounded-xl p-3 border border-white/5">
                        <span className="text-slate-400 text-xs uppercase font-bold block mb-1">Цена свободы общения</span>
                        <div className="flex justify-center items-baseline gap-2">
                            <span className="text-2xl font-bold text-white">150 ⭐️</span>
                            <span className="text-slate-500 text-xs"> (≈299₽)</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- FINAL CTA SECTION --- */}
            <div className="px-6 mb-16 relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4 backdrop-blur-sm border border-white/20">
                     <Target className="w-8 h-8 text-fuchsia-400" />
                </div>
                <h2 className="text-2xl font-bold mb-3 text-white">Цель: Native Speaker</h2>
                <p className="text-slate-400 mb-6 text-sm max-w-xs mx-auto">
                    Перестаньте быть "вечным студентом". Начните понимать фильмы и книги в оригинале.
                </p>
                <button
                    onClick={handleStart}
                    className="w-full py-4 bg-white text-violet-900 rounded-2xl font-bold text-lg shadow-xl shadow-white/10 active:scale-[0.98] flex items-center justify-center gap-2 transition-transform hover:bg-slate-100"
                >
                    Начать путь к C2 <ArrowRight className="w-5 h-5" />
                </button>
            </div>
        </div>

        {/* --- FOOTER --- */}
        <div className="bg-slate-950/50 py-8 text-center text-slate-500 text-xs relative z-10">
            <div className="flex justify-center gap-6 mb-4">
                <button onClick={() => shareApp()} className="hover:text-violet-400 transition-colors flex items-center gap-1">
                    <Send className="w-4 h-4"/> Поделиться
                </button>
                <button onClick={() => openChannel()} className="hover:text-violet-400 transition-colors flex items-center gap-1">
                    <Mail className="w-4 h-4"/> Канал
                </button>
            </div>
            <p>&copy; 2025 VocabMaster. All rights reserved.</p>
        </div>
    </div>
  );
};
