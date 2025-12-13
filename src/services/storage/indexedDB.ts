
import { UserProgress } from '../../types';

const DB_NAME = 'VocabMaster_LocalDB';
const DB_VERSION = 1;
const STORE_NAME = 'user_data';
const KEY_PROGRESS = 'main_progress';

// Helper to open DB
const openDB = (): Promise<IDBDatabase> => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);

        request.onerror = () => reject("Error opening IndexedDB");

        request.onsuccess = (event) => {
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
        const db = await openDB();
        return new Promise((resolve, reject) => {
            const tx = db.transaction([STORE_NAME], 'readwrite');
            const store = tx.objectStore(STORE_NAME);
            const request = store.put(data, KEY_PROGRESS);

            request.onsuccess = () => resolve();
            request.onerror = () => reject("Error saving to IndexedDB");
        });
    },

    load: async (): Promise<UserProgress | null> => {
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
    },

    clear: async (): Promise<void> => {
        const db = await openDB();
        return new Promise((resolve, reject) => {
            const tx = db.transaction([STORE_NAME], 'readwrite');
            const store = tx.objectStore(STORE_NAME);
            const request = store.clear();
            request.onsuccess = () => resolve();
            request.onerror = () => reject("Error clearing IndexedDB");
        });
    }
};
