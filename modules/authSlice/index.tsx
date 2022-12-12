import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

interface AuthProps {
    userName: string,
    role: string,
    token: string
}

const initialState: AuthProps = {
    userName: '',
    role: '',
    token: ''
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        updateUser: (state, action: PayloadAction<AuthProps>) => {

            state = action.payload
            Cookies.set('USER_TOKEN', action.payload.token)
        },
        signOut: (state) => {
            state = initialState
            Cookies.remove('USER_TOKEN')
        }

    },
});

export default authSlice.reducer;

export const { updateUser, signOut } = authSlice.actions;