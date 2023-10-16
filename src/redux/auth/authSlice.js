import { logIn, register } from "./authOperations";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLogged: false,
};

const authSlice = createSlice(
    {
        name: 'auth',
        initialState,
        extraReducers: builder => {
            builder.addCase(register.fulfilled, (state, action) => {
                state.user = action.payload.data.user;
                state.token = action.payload.data.token;
                state.isLogged = true;
            }).addCase(logIn.fulfilled, (state, action) => {
                state.user = action.payload.data.user;
                state.token = action.payload.data.token;
                state.isLogged = true;
            })
        }
    }
)

export const authReducers = authSlice.reducer;