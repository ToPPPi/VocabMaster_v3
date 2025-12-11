
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

    // Cancel any currently playing speech to prevent queue build-up and ensure immediate playback
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US'; // Default to US English
    utterance.rate = 0.9;     // Slightly slower for better clarity
    utterance.pitch = 1;
    utterance.volume = 1;

    // iOS Safari sometimes requires this to be called explicitly
    window.speechSynthesis.speak(utterance);
};

export const shareApp = () => {
    const text = "Я учу английский с VocabMaster! 10,000 слов, ИИ-тьютор и интервальные повторения. Попробуй тоже!";
    const url = "https://t.me/VocabMasterBot/app"; // Replace with your actual bot link if different

    // 1. Try Native Share (Mobile)
    if (navigator.share) {
        navigator.share({
            title: 'VocabMaster',
            text: text,
            url: url,
        }).catch((error) => console.log('Error sharing', error));
    } 
    // 2. Try Telegram WebApp Share
    else if (window.Telegram?.WebApp) {
        // Option A: Share via link to specific chat
        const tgShareUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
        window.Telegram.WebApp.openTelegramLink(tgShareUrl);
    }
    // 3. Fallback: Copy to Clipboard
    else {
        navigator.clipboard.writeText(`${text} ${url}`);
        alert('Ссылка скопирована в буфер обмена!');
    }
};
