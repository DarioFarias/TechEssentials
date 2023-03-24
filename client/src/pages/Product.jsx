import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cartContext } from "../context/CartContext";
import { userContext } from "../context/UserContext";

const Product = () => {
    const { state } = useLocation()
    const [cartProduct, setCartProduct] = useState();
    const { userData } = useContext(userContext);
    const user = userData?.results;
    const { deleteCart, createCart, cartData } = useContext(cartContext);

    useEffect(() => {
        const productInCart = cartData?.find(
            (cartProduct) => cartProduct?.idProduct === state?.id
        );
        if (productInCart) {
            setCartProduct(productInCart);
        } else {
            setCartProduct();
        }
    }, [createCart, cartData, deleteCart]);
    
    const handleClick = () => {
        if (cartProduct?.id) {
            deleteCart(cartProduct?.id);
        } else {
            createCart(body);
        }
    };

    const body = { idProduct: state.id, quantity: 1 };

    return (
        <div className="flex flex-col w-full fkex-grow items-center justify-between ">
            <div className="flex flex-col md:w-2/3 items-center justify-between">
                <div className="text-center font-bold my-4">
                    {state?.name}
                </div>
                <img
                    className="h-72"
                    src="/Articulo Ejemplo.svg"
                    alt="nombre del producto"
                />
            </div>
            <p className="text-center w-3/4  md:w-2/3">
                {state?.description}
            </p>
            <div className="flex flex-col w-1/2 items-center justify-evenly p-4">
                <div className="text-center m-2 text-gray-600 font-bold">
                    {`$ ${state?.price}`}
                </div>
                {user && cartProduct ? (
                    <button
                        onClick={() => handleClick(body)}
                        className="text-white text-center text-xs font-bold w-24 py-1 rounded-2xl bg-red-600 hover:bg-red-400 transition duration-500 cursor-pointer"
                    >
                        QUITAR
                    </button>
                ) : user && !cartProduct ? (
                    <button
                        onClick={() => handleClick(body)}
                        className="text-white text-center text-xs font-bold w-24 py-1 rounded-2xl bg-indigo-700 hover:bg-indigo-500 transition duration-500 cursor-pointer"
                    >
                        AGREGAR
                    </button>
                ) : null}
            </div>
        </div>
    );
};

export default Product;
