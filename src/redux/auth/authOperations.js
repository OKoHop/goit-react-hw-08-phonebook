import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const register = createAsyncThunk('auth/registration', async (userData, thunkAPI) => {
    try {
        const { data } = await axios.post('/users/signup', userData);
        return { data };
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
});

export const logIn = createAsyncThunk('auth/login', async (userData, thunkAPI) => {
    try {
        const { data } = await axios.post('/users/login', userData);
        return { data };
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
});

export const logOut = createAsyncThunk('auth/logout', async (userData, thunkAPI) => {
    try {
        const { data } = await axios.post('/users/logout', userData);
        return { data }
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
});
