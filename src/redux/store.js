import { configureStore } from "@reduxjs/toolkit";
import { contactReducers, sliceFilter } from "redux/phonebook/slice";
import storage from "redux-persist/lib/storage";
import {
    persistReducer, persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from "redux-persist";
import { authReducers } from "./auth/authSlice";


const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
}

export const store = configureStore({
    reducer: {
        contacts: contactReducers,
        filter: sliceFilter.reducer,
        auth: persistReducer(authPersistConfig, authReducers)
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistore = persistStore(store);