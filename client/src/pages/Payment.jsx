import React, { useContext } from "react";
import CardProfileForm from "../components/CardProfileForm";
import AdressProfileForm from "../components/AdressProfileForm";
import Ticket from "../components/Ticket";
import { cartContext } from "../context/CartContext";
import { useCreateOrderMutation } from "../store/services/orderProductsService";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const Payment = () => {
    const navigate = useNavigate();
    const { cartData } = useContext(cartContext);
    const [createOrder, { data, error }] = useCreateOrderMutation();

    const handleConfirm = async () => {
        const createOrderData = await createOrder(cartData);
        if (createOrderData) {
            showAlert(true);
            /* navigate("/user/cart") */
        } else {
            showAlert(false)
        }
    };

    const showAlert = (success) => {
        if (success) {
            Swal.fire({
                icon: "success",
                title: "¡Éxito!",
                text: "La operación se realizó correctamente",
                customClass: {
                    popup: "animated tada",
                },
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Hubo un error en la operación",
                customClass: {
                    popup: "animated tada",
                },
            });
        }
    };

    return (
        <>
            <div className=" flex flex-wrap relative items-center justify-evenly p-8 gap-4">
                <Ticket />
                <CardProfileForm />
                <AdressProfileForm />
            </div>
            <div className="w-full flex justify-center gap-8 p-8">
                <button
                    onClick={() => handleConfirm()}
                    className="btnGrisPerfil text-xl"
                >
                    Confirmar compra
                </button>
            </div>
        </>
    );
};

export default Payment;
