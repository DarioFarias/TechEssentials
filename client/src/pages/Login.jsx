import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    return (
        <div className="flex flex-col items-center justify-evenly min-h-screen flex-grow bg-indigo-600">
            <Link to="/">
                <img
                    className="h-12 cursor-pointer"
                    src="../../public/Logo.svg"
                />
            </Link>
            <form className="w-3/6 flex flex-col w-full h-full justify-center items-center gap-7" action="">
                <input
                    type="text"
                    {...register("email", {
                        required: true,
                        minLength: 4,
                        maxLength: 20,
                        pattern:
                            /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
                    })}
                    placeholder="Email"
                    className="rounded-2xl h-12 w-60 text-center"
                />
                {errors?.email?.type === "pattern" && (
                    <p>Pone un email con onda</p>
                )}
                {errors?.email?.type === "required" && (
                    <p>El campo email no puede estar vacio</p>
                )}
                {errors?.email?.type === "maxLength" && <p>email invalido</p>}
                {errors?.email?.type === "minLength" && <p>email invalido</p>}
                <input
                    type="password"
                    {...register("password")}
                    placeholder="Password"
                    className="rounded-2xl h-12 w-60 text-center"
                />
                <div className="flex flex-col flex-wrap justify-center">
                    <Link to="" className="btnGris">
                        Ingresar
                    </Link>
                    <Link to="/register" className="btnIndigo">
                        Registro
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Login;
