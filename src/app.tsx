import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import merge from 'lodash/merge';
import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'reduxjs-toolkit-persist/integration/react';

import './app.scss';

import { persistedStore, store } from '@/domain';
import { Pages } from '@/pages';
import { pagesMessages } from '@/pages/_shared';
import { sharedMessages } from '@/shared';
import { LangProvider } from '@/ui/lang';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            refetchOnWindowFocus: false,
        },
    },
});

const messages = {};
merge(messages, sharedMessages);
merge(messages, pagesMessages);

export function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistedStore}>
                <QueryClientProvider client={queryClient}>
                    <LangProvider messages={messages}>
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