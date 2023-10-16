import { logIn, logOut, refreshPage, register } from "./authOperations";
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
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLogged = true;
            }).addCase(register.rejected, (state, _) => {
                state.token = null;
            }).addCase(logIn.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLogged = true;
            }).addCase(logOut.fulfilled, (state, action) => {
                state.user = initialState.user;
                state.token = null;
                state.isLogged = false;
            }).addCase(refreshPage.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLogged = true;
            })
        }
    }
)

export const authReducers = authSlice.reducer;