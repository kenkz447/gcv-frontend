import { LAYOUT, MENU_BEHAVIOR, MENU_PLACEMENT, NAV_COLOR, RADIUS, THEME_COLOR } from '@/ui/admin/uiConstants';

export const IS_AUTH_GUARD_ACTIVE = true;
export const SERVICE_URL = '/app';
export const USE_MULTI_LANGUAGE = true;

// For detailed information: https://github.com/nfl/react-helmet#reference-guide
export const REACT_HELMET_PROPS = {
    defaultTitle: 'Acorn Admin Template',
    titleTemplate: '%s | Acorn Admin Template',
};

export const DEFAULT_PATHS = {
    APP: '/',
    LOGIN: '/login',
    REGISTER: '/register',
    FORGOT_PASSWORD: '/forgot-password',
    RESET_PASSWORD: '/reset-password',
    USER_WELCOME: '/dashboards/default',
    NOTFOUND: '/page-not-found',
    UNAUTHORIZED: '/unauthorized',
    INVALID_ACCESS: '/invalid-access',
};

export const DEFAULT_SETTINGS = {
    MENU_PLACEMENT: MENU_PLACEMENT.Horizontal,
    MENU_BEHAVIOR: MENU_BEHAVIOR.Pinned,
    LAYOUT: LAYOUT.Boxed,
    RADIUS: RADIUS.Standard,
    COLOR: THEME_COLOR.LightGreen,
    NAV_COLOR: NAV_COLOR.Default,
    USE_SIDEBAR: false,
};

export const REDUX_PERSIST_KEY = 'starter-project';
