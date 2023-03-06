import { useForm } from 'react-hook-form';
import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <div className="flex flex-col items-center justify-evenly min-h-screen flex-grow bg-indigo-600">
      <Link to="/">
        <img className="h-12 cursor-pointer" src="/Logo.svg" />
      </Link>
      <form
        className="flex flex-col w-full h-full justify-center items-center gap-2"
        action=""
      >
        <input
          type="text"
          {...register('name')}
          placeholder="Nombre completo"
          className="rounded-2xl h-12 w-60 text-center"
        />
        <input
          type="text"
          {...register('email', {
            required: true,
            minLength: 4,
            maxLength: 20,
            pattern:
              /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
          })}
          placeholder="Correo electronico"
          className="rounded-2xl h-12 w-60 text-center"
        />
        {errors?.email?.type === 'pattern' && <p>Pone un email con onda</p>}
        {errors?.email?.type === 'required' && (
          <p>El campo email no puede estar vacio</p>
        )}
        {errors?.email?.type === 'maxLength' && <p>email invalido</p>}
        {errors?.email?.type === 'minLength' && <p>email invalido</p>}
        <input
          type="password"
          {...register('password')}
          placeholder="Contraseña"
          className="rounded-2xl h-12 w-60 text-center"
        />
        <input
          type="password"
          {...register('confirmPassword')}
          placeholder="Confirmar contraseña"
          className="rounded-2xl h-12 w-60 text-center"
        />
        <input
          type="text"
          {...register('tel')}
          placeholder="Telefono"
          className="rounded-2xl h-12 w-60 text-center"
        />
        <input
          type="date"
          {...register('birthday')}
          placeholder="Fecha de nacimiento"
          className="rounded-2xl h-12 w-60 text-center"
        />
        <select
          {...register('gender')}
          placeholder="Genero"
          className="rounded-2xl h-12 w-60 text-center"
        >
          <option value="male">Masculino</option>
          <option value="female">Femenino</option>
          <option value="other">Otro</option>
        </select>

        {/* El siguiente boton falta darle implementacion verdad? */}

        <div className="flex flex-col flex-wrap justify-center">
          <Link to="/register" className="btnGris">
            Registro
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
