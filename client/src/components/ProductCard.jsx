import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../context/CartContext";
import { userContext } from "../context/UserContext";

const ProductCard = ({ product }) => {
    const [cartProduct, setCartProduct] = useState();
    const { userData } = useContext(userContext);
    const user = userData?.results;
    const { deleteCart, createCart, cartData } = useContext(cartContext);

    useEffect(() => {
        const productInCart = cartData?.find(
            (cartProduct) => cartProduct?.idProduct === product?.id
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

    const body = { idProduct: product.id, quantity: 1 };

    return (
        <div className="flex relative w-72 h-48 border border-solid border-black rounded-3xl hover:shadow-xl transition duration-500">
            <div className="flex flex-col w-1/2 items-center justify-between">
                <Link to="/product" state={product}>
                    <div className="text-center font-bold my-4">
                        {product.name}
                    </div>
                </Link>
                <div className="text-center m-2 text-gray-600 font-bold">
                    ${product.price}
                </div>
            </div>
            <div className="flex flex-col w-1/2 items-center justify-evenly">
                <Link to="/product" state={product}>
                    <img
                        className="w-28"
                        src="/Articulo Ejemplo.svg"
                        alt="nombre del producto"
                    />
                </Link>
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

export default ProductCard;
