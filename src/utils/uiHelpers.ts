
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
    if (!text) return;

    // Strategy 1: Native Browser SpeechSynthesis (Preferred for reliability and speed)
    const playNativeTTS = () => {
        if (!('speechSynthesis' in window)) return false;

        window.speechSynthesis.cancel(); // Reset queue

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 0.9;
        
        // Improve voice quality on iOS/Android if available
        const voices = window.speechSynthesis.getVoices();
        const preferredVoice = voices.find(v => v.lang === 'en-US' && v.localService) || 
                               voices.find(v => v.lang.startsWith('en'));
        
        if (preferredVoice) utterance.voice = preferredVoice;

        window.speechSynthesis.speak(utterance);
        return true;
    };

    // Strategy 2: Network-based TTS (Fallback if native fails or is empty)
    const playNetworkAudio = () => {
        try {
            const encodedText = encodeURIComponent(text);
            const audio = new Audio(`https://translate.google.com/translate_tts?ie=UTF-8&q=${encodedText}&tl=en&client=tw-ob`);
            audio.play().catch(e => console.warn("Audio playback failed", e));
        } catch (e) {
            console.error(e);
        }
    };

    // Try Native first
    const nativeSuccess = playNativeTTS();
    
    // If native failed (or threw error silently), fallback to network
    // Note: On some browsers, getVoices() is async, so the first click might fallback, 
    // but subsequent clicks will use the loaded voices.
    if (!nativeSuccess && navigator.onLine) {
        playNetworkAudio();
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

export const shuffleArray = <T>(array: T[]): T[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
};
