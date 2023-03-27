import { createSlice } from '@reduxjs/toolkit';

export type FormsState = Record<string, object>;

const initialState: FormsState = {
};

const formsSlice = createSlice({
    name: 'forms',
    initialState,
    reducers: {
        setFormValues(state, action) {
            state[action.payload.formName] = action.payload.formValues;
        },
        removeFormValues(state, action) {
            delete state[action.payload.formName];
        },
    },
});

export const formsActions = formsSlice.actions;
export const formsReducer = formsSlice.reducer;