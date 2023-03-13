import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const Profile = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div
            id="contenedorDesk"
            className=" flex flex-wrap relative items-center justify-evenly p-8 gap-4"
        >
            <div
                id="contDatosDesk"
                className="flex flex-col items-center bg-indigo-600 rounded-2xl p-4 gap-4 w-11/12 sm:w-8/12 md:w-5/12 lg:w-3/12"
            >
                <label
                    id="datosUser"
                    className="font-bold text-white font-sans text-2xl text-center "
                >
                    DATOS DEL USUARIO
                </label>

                <form
                    className="flex flex-col justify-center items-center gap-4 w-full"
                    action=""
                >
                    <input
                        name="name"
                        type="text"
                        maxLength="50"
                        {...register("name", {
                            required: true,
                            minLength: 3,
                            maxLength: 50,
                            pattern:
                                /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/,
                        })}
                        placeholder="Nombres"
                        className={`rounded-2xl h-12 w-11/12 text-center ${
                            errors?.tel ? "bg-yellow-100" : ""
                        }`}
                    />
                    {errors?.name?.type === "pattern" && (
                        <p className="text-red-700">Ingrese un nombre valido</p>
                    )}
                    {errors?.name?.type === "required" && (
                        <p className="text-red-700">
                            El campo no puede estar vacio
                        </p>
                    )}
                    {errors?.name?.type === "maxLength" && (
                        <p className="text-red-700">Nombre demasiado largo</p>
                    )}
                    {errors?.name?.type === "minLength" && (
                        <p className="text-red-700">Nombre demasiado corto</p>
                    )}
                    <input
                        name="lastName"
                        type="text"
                        maxLength="50"
                        {...register("lastName", {
                            required: true,
                            minLength: 4,
                            maxLength: 50,
                            pattern:
                                /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/,
                        })}
                        placeholder="Apellidos"
                        className={`rounded-2xl h-12 w-11/12 text-center ${
                            errors?.tel ? "bg-yellow-100" : ""
                        }`}
                    />
                    {errors?.lastName?.type === "pattern" && (
                        <p className="text-red-700">Ingrese un nombre valido</p>
                    )}
                    {errors?.lastName?.type === "required" && (
                        <p className="text-red-700">
                            El campo no puede estar vacio
                        </p>
                    )}
                    {errors?.lastName?.type === "maxLength" && (
                        <p className="text-red-700">Apellido demasiado largo</p>
                    )}
                    {errors?.lastName?.type === "minLength" && (
                        <p className="text-red-700">Apellido demasiado corto</p>
                    )}
                    <input
                        name="email"
                        type="text"
                        maxLength="40"
                        {...register("email", {
                            required: true,
                            minLength: 8,
                            maxLength: 40,
                            pattern:
                                /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
                        })}
                        placeholder="Correo electronico"
                        className={`rounded-2xl h-12 w-11/12 text-center ${
                            errors?.tel ? "bg-yellow-100" : ""
                        }`}
                    />
                    {errors?.email?.type === "pattern" && (
                        <p className="text-red-700">Ingrese un email valido</p>
                    )}
                    {errors?.email?.type === "required" && (
                        <p className="text-red-700">
                            El campo no puede estar vacio
                        </p>
                    )}
                    {errors?.email?.type === "maxLength" && (
                        <p className="text-red-700">Email demasiado largo</p>
                    )}
                    {errors?.email?.type === "minLength" && (
                        <p className="text-red-700">Email demasiado corto</p>
                    )}
                    <input
                        name="password"
                        type={showPassword ? "text" : "password"}
                        maxLength="16"
                        {...register("password", {
                            required: true,
                            minLength: 8,
                            maxLength: 16,
                            pattern:
                                /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/i,
                        })}
                        placeholder="Contraseña"
                        className={`rounded-2xl h-12 w-11/12 text-center ${
                            errors?.tel ? "bg-yellow-100" : ""
                        }`}
                    />
                    {errors?.password?.type === "pattern" && (
                        <p className="text-red-700">Contraseña invalida</p>
                    )}
                    {errors?.password?.type === "minLength" && (
                        <p className="text-red-700">Contraseña invalida</p>
                    )}
                    {errors?.password?.type === "maxLength" && (
                        <p className="text-red-700">Contraseña invalida</p>
                    )}
                    <label>
                        <input
                            type="checkbox"
                            onChange={togglePasswordVisibility}
                        />
                        Mostrar contraseña
                    </label>
                    <input
                        name="tel"
                        type="number"
                        step="1"
                        maxLength="10"
                        {...register("tel", {
                            minLength: 10,
                            maxLength: 10,
                        })}
                        placeholder="Telefono"
                        className={`rounded-2xl h-12 w-11/12 text-center ${
                            errors?.tel ? "bg-yellow-100" : ""
                        }`}
                    />
                    {errors?.tel?.type === "minLength" && (
                        <p className="text-red-700">
                            El telefono debe contener 10 digitos
                        </p>
                    )}
                    {errors?.tel?.type === "maxLength" && (
                        <p className="text-red-700">
                            El telefono debe contener 10 digitos
                        </p>
                    )}
                    <select
                        {...register("gender", {
                            required: true,
                        })}
                        placeholder="Genero"
                        className="rounded-2xl h-12 text-center w-11/12"
                    >
                        <option value="male">Masculino</option>
                        <option value="female">Femenino</option>
                        <option value="other">Otro</option>
                    </select>

                    <div
                        id="contenedorBotones"
                        className="flex flex-col justify-center items-center "
                    >
                        <Link
                            id="actualizar"
                            to=""
                            className="btnGrisPerfil text-xl"
                        >
                            Actualizar
                        </Link>
                        <Link
                            id="desuscribirse"
                            to=""
                            className="btnGrisPerfil text-xl"
                        >
                            Desuscribirse
                        </Link>
                    </div>
                </form>
            </div>
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
                        <Link
                            id="borrar"
                            to=""
                            className="btnGrisPerfil text-xl"
                        >
                            Borrar
                        </Link>
                    </div>
                </form>
            </div>
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
                        <Link
                            id="borrar"
                            to=""
                            className="btnGrisPerfil text-xl"
                        >
                            Borrar
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Profile;
