import { createSlice } from '@reduxjs/toolkit';

import { IdentityRoleDto, ProfileDto } from '@/services/backend/api';

export interface AuthState {
    readonly isLogin: boolean;
    readonly currentUser: ProfileDto | null,
    readonly currentRoles: IdentityRoleDto[] | null;
}

const initialState: AuthState = {
    isLogin: false,
    currentUser: null,
    currentRoles: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCurrentUser(state, action) {
            state.currentUser = action.payload.currentUser;
            state.currentRoles = action.payload.currentRoles;
            state.isLogin = true;
        },
    },
});

export const { setCurrentUser } = authSlice.actions;
export const authReducer = authSlice.reducer;