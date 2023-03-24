import React, { useState, useEffect, useContext } from "react";
import PCCart from "../components/PCCart";
import { Link } from "react-router-dom";
import { cartContext } from "../context/CartContext";

const Cart = () => {
    const { cartData, cartLoading, cartError } = useContext(cartContext);
    const pccart = cartData

/*     useEffect(() => {
        let newTotalPrice = 0;
        for (let i = 0; i < pccart?.length; i++) {
            newTotalPrice += pccart[i].price;
        }
        setTotalPrice(newTotalPrice);
    }, [pccart]); */

    return (
        <>
            <div
                id="contPrincipal"
                className="flex w-full flex-wrap content-start justify-evenly p-4 gap-4 flex-grow"
            >
                {cartLoading ? (
                    <section>Loading...</section>
                ) : cartError? <p>No hay productos en el carrito</p> : (
                    pccart &&
                    pccart.map((product, key) => {
                        return <PCCart key={product.id} pccart={product} />;
                    })
                )}
            </div>

            <div
                id="sticky"
                className="flex flex-col  sticky bottom-0 z-10 bg-gray-500 text-white   gap-6"
            >
                {/* {pccart?.price ? (
                    <div id="precio">${pccart.price}</div>
                ) : (
                    <div>No hay precio disponible</div>
                )} */}

                <div id="precioT">TOTAL ${totalPrice}</div>

                <div className="flex flex-row  items-center justify-evenly p-4 gap-4">
                    <Link to="/products">
                        <button className="text-white text-center text-xs font-bold w-28 py-3 rounded-2xl bg-indigo-700 hover:bg-indigo-500 transition duration-500 cursor-pointer">
                            Seguir Comprando
                        </button>
                    </Link>
                    <div className="text-white text-center text-xs font-bold w-28 py-3 rounded-2xl bg-indigo-700 hover:bg-indigo-500 transition duration-500 cursor-pointer">
                        Confirmar
                    </div>
                    <div className="text-white text-center text-xs font-bold w-28 py-3 rounded-2xl bg-indigo-700 hover:bg-indigo-500 transition duration-500 cursor-pointer">
                        Cancelar
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;
