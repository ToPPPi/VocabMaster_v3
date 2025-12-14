import React, { Component, ErrorInfo, ReactNode } from 'react';
import { TriangleAlert, RefreshCw, Copy, Check } from 'lucide-react';
import { exportUserData } from '../services/storageService';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  copied: boolean;
  backupCode: string | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    copied: false,
    backupCode: null
  };

  public static getDerivedStateFromError(error: Error): Partial<State> {
    return { hasError: true, error, copied: false, backupCode: null };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  handleCopyBackup = async () => {
    try {
        const code = await exportUserData();
        if (code) {
             // Safe Clipboard Write
             if (navigator.clipboard && window.isSecureContext) {
                 await navigator.clipboard.writeText(code);
                 this.setState({ copied: true, backupCode: code });
                 setTimeout(() => this.setState({ copied: false }), 3000);
             } else {
                 // Fallback for insecure contexts or older browsers
                 this.setState({ backupCode: code });
                 alert("Не удалось скопировать автоматически (браузер запретил). Код показан ниже.");
             }
        } else {
            alert("Не удалось извлечь данные. Попробуйте перезагрузить страницу.");
        }
    } catch (e) {
        console.error(e);
        alert("Ошибка при создании резервной копии.");
    }
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center font-sans">
          <div className="w-24 h-24 bg-rose-100 rounded-3xl flex items-center justify-center mb-6 shadow-sm animate-bounce">
            <TriangleAlert className="w-12 h-12 text-rose-500" />
          </div>
          <h1 className="text-3xl font-black text-slate-900 mb-2">Ой, ошибка!</h1>
          <p className="text-slate-500 mb-8 max-w-xs text-sm leading-relaxed">
            Произошла критическая ошибка. Пожалуйста, перезагрузите приложение. Если ошибка повторяется, сохраните резервную копию.
          </p>
          
          <div className="w-full max-w-xs space-y-3">
            <button 
              onClick={this.handleReload}
              className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-xl shadow-slate-200 active:scale-95 transition-transform"
            >
              <RefreshCw className="w-5 h-5" />
              Перезагрузить
            </button>
            
            <button 
              onClick={this.handleCopyBackup}
              className={`w-full py-4 border-2 rounded-2xl font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform ${this.state.copied ? 'bg-emerald-50 border-emerald-200 text-emerald-600' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}
            >
              {this.state.copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
              {this.state.copied ? 'Код скопирован!' : 'Скопировать прогресс'}
            </button>
          </div>
          
          {this.state.backupCode && (
              <div className="mt-4 w-full max-w-xs">
                  <p className="text-[10px] text-slate-400 mb-1">
                      Ваш код восстановления (сохраните его):
                  </p>
                  <textarea 
                    readOnly 
                    className="w-full h-24 p-2 text-[10px] font-mono bg-slate-100 rounded-xl border border-slate-200 resize-none focus:outline-none"
                    value={this.state.backupCode}
                    onClick={(e) => (e.target as HTMLTextAreaElement).select()}
                  />
              </div>
          )}
          
          <div className="mt-8 p-4 bg-slate-200/50 rounded-xl text-left w-full max-w-sm overflow-hidden border border-slate-200">
             <p className="text-[10px] text-slate-400 font-mono mb-1 uppercase font-bold">Техническая информация:</p>
             <code className="text-[10px] text-slate-600 font-mono break-all block leading-tight">
                {this.state.error?.message || 'Unknown Error'}
             </code>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}