import { createContext, useContext, useEffect, useState } from "react";
import {
    useCreateCartMutation,
    useLazyGetCartByUserIdQuery,
    useDeleteCartByIdMutation,
    useUpdateCartByIdMutation,
    useDeleteCartByUserIdMutation,
} from "../store/services/cartService";
import { userContext } from "./UserContext";

export const cartContext = createContext();
const { Provider } = cartContext;
export const CartContext = ({ children }) => {
    const { userData } = useContext(userContext);
    const user = userData?.results;

    const [
        getCart,
        { data: cartData, error: cartError, isLoading: cartLoading },
    ] = useLazyGetCartByUserIdQuery();

    const [createCart, { data: createCartData, error: createCartError }] =
        useCreateCartMutation();

    const [deleteCart, { data: deleteCartData, error: deleteCartError }] =
        useDeleteCartByIdMutation();

    const [deleteUserCart, { data: deleteUserCartData, error: deleteUserCartError }] =
        useDeleteCartByUserIdMutation();

    const [updateCart, { data: updateCartData, error: updateCartError }] =
        useUpdateCartByIdMutation();

    useEffect(() => {
        if (user) {
            getCart();
        }
    }, [user]);

    const actions = {
        cartData,
        cartError,
        cartLoading,
        createCart,
        createCartData,
        createCartError,
        deleteCart,
        deleteCartData,
        deleteCartError,
        updateCart,
        updateCartData,
        updateCartError,
        deleteUserCart,
        deleteUserCartData,
        deleteUserCartError,
    };

    return <Provider value={actions}>{children}</Provider>;
};

export default CartContext;
