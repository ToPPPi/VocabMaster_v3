
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

    // Strategy 1: Network-based TTS (More reliable in Telegram WebViews on iOS/Android)
    // using Google Translate's public TTS endpoint.
    const playNetworkAudio = () => {
        try {
            const encodedText = encodeURIComponent(text);
            const audio = new Audio(`https://translate.google.com/translate_tts?ie=UTF-8&q=${encodedText}&tl=en&client=tw-ob`);
            
            const playPromise = audio.play();
            
            if (playPromise !== undefined) {
                playPromise.catch((error) => {
                    console.warn("Audio URL playback failed, switching to native:", error);
                    playNativeTTS();
                });
            }
        } catch (e) {
            playNativeTTS();
        }
    };

    // Strategy 2: Native Browser SpeechSynthesis (Fallback)
    const playNativeTTS = () => {
        if (!('speechSynthesis' in window)) return;

        window.speechSynthesis.cancel(); // Reset queue

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 0.9;
        
        // Force voice selection for mobile quirks
        const voices = window.speechSynthesis.getVoices();
        const preferredVoice = voices.find(v => v.lang === 'en-US' && v.localService) || 
                               voices.find(v => v.lang.startsWith('en'));
        
        if (preferredVoice) utterance.voice = preferredVoice;

        // Small delay to ensure the stack is clear
        setTimeout(() => {
            window.speechSynthesis.speak(utterance);
        }, 10);
    };

    // Attempt Network first if online
    if (navigator.onLine) {
        playNetworkAudio();
    } else {
        playNativeTTS();
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
