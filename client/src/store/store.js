import { configureStore } from "@reduxjs/toolkit";
import { users } from "./services/userService";
import { products } from "./services/productService";
import { categories } from "./services/categoryService";
import { cart } from "./services/cartService";
import { orderProducts } from "./services/orderProductsService";

export const store = configureStore({
    reducer: {
        [users.reducerPath]: users.reducer,
        [products.reducerPath]: products.reducer,
        [categories.reducerPath]: categories.reducer,
        [cart.reducerPath]: cart.reducer,
        [orderProducts.reducerPath]: orderProducts.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(users.middleware)
            .concat(products.middleware)
            .concat(categories.middleware)
            .concat(cart.middleware)
            .concat(orderProducts.middleware),
});

export default store;
