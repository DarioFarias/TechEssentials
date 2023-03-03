import React from "react";

const ProductCard = () => {
    return (
        <div className="flex relative w-72 h-48 border border-solid border-black rounded-3xl hover:shadow-xl transition duration-500">
            <div className="flex flex-col w-1/2 items-center justify-between">
                <div className="text-center font-bold my-4">
                    TITULO DEL PRODUCTO
                </div>
                <div className="text-center m-2 text-gray-600 font-bold">
                    PRECIO
                </div>
            </div>
            <div className="flex flex-col w-1/2 items-center justify-evenly">
                <img className="w-28" src="/Articulo Ejemplo.svg" alt="nombre del producto" />
                <div className="text-white text-center text-xs font-bold w-24 py-1 rounded-2xl bg-indigo-700 hover:bg-indigo-500 transition duration-500 cursor-pointer">
                    AGREGAR
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
