import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const openMenu = () => {
        const bMenu = document.getElementById("menu");

        if (bMenu.classList.contains("hidden")) {
            bMenu.classList.remove("hidden");
        } else {
            bMenu.classList.add("hidden");
        }
    };

    return (
        <nav className="bg-gray-500  min-w-max">
            <div className="flex items-center justify-between h-16 p-4">
                <Link to="/">
                    <img
                        className="h-8 cursor-pointer"
                        src="/Logo.svg"
                    />
                </Link>

                <img
                    id="bMenu"
                    className="md:hidden w-8 mx-4 cursor-pointer"
                    src="/Bmenu.svg"
                    onClick={openMenu}
                />
                <div
                    id="menu"
                    className="bg-gray-500 hidden absolute flex flex-col w-40 right-0 top-16 p-4 md:p-0 md:flex md:flex-row md:flex-grow md:items-center md:relative md:top-0 z-10"
                >
                    <div className="flex flex-grow md:justify-evenly flex-wrap justify-center gap-4 p-4 md:gap-0 md:p-0">
                        <Link
                            to="/products"
                            className="text-white mx-3 md:mx-0 hover:text-indigo-700 transition duration-500"
                        >
                            Productos
                        </Link>
                        <Link
                            to="/cart"
                            className="text-white mx-3 md:mx-0 hover:text-indigo-700 transition duration-500"
                        >
                            Carrito
                        </Link>
                        <Link
                            to="/profile"
                            className="text-white mx-3 md:mx-0 hover:text-indigo-700 transition duration-500"
                        >
                            Perfil
                        </Link>
                        <Link
                            to="/contact"
                            className="text-white mx-3 md:mx-0 hover:text-indigo-700 transition duration-500"
                        >
                            Contacto
                        </Link>
                    </div>
                    <div className="flex flex-wrap justify-center">
                        <Link to="/login" className="btnGris">
                            Ingresar
                        </Link>
                        <Link to="/register" className="btnIndigo">
                            Registro
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
