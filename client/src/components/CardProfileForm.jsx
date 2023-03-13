import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const CardProfileForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({ mode: "onChange" });
    return (
        <div
            id="contTarjetaDesk"
            className="flex flex-col items-center bg-indigo-600 rounded-2xl p-4 gap-4 w-11/12 sm:w-8/12 md:w-5/12 lg:w-3/12"
        >
            <label
                id="datosTarjeta"
                className="font-bold text-white font-sans text-2xl text-center "
            >
                TARJETA
            </label>
            <form
                className="flex flex-col justify-center items-center gap-4 w-full"
                action=""
            >
                <select
                    {...register("tarjeta")}
                    placeholder="Opciones de Tarjeta"
                    className="rounded-2xl h-12 w-11/12 text-center"
                >
                    <option>Opciones de Tarjeta</option>
                    <option value="t1">NUMTARJETA 1</option>
                    <option value="t2">NUMTARJETA 2</option>
                    <option value="other">Nueva</option>
                </select>

                <input
                    type="text"
                    {...register("name")}
                    placeholder="Nombre en la Tarjeta"
                    className="rounded-2xl h-12 w-11/12 text-center"
                />

                <input
                    type="text"
                    placeholder="Número de la Tarjeta"
                    className="rounded-2xl h-12 w-11/12 text-center"
                    {...register("cardNumber", {
                        required: true,
                        minLength: 16,
                        maxLength: 16,
                        pattern:
                            /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
                    })}
                />

                <input
                    type="date"
                    {...register("vencimiento")}
                    placeholder="Fecha de vencimiento"
                    className="rounded-2xl h-12 w-11/12 text-center"
                />

                <input
                    type="text"
                    {...register("codigo")}
                    placeholder="Codigo de Seguridad"
                    className="rounded-2xl h-12 w-11/12 text-center"
                />
                <div
                    id="contenedorBotones2"
                    className="flex flex-col justify-star items-center "
                >
                    <Link
                        id="actualizar2"
                        to=""
                        className="btnGrisPerfil text-xl"
                    >
                        Actualizar
                    </Link>
                    <Link id="borrar" to="" className="btnGrisPerfil text-xl">
                        Borrar
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default CardProfileForm;
