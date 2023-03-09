import React from 'react';

import { Link } from 'react-router-dom';

const Product = () => {
  return (
    <div className="flex flex-col w-full fkex-grow items-center justify-between ">
      <div className="flex flex-col md:w-2/3 items-center justify-between">
        <div className="text-center font-bold my-4">TITULO DEL PRODUCTO</div>
        <img
          className="h-72"
          src="/Articulo Ejemplo.svg"
          alt="nombre del producto"
        />
      </div>
      <p className="text-center w-3/4  md:w-2/3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis animi
        fugiat exercitationem nisi in pariatur nulla aut quidem sunt vitae
        maxime qui, earum ipsam fuga omnis ducimus quod alias commodi!
      </p>
      <div className="flex flex-col w-1/2 items-center justify-evenly p-4">
        <div className="text-center m-2 text-gray-600 font-bold">PRECIO</div>
        <div className="text-white text-center text-xs font-bold w-24 py-1 rounded-2xl bg-indigo-700 hover:bg-indigo-500 transition duration-500 cursor-pointer">
          AGREGAR
        </div>
      </div>
    </div>
  );
};

export default Product;
