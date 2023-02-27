import { configureStore } from "@reduxjs/toolkit";
import { users } from "./services/userService";

export const store = configureStore({
  reducer: {
    [users.reducerPath]: users.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(users.middleware),
});
