import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="flex relative w-11/12 h-72 justify-center">
           <img className="md:hidden object-contain h-full w-full hover:shadow-xl transition duration-500" src="https://centralcelularshop.com/wp-content/uploads/2021/02/promo-inicio.jpg"/>
           <img className="hidden object-contain h-full w-full md:block h-72 hover:shadow-xl transition duration-500" src="https://tecstore.pe/media/TEC_Banner-Web_Categoria_CELULARES.jpg"/>
        </div>
    );
};

export default Banner;
