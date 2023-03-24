import { Link, useLocation } from "react-router-dom";

const Product = () => {
    const { state } = useLocation()

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
                <div className="text-white text-center text-xs font-bold w-24 py-1 rounded-2xl bg-indigo-700 hover:bg-indigo-500 transition duration-500 cursor-pointer">
                    AGREGAR
                </div>
            </div>
        </div>
    );
};

export default Product;
