import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

const scrollspySlice = createSlice({
    name: 'scrollspy',
    initialState,
    reducers: {
        scrollspySetItems(state, action) {
            state.items = action.payload;
        },
    },
});
export const { scrollspySetItems } = scrollspySlice.actions;
export const scrollspyReducer = scrollspySlice.reducer;

export default scrollspyReducer;
