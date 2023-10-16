import { logIn, logOut, refreshPage, register } from "./authOperations";
import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLogged: false,
};

const notifyOk = () => toast.success('Done!');
const notifyErr = () => toast.error('Incorrect email or password');

const authSlice = createSlice(
    {
        name: 'auth',
        initialState,
        extraReducers: builder => {
            builder.addCase(register.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLogged = true;
                notifyOk();
            }).addCase(register.rejected, (state, _) => {
                state.token = null;
                toast.error('Sorry something is wrong :(');
            }).addCase(logIn.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLogged = true;
                notifyOk();
            }).addCase(logIn.rejected, () => {
                notifyErr();
            }).addCase(logOut.fulfilled, (state, action) => {
                state.user = initialState.user;
                state.token = null;
                state.isLogged = false;
                state.contacts = [];
                notifyOk();
            }).addCase(refreshPage.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLogged = true;
            })
        }
    }
)

export const authReducers = authSlice.reducer;