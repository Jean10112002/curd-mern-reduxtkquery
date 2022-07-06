import { configureStore } from "@reduxjs/toolkit";
import { librosApi } from "./services/api.books";
export const store = configureStore({
    reducer: {
      [librosApi.reducerPath]: librosApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(librosApi.middleware),
  })