
import { UserProgress } from '../../types';
import { getUserProgress, saveUserProgress, getSecureNow } from './core';

// --- PAYMENT CONFIGURATION ---
// Safe access to import.meta.env
const IS_DEV_ENV = (import.meta as any).env?.DEV || false; 

// Helper to check if premium is active
export const isUserPremium = (progress: UserProgress): boolean => {
    if (progress.premiumStatus) return true; // Lifetime or Legacy
    if (progress.premiumExpiration && progress.premiumExpiration > getSecureNow()) return true; // Active Subscription
    return false;
};

export const buyPremium = async (plan: 'month' | 'year' | 'lifetime'): Promise<boolean> => {
    const tg = window.Telegram?.WebApp;
    
    // SECURITY FIX: 
    // We strictly separate "Dev Environment" from "Production Web Browser".
    // If usage is outside Telegram AND in Production (real website), we BLOCK payments.
    
    const isTelegramAvailable = !!tg?.initData;

    // 1. Production Web Browser (Security Block)
    if (!isTelegramAvailable && !IS_DEV_ENV) {
        alert("Оплата доступна только в приложении Telegram. Пожалуйста, перейдите в бота @VocabMasterBot.");
        // Optional: Redirect user
        window.open('https://t.me/VocabMasterBot', '_blank');
        return false;
    }

    // 2. Dev Simulation (Localhost Only)
    if (!isTelegramAvailable && IS_DEV_ENV) {
        console.warn(`[DEV] Payment Sim: ${plan}`);
        await new Promise(resolve => setTimeout(resolve, 800));
        const confirm = window.confirm(`[DEV MODE] Симуляция: Купить ${plan}?`);
        if (confirm) {
            await activatePremium(plan);
            return true;
        }
        return false;
    }

    // 3. Real Payment Flow (Telegram)
    try {
        const response = await fetch('/api/create-invoice', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ plan })
        }); 
        
        if (!response.ok) throw new Error(`Server error: ${response.status}`);

        const data = await response.json();

        if (data.invoiceLink) {
            return new Promise((resolve) => {
                tg.openInvoice(data.invoiceLink, async (status) => {
                    if (status === 'paid') {
                        await activatePremium(plan);
                        resolve(true);
                    } else {
                        resolve(false);
                    }
                });
            });
        } else {
            alert("Ошибка создания счета. Проверьте консоль.");
            return false;
        }
    } catch (e) {
        console.error("Payment API Error", e);
        alert("Ошибка соединения с сервером платежей.");
        return false;
    }
};

const activatePremium = async (plan: 'month' | 'year' | 'lifetime') => {
    const progress = await getUserProgress();
    const now = getSecureNow();

    if (plan === 'lifetime') {
        progress.premiumStatus = true;
        progress.premiumExpiration = null; // Clear expiration as it's lifetime
    } else {
        const duration = plan === 'year' 
            ? 365 * 24 * 60 * 60 * 1000 
            : 30 * 24 * 60 * 60 * 1000;
        
        // STACKING LOGIC:
        // If user has active premium, add time to the EXISTING expiration date.
        // If expired or new, start from NOW.
        let currentExpiration = progress.premiumExpiration || 0;
        
        // If premium expired in the past, reset start time to now
        if (currentExpiration < now) {
            currentExpiration = now;
        }

        progress.premiumExpiration = currentExpiration + duration;
        // Ensure status is false so we rely on expiration date for subscriptions
        progress.premiumStatus = false; 
    }
    
    // Remove locks immediately
    progress.nextSessionUnlockTime = undefined;
    
    await saveUserProgress(progress);
};

export const togglePremium = async (forceState?: boolean): Promise<UserProgress> => {
    // Legacy dev helper for testing
    const progress = await getUserProgress();
    if (forceState !== undefined) {
        progress.premiumStatus = forceState;
        progress.premiumExpiration = forceState ? null : null;
    } else {
        const isActive = isUserPremium(progress);
        if (isActive) {
            progress.premiumStatus = false;
            progress.premiumExpiration = null;
        } else {
            // Default toggle gives 30 days
            progress.premiumExpiration = getSecureNow() + (30 * 24 * 60 * 60 * 1000);
            progress.premiumStatus = false;
        }
    }
    await saveUserProgress(progress);
    return progress;
};

// --- PROMO CODES (MANUAL GRANTING) ---
// YOU CAN EDIT THIS LIST TO ADD NEW CODES
const VALID_PROMO_CODES: Record<string, 'month' | 'year' | 'lifetime'> = {
    'VOCAB-START': 'month',      // Public promo
    'ADMIN-GRANT-30': 'month',   // Support code
    'ADMIN-GRANT-365': 'year',   // Support code
    'VOCAB-MASTER-KEY': 'lifetime' // VIP
};

export const redeemPromoCode = async (code: string): Promise<{success: boolean, message: string}> => {
    const cleanCode = code.trim().toUpperCase();
    const plan = VALID_PROMO_CODES[cleanCode];

    if (!plan) {
        return { success: false, message: "Неверный промокод" };
    }

    const progress = await getUserProgress();
    
    // Initialize array if missing (migration)
    if (!progress.usedPromoCodes) progress.usedPromoCodes = [];

    // Check if used
    if (progress.usedPromoCodes.includes(cleanCode)) {
        return { success: false, message: "Код уже был использован вами" };
    }

    // Activate
    await activatePremium(plan);
    
    // Mark as used
    progress.usedPromoCodes.push(cleanCode);
    await saveUserProgress(progress);

    return { success: true, message: `Код принят! Активирован план: ${plan.toUpperCase()}` };
};

export const addCoins = async (amount: number) => {
    const progress = await getUserProgress();
    progress.wallet.coins += amount;
    await saveUserProgress(progress);
    return progress;
};

export const spendCoins = async (amount: number): Promise<boolean> => {
    const progress = await getUserProgress();
    if (progress.wallet.coins >= amount) {
        progress.wallet.coins -= amount;
        await saveUserProgress(progress);
        return true;
    }
    return false;
};

export const buyItem = async (itemKey: keyof UserProgress['inventory'], price: number): Promise<boolean> => {
    const success = await spendCoins(price);
    if (success) {
        const progress = await getUserProgress();
        progress.inventory[itemKey] += 1;
        await saveUserProgress(progress);
        return true;
    }
    return false;
};

export const consumeItem = async (itemKey: keyof UserProgress['inventory']): Promise<boolean> => {
    const progress = await getUserProgress();
    if (progress.inventory[itemKey] > 0) {
        progress.inventory[itemKey] -= 1;
        await saveUserProgress(progress);
        return true;
    }
    return false;
};

export const checkAIUsageLimit = async (): Promise<boolean> => {
    const progress = await getUserProgress();
    const isPremium = isUserPremium(progress);
    const limit = isPremium ? 50 : 5;
    return progress.aiGenerationsToday < limit;
};

export const incrementAIUsage = async (): Promise<boolean> => {
    const progress = await getUserProgress();
    const isPremium = isUserPremium(progress);
    const limit = isPremium ? 50 : 5;
    if (progress.aiGenerationsToday >= limit) {
        return false;
    }
    progress.aiGenerationsToday += 1;
    await saveUserProgress(progress);
    return true;
};
