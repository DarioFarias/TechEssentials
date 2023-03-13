import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const AdressProfileForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({ mode: "onChange" });
    return (
        <div
            id="contDirDesk"
            className="flex flex-col items-center bg-indigo-600 rounded-2xl p-4 gap-4 w-11/12 sm:w-8/12 md:w-5/12 lg:w-3/12"
        >
            <label
                id="datosDir"
                className="font-bold text-white font-sans text-2xl text-center "
            >
                DIRECCION
            </label>
            <form
                className="flex flex-col justify-center items-center gap-4 w-full"
                action=""
            >
                <select
                    {...register("direccion")}
                    placeholder="Seleccione Direccion"
                    className="rounded-2xl h-12 w-11/12 text-center"
                >
                    <option value="">Seleccione Direccion</option>
                    <option value="d1">NUMTARJETA 1</option>
                    <option value="d2">NUMTARJETA 2</option>
                    <option value="other">Otro</option>
                </select>
                <input
                    type="text"
                    {...register("dir")}
                    placeholder="Direccion"
                    className="rounded-2xl h-12 w-11/12 text-center"
                />
                <input
                    type="text"
                    {...register("ciudad")}
                    placeholder="Ciudad"
                    className="rounded-2xl h-12 w-11/12 text-center"
                />
                <input
                    type="text"
                    {...register("pais")}
                    placeholder="País"
                    className="rounded-2xl h-12 w-11/12 text-center"
                />
                <input
                    type="text"
                    {...register("CP")}
                    placeholder="Codigo Postal"
                    className="rounded-2xl h-12 w-11/12 text-center"
                />

                <div
                    id="contenedorBotones3"
                    className="flex flex-col justify-center items-center "
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

export default AdressProfileForm;
