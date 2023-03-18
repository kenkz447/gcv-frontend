import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { PersistGate } from 'reduxjs-toolkit-persist/integration/react';

import { persistedStore, store } from '@/shared';
import LangProvider from '@/ui/lang/LangProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <LangProvider>
          <Component {...pageProps} />
        </LangProvider>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
