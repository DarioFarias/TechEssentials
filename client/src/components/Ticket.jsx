import { useContext } from "react";
import { cartContext } from "../context/CartContext";

const Ticket = () => {
    const { cartData } = useContext(cartContext);

    let total = 0;
    const texto = cartData
        .map((item) => {
            total += item.price * item.quantity;
            return `${item.quantity} x ${item.name} - $${item.price} = ${item.price * item.quantity}\n`;
        })
        .join("");

    return (
        <div
            id="contDirDesk"
            className="flex flex-col items-center bg-indigo-600 rounded-2xl p-4 gap-4 w-11/12 sm:w-8/12 md:w-5/12 lg:w-3/12"
        >
            <label
                id="datosDir"
                className="font-bold text-white font-sans text-2xl text-center "
            >
                RESUMEN DE COMPRA
            </label>
            <textarea className="w-full h-96" value={`${texto}\n\nTotal - $${total}`} readOnly />
        </div>
    );
};

export default Ticket;
