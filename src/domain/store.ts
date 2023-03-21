// import redux and persist plugins
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'reduxjs-toolkit-persist';
import storage from 'reduxjs-toolkit-persist/lib/storage';

// import theme reducers
import { authReducer, AuthState } from '@/domain/reducers/auth';
import { scrollspyReducer } from '@/ui/admin';
import layoutReducer from '@/ui/admin/layout/layoutReducer';
import menuReducer from '@/ui/admin/layout/nav/main-menu/menuReducer';
import settingsReducer from '@/ui/admin/settings/settingsReducer';
// import persist key
import { REDUX_PERSIST_KEY } from '@/ui/admin/uiConfig';
import { langReducer, LangState } from '@/ui/lang';

export interface State {
    auth: AuthState;
    lang: LangState;
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
