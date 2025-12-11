
import { UserProgress } from '../../types';
import { getUserProgress, saveUserProgress, getSecureNow } from './core';

// --- PAYMENT CONFIGURATION ---
const IS_DEV_SIMULATION = import.meta.env.DEV; 

// Helper to check if premium is active
export const isUserPremium = (progress: UserProgress): boolean => {
    if (progress.premiumStatus) return true; // Legacy Lifetime
    if (progress.premiumExpiration && progress.premiumExpiration > getSecureNow()) return true; // Active Subscription
    return false;
};

export const buyPremium = async (plan: 'month' | 'year'): Promise<boolean> => {
    const tg = window.Telegram?.WebApp;
    
    // 1. Browser/Dev Logic
    if (!tg?.initData || IS_DEV_SIMULATION) {
        console.warn(`[DEV] Payment Sim: ${plan}`);
        if (IS_DEV_SIMULATION) {
            await new Promise(resolve => setTimeout(resolve, 800));
            const confirm = window.confirm(`[DEV] Симуляция: Купить ${plan === 'year' ? 'Year' : 'Month'}?`);
            if (confirm) {
                await activatePremium(plan);
                return true;
            }
            return false;
        }
        await activatePremium(plan);
        return true;
    }

    // 2. Real Payment Flow
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

const activatePremium = async (plan: 'month' | 'year') => {
    const progress = await getUserProgress();
    const now = getSecureNow();

    const duration = plan === 'year' ? 365 * 24 * 60 * 60 * 1000 : 30 * 24 * 60 * 60 * 1000;
    
    // If already has active sub, extend it. If not, start from now.
    const currentExp = progress.premiumExpiration || now;
    progress.premiumExpiration = (currentExp > now ? currentExp : now) + duration;
    
    // Remove locks immediately
    progress.nextSessionUnlockTime = undefined;
    await saveUserProgress(progress);
};

export const togglePremium = async (forceState?: boolean): Promise<UserProgress> => {
    // Legacy dev helper, defaults to lifetime toggle
    const progress = await getUserProgress();
    if (forceState !== undefined) {
        progress.premiumStatus = forceState;
    } else {
        progress.premiumStatus = !progress.premiumStatus;
    }
    await saveUserProgress(progress);
    return progress;
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
