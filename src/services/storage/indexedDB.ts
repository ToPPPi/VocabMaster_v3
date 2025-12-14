
import { UserProgress } from '../../types';

const DB_NAME = 'VocabMasterDB';
const DB_VERSION = 2;
const STORE_NAME = 'user_progress';
const KEY_NAME = 'main_save';
const CONNECTION_TIMEOUT_MS = 2000; // 2 seconds max wait time

// Helper to get DB connection with Timeout Race Protection
const getDB = (): Promise<IDBDatabase> => {
    return new Promise((resolve, reject) => {
        if (!window.indexedDB) {
            reject(new Error('IndexedDB not supported'));
            return;
        }

        // 1. The Database Request
        const request = window.indexedDB.open(DB_NAME, DB_VERSION);
        let completed = false;

        request.onerror = (event) => {
            if (completed) return;
            completed = true;
            console.error('IndexedDB Error:', (event.target as IDBOpenDBRequest).error);
            reject((event.target as IDBOpenDBRequest).error);
        };

        request.onsuccess = (event) => {
            if (completed) return;
            completed = true;
            resolve((event.target as IDBOpenDBRequest).result);
        };

        request.onupgradeneeded = (event) => {
            const db = (event.target as IDBOpenDBRequest).result;
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME);
            }
        };

        // 2. The Timeout Safety Valve
        // If mobile WebView hangs on .open(), this ensures we don't freeze the app.
        setTimeout(() => {
            if (!completed) {
                completed = true;
                // We reject so the app falls back to LocalStorage immediately or handles error
                reject(new Error('IndexedDB Connection Timeout (Mobile Fix)'));
            }
        }, CONNECTION_TIMEOUT_MS);
    });
};

export const idbService = {
    save: async (data: UserProgress): Promise<void> => {
        try {
            const db = await getDB();
            return new Promise((resolve, reject) => {
                const transaction = db.transaction([STORE_NAME], 'readwrite');
                const store = transaction.objectStore(STORE_NAME);
                const request = store.put(data, KEY_NAME);

                request.onsuccess = () => resolve();
                request.onerror = () => reject(request.error);
            });
        } catch (e) {
            // If IDB fails/timeouts, we log but don't crash. 
            console.warn("IDB Save skipped/failed:", e);
            throw e; 
        }
    },

    load: async (): Promise<UserProgress | null> => {
        try {
            const db = await getDB();
            return new Promise((resolve, reject) => {
                const transaction = db.transaction([STORE_NAME], 'readonly');
                const store = transaction.objectStore(STORE_NAME);
                const request = store.get(KEY_NAME);

                request.onsuccess = () => {
                    resolve(request.result || null);
                };
                request.onerror = () => reject(request.error);
            });
        } catch (e) {
            console.warn("IDB Load skipped (using fallback):", e);
            return null; // Return null to trigger LocalStorage fallback in core.ts
        }
    },

    clear: async (): Promise<void> => {
        try {
            const db = await getDB();
            return new Promise((resolve, reject) => {
                const transaction = db.transaction([STORE_NAME], 'readwrite');
                const store = transaction.objectStore(STORE_NAME);
                const request = store.delete(KEY_NAME);
                request.onsuccess = () => resolve();
                request.onerror = () => reject(request.error);
            });
        } catch (e) {
            console.error(e);
        }
    },
    
    deleteDatabase: async (): Promise<void> => {
        return new Promise((resolve) => {
            const req = window.indexedDB.deleteDatabase(DB_NAME);
            req.onsuccess = () => resolve();
            req.onerror = () => resolve();
        });
    }
};
