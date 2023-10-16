import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk('auth/registration', async (userData, thunkAPI) => {
    try {
        const { data } = await axios.post('/users/signup', userData);
        setAuthHeader(data.token);
        return { data };
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
});

export const logIn = createAsyncThunk('auth/login', async (userData, thunkAPI) => {
    try {
        const { data } = await axios.post('/users/login', userData);
        setAuthHeader(data.token);
        return { data };
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
});

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        const { data } = await axios.post('/users/logout');
        clearAuthHeader();
        return { data }
    } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
    }
});
