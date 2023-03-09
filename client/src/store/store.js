import { configureStore } from "@reduxjs/toolkit";
import { users } from "./services/userService";
import { products } from "./services/productService";
import { categories } from "./services/categoryService";

export const store = configureStore({
    reducer: {
        [users.reducerPath]: users.reducer,
        [products.reducerPath]: products.reducer,
        [categories.reducerPath]: categories.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(users.middleware)
            .concat(products.middleware)
            .concat(categories.middleware),
});

export default store;
