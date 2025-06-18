import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "./auth/authslice"

import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import { authslice } from "./auth/authslice";

const persistConfig = {
  key: "root",
  storage,
};
const rootReducer = combineReducers({ auth : authslice.reducer });
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
