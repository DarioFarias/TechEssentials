import React from 'react';
import PCCart from '../components/PCCart';
import { useGetAllProductsQuery } from '../store/services/productService';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { data, isError, isLoading, error } = useGetAllProductsQuery();
  const pccart = data;

  return (
    <>
      <div
        id="contPrincipal"
        className="flex w-full flex-wrap justify-evenly p-4 gap-4"
      >
        {isLoading && !isError ? (
          <section>Loading...</section>
        ) : (
          pccart && pccart.map((product, key) => {
            return <PCCart key={product.id} pccart={product} />;
          })
        )}
      </div>
      <div
        id="sticky"
        className="flex flex-col  sticky bottom-0 z-10 bg-gray-500 text-white"
      >
        {pccart?.price ? (
          <div id="precio">${pccart.price}</div>
        ) : (
          <div>No hay precio disponible</div>
        )}
        {pccart?.priceT ? (
          <div id="precioT">${pccart.priceT}</div>
        ) : (
          <div>No hay precioT disponible</div>
        )}
        <div className="flex flex-col  items-center justify-evenly">
          <Link to="/product">
            <button class="  text-white text-center text-xs font-bold w-24 py-1 rounded-2xl bg-indigo-700 hover:bg-indigo-500 transition duration-500 cursor-pointer">
              Seguir Comprando
            </button>
          </Link>
          <div className="text-white text-center text-xs font-bold w-24 py-1 rounded-2xl bg-indigo-700 hover:bg-indigo-500 transition duration-500 cursor-pointer">
            Confirmar
          </div>
          <div className="text-white text-center text-xs font-bold w-24 py-1 rounded-2xl bg-indigo-700 hover:bg-indigo-500 transition duration-500 cursor-pointer">
            Cancelar
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
