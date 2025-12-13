
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './src/App';
import { ErrorBoundary } from './src/components/ErrorBoundary';

// 1. Unregister Service Workers (Fixes stale cache issues causing infinite loops)
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    registrations.forEach((registration) => {
      console.log('Unregistering SW:', registration);
      registration.unregister();
    });
  }).catch(e => console.warn('SW Cleanup failed:', e));
}

// 2. Render App
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error("Root element not found");

const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
