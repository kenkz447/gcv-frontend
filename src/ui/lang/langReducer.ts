import { createSlice } from '@reduxjs/toolkit';

export const languages = [
  { code: 'EN', locale: 'en-US', direction: 'ltr' },
  { code: 'ES', locale: 'es-ES', direction: 'ltr' },
  { code: 'DE', locale: 'de-DE', direction: 'ltr' },
];
const navigatorLang = (typeof navigator !== 'undefined') && ((navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage);

const findOrDefault = (key: string) => {
  return languages.find((x) => x.locale === key || x.code === key) || languages[0];
};

const initialState = {
  languages,
  currentLang: findOrDefault(navigatorLang),
};

const langSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    changeLang(state, action) {
      state.currentLang = findOrDefault(action.payload);
    },
  },
});
export const { changeLang } = langSlice.actions;
export const langReducer = langSlice.reducer;

export type LangState = typeof initialState;