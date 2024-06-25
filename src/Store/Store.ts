// src/Store/index.js
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import adminReducer from "./adminSlice";

const Store = configureStore({
  reducer: {
    admin: adminReducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;

export default Store;
