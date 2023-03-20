// import redux and persist plugins
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'reduxjs-toolkit-persist';
import storage from 'reduxjs-toolkit-persist/lib/storage';

// import theme reducers
import { authReducer, AuthState } from '@/app/reducers/auth';
import scrollspyReducer from '@/ui/admin/components/display/scrollspy/scrollspySlice';
import layoutReducer from '@/ui/admin/layout/layoutSlice';
import menuReducer from '@/ui/admin/layout/nav/main-menu/menuSlice';
import settingsReducer from '@/ui/admin/settings/settingsReducer';
// import persist key
import { REDUX_PERSIST_KEY } from '@/ui/admin/uiConfig.js';
import langReducer from '@/ui/lang/langReducer';

export interface State {
  auth: AuthState;
}

const persistConfig = {
  key: REDUX_PERSIST_KEY,
  storage,
  whitelist: ['menu', 'settings', 'lang'],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    settings: settingsReducer,
    layout: layoutReducer,
    lang: langReducer,
    menu: menuReducer,
    scrollspy: scrollspyReducer,
    auth: authReducer,
  })
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistedStore = persistStore(store);
