import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useLogInMutation } from "../store/services/userService";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: "onChange" });

    const navigate = useNavigate();
    const [login, { isLoading, error, data }] = useLogInMutation();

    const submit = (formData) => login(formData);

    useEffect(() => {
        if (data) {
            navigate("/");
        }
    }, [submit]);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="flex flex-col items-center justify-evenly min-h-screen flex-grow bg-indigo-600">
            <Link to="/">
                <img className="h-12 cursor-pointer" src="/Logo.svg" />
            </Link>
            <form
                onSubmit={handleSubmit(submit)}
                className="flex flex-col w-full h-full justify-center items-center gap-7"
                action="POST"
            >
                <input
                    name="email"
                    type="text"
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
                <label>
                    <input
                        type="checkbox"
                        onChange={togglePasswordVisibility}
                    />
                    Mostrar contraseña
                </label>
                {errors?.password?.type === "pattern" && (
                    <p className="text-red-700">Contraseña invalida</p>
                )}
                {errors?.password?.type === "minLength" && (
                    <p className="text-red-700">Contraseña invalida</p>
                )}
                {errors?.password?.type === "maxLength" && (
                    <p className="text-red-700">Contraseña invalida</p>
                )}
                {isLoading ? (
                    <p className="font-bold">Cargando...</p>
                ) : error ? (
                    <p className="text-red-700 font-bold">
                        El usuario no existe
                    </p>
                ) : null}

                <div className="flex flex-col flex-wrap justify-center gap-4 md:gap-10">
                    <button type="submit" className="btnGris">
                        Ingresar
                    </button>
                    <Link to="/register" className="btnGris">
                        Registro
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Login;
