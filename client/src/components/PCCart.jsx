import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../context/CartContext";

const PCCart = ({ pccart }) => {
    const { deleteCart, updateCart } = useContext(cartContext);

    const handleIncrement = () => {
        if (pccart.stock>pccart.quantity){
            const body = {
                quantity: pccart.quantity + 1,
            };
            updateCart({ id: pccart.id, ...body });
        }
    };

    const handleDecrement = () => {
        if (pccart.quantity>1){
            const body = {
                quantity: pccart.quantity - 1,
            };
            updateCart({ id: pccart.id, ...body });
        }
    };

    const handleDelete = () => {
        deleteCart(pccart.id);
    };

    return (
        <div
            id="contenedor"
            className="flex flex-col relative w-72 h-48 border border-solid border-black rounded-3xl hover:shadow-xl transition duration-500 justify-between "
        >
            <div id="contnombre" className="flex    m-2 font-bold">
                {pccart.name}
            </div>
            <div id="contRow" className="flex h-full gap-1 ">
                <div
                    id="contCols"
                    className="flex flex-col w-1/4 h-full justify-center"
                >
                    <Link to="/product" state={pccart}>
                        <img
                            className="w-28  "
                            src="/Articulo Ejemplo.svg"
                            alt="nombre del producto"
                        />
                    </Link>
                </div>
                <div
                    id="contlabels"
                    className="flex flex-col w-1/4 h-full items-center justify-start"
                >
                    <label className="m-2 text-gray-600 font-bold">
                        Cantidad
                    </label>
                    <label className="m-2 text-gray-600 font-bold">
                        Precio
                    </label>
                    <label className="m-2 text-gray-600 font-bold">
                        SubTotal
                    </label>
                </div>

                <div
                    id="contByBD"
                    className="flex flex-col w-1/4 h-full items-center justify-start gap-3"
                >
                    <div
                        id="contB"
                        className="flex justify-between bg-gray-200 px-2 py-1 rounded-md items-center gap-1"
                    >
                        <button
                            onClick={() => handleDecrement()}
                            className=" h-4 w-4 bg-cover bg-center bg-no-repeat bg-white rounded-md"
                        >
                            <img src="/menos.svg" alt="menos" />
                        </button>
                        <span className="text-gray-700 font-bold text-lg">
                            {pccart.quantity}
                        </span>

                        <button
                            onClick={() => handleIncrement()}
                            className=" h-4 w-4 bg-cover bg-center bg-no-repeat bg-white rounded-md"
                        >
                            <img src="/mas.svg" alt="mas" />
                        </button>
                    </div>
                    <div id="precio">${pccart.price}</div>
                    <div id="ST">${pccart.price * pccart.quantity}</div>
                </div>

                <div
                    id="contOyE"
                    className="flex flex-col w-1/4 h-full items-center justify-center gap-4"
                >
                    <Link to="/product" state={pccart}>
                        <button className=" h-7 w-7 bg-cover bg-center bg-no-repeat bg-white rounded-md">
                            <img src="/Ojo.svg" alt="ojo" />
                        </button>
                    </Link>
                    <div id="contE">
                        <button
                            onClick={() => handleDelete()}
                            className=" h-7 w-7 bg-cover bg-center bg-no-repeat bg-white rounded-md"
                        >
                            <img src="/Eliminar.svg" alt="eliminar" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PCCart;
