import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    return (
        <div className="flex relative w-72 h-48 border border-solid border-black rounded-3xl hover:shadow-xl transition duration-500">
            <div className="flex flex-col w-1/2 items-center justify-between">
                <Link
                    to="/product" state={ product }
                >
                    <div className="text-center font-bold my-4">
                        {product.name}
                    </div>
                </Link>
                <div className="text-center m-2 text-gray-600 font-bold">
                    ${product.price}
                </div>
            </div>
            <div className="flex flex-col w-1/2 items-center justify-evenly">
                <Link
                    to="/product" state={ product }
                    
                >
                    <img
                        className="w-28"
                        src="/Articulo Ejemplo.svg"
                        alt="nombre del producto"
                    />
                </Link>
                <div className="text-white text-center text-xs font-bold w-24 py-1 rounded-2xl bg-indigo-700 hover:bg-indigo-500 transition duration-500 cursor-pointer">
                    AGREGAR
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
