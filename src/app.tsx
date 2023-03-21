import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'reduxjs-toolkit-persist/integration/react';

import './app.css';

import { persistedStore, store } from '@/domain';
import { Pages } from '@/pages';
import { LangProvider } from '@/ui/lang';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            refetchOnWindowFocus: false
        }
    }
});

export function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistedStore}>
                <QueryClientProvider client={queryClient}>
                    <LangProvider>
                        <Pages />
                    </LangProvider>
                </QueryClientProvider>
            </PersistGate>
        </Provider>
    );
}

export const runApp = () => {
    const rootElement = window.document.getElementById('root');
    if (!rootElement) {
        throw new Error('Root element not found!');
    }

    const root = ReactDOMClient.createRoot(rootElement);

    root.render(<App />);
};