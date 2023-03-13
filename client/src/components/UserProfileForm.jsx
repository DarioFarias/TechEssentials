import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {
    useGetUserByIdQuery,
    useUpdateUserByIdMutation,
} from "../store/services/userService";
import { userContext } from "../context/UserContext.jsx";
import { useContext } from "react";

const UserProfileForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showUpdate, setShowUpdate] = useState(false);
    const [showCancel, setShowCancel] = useState(false);
    const [showEdit, setShowEdit] = useState(true);
    const [showUnsuscribe, setShowUnsuscribe] = useState(true);
    const [name, setName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [tel, setTel] = useState();
    const [gender, setGender] = useState();

    const { getUser } = useContext(userContext);

    const user = getUser();

    const { data, isError, isLoading } = useGetUserByIdQuery(user?.id, {
        skip: !user,
    });
    const [
        updateUser,
        {
            data: updateData,
            isError: updateIsError,
            isLoading: updateIsLoading,
        },
    ] = useUpdateUserByIdMutation(user?.id);

    const submit = (formData) => {
        updateUser(formData)
        setShowEdit(true);
        setShowUnsuscribe(true);
        setShowUpdate(false);
        setShowCancel(false);
    };

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({ mode: "onBlur" });

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleEdit = () => {
        setShowEdit(false);
        setShowUnsuscribe(false);
        setShowUpdate(true);
        setShowCancel(true);
    };

    const handleCancel = () => {
        setShowEdit(true);
        setShowUnsuscribe(true);
        setShowUpdate(false);
        setShowCancel(false);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const handleTelChange = (event) => {
        setTel(event.target.value);
    };
    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    useEffect(() => {
        if (!showUpdate) {
            setName(data?.results?.name);
            setLastName(data?.results?.lastName);
            setEmail(data?.results?.email);
            setPassword("");
            setTel(data?.results?.tel);
            setGender(data?.results?.gender);
        }
    }, [handleEdit, handleCancel]);

    return (
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
                onSubmit={handleSubmit(submit)}
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
                    value={name}
                    onChange={handleNameChange}
                    className={`rounded-2xl h-12 w-11/12 text-center ${
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
                    value={lastName}
                    onChange={handleLastNameChange}
                    className={`rounded-2xl h-12 w-11/12 text-center ${
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
                    value={email}
                    onChange={handleEmailChange}
                    className={`rounded-2xl h-12 w-11/12 text-center ${
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
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Contraseña"
                    className={`rounded-2xl h-12 w-11/12 text-center ${
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
                    value={tel}
                    onChange={handleTelChange}
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
                    value={gender}
                    onChange={handleGenderChange}
                    className="rounded-2xl h-12 text-center w-11/12"
                >
                    <option>Masculino</option>
                    <option>Femenino</option>
                    <option>Otro</option>
                </select>

                <div
                    id="contenedorBotones"
                    className="flex flex-col justify-center items-center "
                >
                    {showUpdate ? (
                        <button type="submit" className="btnGrisPerfil text-xl">
                            Actualizar
                        </button>
                    ) : null}
                    {showEdit ? (
                        <button
                            onClick={handleEdit}
                            className="btnGrisPerfil text-xl"
                        >
                            Editar
                        </button>
                    ) : null}
                    {showUnsuscribe ? (
                        <Link
                            id="desuscribirse"
                            to=""
                            className="btnGrisPerfil text-xl"
                        >
                            Desuscribirse
                        </Link>
                    ) : null}
                    {showCancel ? (
                        <button
                            onClick={handleCancel}
                            className="btnGrisPerfil text-xl"
                        >
                            Cancelar
                        </button>
                    ) : null}
                </div>
            </form>
        </div>
    );
};

export default UserProfileForm;
