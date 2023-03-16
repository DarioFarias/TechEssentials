import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {
    useUpdateUserByIdMutation,
    useDeleteUserMutation,
} from "../store/services/userService";
import { userContext } from "../context/UserContext.jsx";
import { useContext } from "react";
import userValidationRules from "../utils/formValidationRules/userValidationRules";
import { useNavigate } from "react-router-dom";

const UserProfileForm = () => {
    const navigate = useNavigate();

    const [isEditing, setIsEditing] = useState(false);

    const [showPassword, setShowPassword] = useState(false);

    const { getUser, toggleUpdateUser } = useContext(userContext);

    const user = getUser();

    const userEdited = {};

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: user?.name,
            lastName: user?.lastName,
            email: user?.email,
            password: "",
            tel: user?.tel,
            gender: user?.gender,
        },
        mode: "onBlur",
    });

    const [updateUser, { isError: updateIsError, isLoading: updateIsLoading }] =
        useUpdateUserByIdMutation();

    const [deleteUser, { isError: deleteIsError, isLoading: deleteIsLoading }] =
        useDeleteUserMutation();

    const submit = async (formData) => {
        if (formData.password === "") {
            delete formData.password;
        }
        const updateData = await updateUser({ id: user.Id, ...formData });
        updateData.data.success === true
            ? alert("Usuario actualizado con éxito")
            : alert("El usuario no se pudo actualizar");
        setIsEditing(false);
        toggleUpdateUser();
    };

    const onCancel = () => {
        setIsEditing(false);
        reset();
    };

    const onUnsuscribe = async () => {
        const deleted = await deleteUser(user.Id);
        if (deleted.data.success === true) {
            alert("Usuario eliminado con éxito");
            navigate("/logout");
        } else {
            alert("El usuario no se pudo eliminar");
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const nameErrorMessage = userValidationRules.getErrorMessages(
        errors,
        "name"
    );
    const lastNameErrorMessage = userValidationRules.getErrorMessages(
        errors,
        "lastName"
    );
    const emailErrorMessage = userValidationRules.getErrorMessages(
        errors,
        "email"
    );
    const passwordErrorMessage = userValidationRules.getErrorMessages(
        errors,
        "password"
    );
    const telErrorMessage = userValidationRules.getErrorMessages(errors, "tel");
    const genderErrorMessage = userValidationRules.getErrorMessages(
        errors,
        "gender"
    );

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
                    {...register("name", userValidationRules.name)}
                    disabled={!isEditing}
                    className={`rounded-2xl h-12 w-11/12 text-center ${
                        errors?.name ? "bg-yellow-100" : ""
                    } ${isEditing ? "" : "bg-gray-200"}`}
                />

                {nameErrorMessage && (
                    <p className="text-red-700">{nameErrorMessage}</p>
                )}

                <input
                    name="lastName"
                    type="text"
                    maxLength="50"
                    {...register("lastName", userValidationRules.lastName)}
                    disabled={!isEditing}
                    className={`rounded-2xl h-12 w-11/12 text-center ${
                        errors?.lastName ? "bg-yellow-100" : ""
                    } ${isEditing ? "" : "bg-gray-200"}`}
                />

                {lastNameErrorMessage && (
                    <p className="text-red-700">{lastNameErrorMessage}</p>
                )}

                <input
                    name="email"
                    type="text"
                    maxLength="40"
                    {...register("email", userValidationRules.email)}
                    disabled={!isEditing}
                    className={`rounded-2xl h-12 w-11/12 text-center ${
                        errors?.email ? "bg-yellow-100" : ""
                    } ${isEditing ? "" : "bg-gray-200"}`}
                />

                {emailErrorMessage && (
                    <p className="text-red-700">{emailErrorMessage}</p>
                )}

                <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    maxLength="16"
                    {...register("password", userValidationRules.password)}
                    placeholder="Contraseña"
                    disabled={!isEditing}
                    className={`rounded-2xl h-12 w-11/12 text-center ${
                        errors?.password ? "bg-yellow-100" : ""
                    } ${isEditing ? "" : "bg-gray-200"}`}
                />

                {passwordErrorMessage && (
                    <p className="text-red-700">{passwordErrorMessage}</p>
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
                    {...register("tel", userValidationRules.tel)}
                    placeholder="Telefono"
                    disabled={!isEditing}
                    className={`rounded-2xl h-12 w-11/12 text-center ${
                        errors?.tel ? "bg-yellow-100" : ""
                    } ${isEditing ? "" : "bg-gray-200"}`}
                />

                {telErrorMessage && (
                    <p className="text-red-700">{telErrorMessage}</p>
                )}

                <div
                    id="contenedorBotones"
                    className="flex flex-col justify-center items-center "
                >
                    {isEditing ? (
                        <>
                            <button
                                type="submit"
                                className="btnGrisPerfil text-xl"
                            >
                                Actualizar
                            </button>
                            <button
                                type="button"
                                onClick={() => onCancel()}
                                className="btnGrisPerfil text-xl"
                            >
                                Cancelar
                            </button>
                        </>
                    ) : null}
                    {!isEditing ? (
                        <>
                            <button
                                type="button"
                                onClick={() => setIsEditing(true)}
                                className="btnGrisPerfil text-xl"
                            >
                                Editar
                            </button>
                            <button
                                type="button"
                                onClick={() =>onUnsuscribe()}
                                className="btnGrisPerfil text-xl"
                            >
                                Desuscribirse
                            </button>
                        </>
                    ) : null}
                </div>
            </form>
        </div>
    );
};

export default UserProfileForm;
