import { useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserMutation } from "../store/services/userService";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({ mode: "onChange" });

    const password = watch("password");
    const confirmPassword = watch("confirmPassword");

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const [registerUser, { isLoading, error, data }] = useCreateUserMutation();

    const submit = (formData) => registerUser(formData);

    useEffect(() => {
        if (data) {
            navigate("/login");
        }
    }, [submit]);

    return (
        <div className="flex flex-col items-center justify-evenly min-h-screen flex-grow bg-indigo-600">
            <Link to="/">
                <img className="h-12 m-12 cursor-pointer" src="/Logo.svg" />
            </Link>
            <form
                onSubmit={handleSubmit(submit)}
                className="flex flex-col w-full h-full justify-center items-center gap-4"
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
                    className={`rounded-2xl h-12 w-60 text-center  md:w-1/2 md:px-8 ${
                        errors?.name ? "bg-yellow-100" : ""
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
                    className={`rounded-2xl h-12 w-60 text-center  md:w-1/2 md:px-8 ${
                        errors?.lastName ? "bg-yellow-100" : ""
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
                    className={` rounded-2xl h-12 w-60 text-center md:w-1/2 md:px-8 ${
                        errors?.email ? "bg-yellow-100" : ""
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
                        pattern: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/i,
                    })}
                    placeholder="Contraseña"
                    className={` rounded-2xl h-12 w-60 text-center md:w-1/2 md:px-8  ${
                        errors?.password ? "bg-yellow-100" : ""
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
                <input
                    name="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    maxLength="16"
                    {...register("confirmPassword", {
                        required: true,
                        minLength: 8,
                        maxLength: 16,
                        pattern: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/i,
                    })}
                    placeholder="Confirmar contraseña"
                    className={` rounded-2xl h-12 w-60 text-center md:w-1/2 md:px-8  ${
                        errors?.password ? "bg-yellow-100" : ""
                    }`}
                />
                {confirmPassword !== password && (
                    <p className="text-red-700">Las contraseñas no coinciden</p>
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
                    className={`rounded-2xl h-12 w-60 text-center md:w-1/2 md:px-8  ${
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

                {isLoading ? (
                    <p className="font-bold">Cargando...</p>
                ) : error ? (
                    <p className="text-red-700 font-bold">
                        El correo ya existe
                    </p>
                ) : null}
                <div className="flex flex-col flex-wrap justify-center p-12">
                    <button type="submit" className="btnGris">
                        Registro
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Register;
