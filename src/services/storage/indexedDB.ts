
import { UserProgress } from '../../types';

const DB_NAME = 'VocabMaster_LocalDB';
const DB_VERSION = 1;
const STORE_NAME = 'user_data';
const KEY_PROGRESS = 'main_progress';

// Helper to open DB with Timeout
// REDUCED TO 1500ms (1.5s) to fail fast on stuck Android WebViews
const openDB = (): Promise<IDBDatabase> => {
    return new Promise((resolve, reject) => {
        // 1. Setup Timeout
        const timeoutId = setTimeout(() => {
            reject(new Error("IDB_TIMEOUT: Database took too long to open"));
        }, 1500); 

        // 2. Attempt Open
        let request: IDBOpenDBRequest;
        try {
            request = indexedDB.open(DB_NAME, DB_VERSION);
        } catch (e) {
            clearTimeout(timeoutId);
            reject(e);
            return;
        }

        request.onerror = (event) => {
            clearTimeout(timeoutId);
            console.warn("IDB Open Error:", (event.target as any).error);
            reject("Error opening IndexedDB");
        };

        request.onsuccess = (event) => {
            clearTimeout(timeoutId);
            resolve((event.target as IDBOpenDBRequest).result);
        };

        request.onupgradeneeded = (event) => {
            const db = (event.target as IDBOpenDBRequest).result;
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME);
            }
        };
    });
};

export const idbService = {
    save: async (data: UserProgress): Promise<void> => {
        try {
            const db = await openDB();
            return new Promise((resolve, reject) => {
                const tx = db.transaction([STORE_NAME], 'readwrite');
                const store = tx.objectStore(STORE_NAME);
                const request = store.put(data, KEY_PROGRESS);

                request.onsuccess = () => resolve();
                request.onerror = () => reject("Error saving to IndexedDB");
            });
        } catch (e) {
            console.warn("Save skipped due to DB error:", e);
            // Non-blocking failure for saving
            return;
        }
    },

    load: async (): Promise<UserProgress | null> => {
        try {
            const db = await openDB();
            return new Promise((resolve, reject) => {
                const tx = db.transaction([STORE_NAME], 'readonly');
                const store = tx.objectStore(STORE_NAME);
                const request = store.get(KEY_PROGRESS);

                request.onsuccess = () => {
                    resolve(request.result || null);
                };
                request.onerror = () => reject("Error loading from IndexedDB");
            });
        } catch (e) {
            console.error("Load failed or timed out:", e);
            return null; // Return null to trigger fallback to initial state
        }
    },

    clear: async (): Promise<void> => {
        try {
            const db = await openDB();
            return new Promise((resolve, reject) => {
                const tx = db.transaction([STORE_NAME], 'readwrite');
                const store = tx.objectStore(STORE_NAME);
                const request = store.clear();
                request.onsuccess = () => resolve();
                request.onerror = () => reject("Error clearing IndexedDB");
            });
        } catch (e) {
            console.warn("Clear failed:", e);
        }
    }
};
