
export const triggerHaptic = (style: 'light' | 'medium' | 'heavy' | 'selection' | 'error' | 'success' | 'warning' = 'light') => {
    if (window.Telegram?.WebApp?.HapticFeedback) {
        if (style === 'selection') {
            window.Telegram.WebApp.HapticFeedback.selectionChanged();
        } else if (style === 'error' || style === 'success' || style === 'warning') {
            window.Telegram.WebApp.HapticFeedback.notificationOccurred(style);
        } else {
            window.Telegram.WebApp.HapticFeedback.impactOccurred(style);
        }
    }
};

export const speak = (text: string) => {
    if (!('speechSynthesis' in window)) return;

    // 1. Force cancel any pending speech (critical for mobile)
    window.speechSynthesis.cancel();

    // 2. Ensure voices are loaded (Android/iOS fix)
    const loadVoices = () => {
        const voices = window.speechSynthesis.getVoices();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US'; 
        utterance.rate = 0.9;
        utterance.pitch = 1;
        utterance.volume = 1;

        // Try to find a good English voice
        const enVoice = voices.find(v => v.lang === 'en-US' && !v.localService) 
                     || voices.find(v => v.lang.startsWith('en'))
                     || null;
        
        if (enVoice) {
            utterance.voice = enVoice;
        }

        window.speechSynthesis.speak(utterance);
    };

    // If voices are already loaded, speak immediately
    if (window.speechSynthesis.getVoices().length > 0) {
        loadVoices();
    } else {
        // Otherwise wait for the event
        window.speechSynthesis.onvoiceschanged = () => {
            loadVoices();
            // Remove listener to avoid multi-firing
            window.speechSynthesis.onvoiceschanged = null;
        };
    }
};

export const shareApp = () => {
    const text = "Я учу английский с VocabMaster! 10,000 слов, ИИ-тьютор и интервальные повторения. Попробуй тоже!";
    const url = "https://t.me/VocabMasterBot/app"; 

    if (navigator.share) {
        navigator.share({
            title: 'VocabMaster',
            text: text,
            url: url,
        }).catch((error) => console.log('Error sharing', error));
    } 
    else if (window.Telegram?.WebApp) {
        const tgShareUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
        window.Telegram.WebApp.openTelegramLink(tgShareUrl);
    }
    else {
        navigator.clipboard.writeText(`${text} ${url}`);
        alert('Ссылка скопирована в буфер обмена!');
    }
};
