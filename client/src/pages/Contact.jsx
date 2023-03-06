import React from 'react';

import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Contact = () => {
  const {
    // aqui en vez de register ponemos otra cosa para que no jale la misma funcion??
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <div
      id="FlexContainer"
      className="flex flex-col items-center justify-evenly min-h-screen flex-grow bg-indigo-600"
    >
      <form
        id="ContenedorFormulario"
        className="flex flex-col w-full h-full justify-center items-center gap-2"
        action=""
      >
        <div
          id="divContactanos"
          className="flex flex-col items-center   flex-grow "
        >
          <label
            id="Mensaje"
            className="object-center text-center font-bold my-4 text-white font-sans text-2xl"
          >
            Hola!!, tienes dudas con tu pedido o alguna sugerencia ??
          </label>

          <label
            id="Mensaje"
            className="object-center text-center font-bold my-4 text-white font-sans text-5xl"
          >
            Contactanos
          </label>
        </div>
        <input
          id="NombreComp"
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
          type="text"
          {...register('asunto')}
          placeholder="Asunto"
          className="rounded-2xl h-12 w-60 text-center"
        />

        <input
          type="text"
          {...register('mensaje')}
          placeholder="Mensaje"
          className="rounded-2xl h-40 w-60 text-center"
        />

        <div className="flex flex-col flex-wrap justify-center">
          <Link to="/register" className="btnGris">
            Enviar
          </Link>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Contact;
