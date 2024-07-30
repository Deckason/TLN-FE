import { configureStore } from "@reduxjs/toolkit";
import GetStartedSlice from "../store/features/GetStartedSlice";
import { api } from "../store/apiSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    getStartedForm: GetStartedSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
