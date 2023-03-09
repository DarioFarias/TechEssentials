import { useForm } from 'react-hook-form';
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Profile = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    // En teria aquí desplegamos nadamas datos de la BD (consulta) entonces no sé si dejar el formulario o solo poner labels

    <div id="contenedor">
      <div
        id="contenedorDesk"
        className="flex flex-row items-center justify-evenly min-h-screen flex-grow bg-indigo-600 hidden md:flex top-0"
      >
        <div
          id="contDatosDesk"
          className="flex-1 flex flex-col items-center min-h-screen justify-start"
        >
          <label
            id="datosUser"
            className="font-bold my-4 text-white font-sans text-2xl "
          >
            DATOS DEL USUARIO
          </label>

          <form
            className="flex flex-col w-full h-full justify-center items-center gap-4 md:gap-10"
            action=""
          >
            <input
              type="text"
              {...register('name')}
              placeholder="Nombre completo"
              className="rounded-2xl h-12 w-60 text-center md:w-9/12"
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
              className="rounded-2xl h-12 w-60 text-center  md:w-9/12"
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
              className="rounded-2xl h-12 w-60 text-center  md:w-9/12 "
            />
            <input
              type="password"
              {...register('confirmPassword')}
              placeholder="Confirmar contraseña"
              className="rounded-2xl h-12 w-60 text-center  md:w-9/12"
            />
            <input
              type="text"
              {...register('tel')}
              placeholder="Telefono"
              className="rounded-2xl h-12 w-60 text-center  md:w-9/12"
            />
            <input
              type="date"
              {...register('birthday')}
              placeholder="Fecha de nacimiento"
              className="rounded-2xl h-12 w-60 text-center  md:w-9/12"
            />
            <select
              {...register('gender')}
              placeholder="Genero"
              className="rounded-2xl h-12 w-60 text-center  md:w-9/12"
            >
              <option value="male">Masculino</option>
              <option value="female">Femenino</option>
              <option value="other">Otro</option>
            </select>

            {/* El siguiente boton falta darle implementacion verdad? */}

            <div
              id="contenedorBotones"
              className="flex flex-col flex-wrap justify-center items-center "
            >
              <Link
                id="actualizar"
                to="/register"
                className="btnGrisPerfil text-xl"
              >
                Actualizar
              </Link>
              <Link
                id="desuscribirse"
                to="/register"
                className="btnGrisPerfil text-xl"
              >
                Desuscribirse
              </Link>
            </div>
          </form>
        </div>
        <div
          id="contTarjetaDesk"
          className="flex-1 flex flex-col items-center min-h-screen justify-start"
        >
          <label
            id="datosTarjeta"
            className="font-bold my-4 text-white font-sans text-2xl "
          >
            TARJETA
          </label>
          <form
            className="flex flex-col w-full h-full justify-center items-center gap-4 md:gap-10"
            action=""
          >
            <select
              {...register('tarjeta')}
              placeholder="Opciones de Tarjeta"
              className="rounded-2xl h-12 w-60 text-center  md:w-9/12"
            >
              <option value="placeholder">Opciones de Tarjeta</option>
              <option value="t1">NUMTARJETA 1</option>
              <option value="t2">NUMTARJETA 2</option>
              <option value="other">Otro</option>
            </select>

            <input
              type="text"
              {...register('name')}
              placeholder="Nombre en la Tarjeta"
              className="rounded-2xl h-12 w-60 text-center  md:w-9/12"
            />

            <input
              type="text"
              {...register('tarjeta', {
                required: true,
                minLength: 13,
                maxLength: 19,
                pattern:
                  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
              })}
              placeholder="Número de la Tarjeta"
              className="rounded-2xl h-12 w-60 text-center  md:w-9/12"
            />
            {errors?.email?.type === 'pattern' && <p>Pone un email con onda</p>}
            {errors?.email?.type === 'required' && (
              <p>El campo email no puede estar vacio</p>
            )}
            {errors?.email?.type === 'maxLength' && <p>email invalido</p>}
            {errors?.email?.type === 'minLength' && <p>email invalido</p>}

            <input
              type="date"
              {...register('vencimiento')}
              placeholder="Fecha de vencimiento"
              className="rounded-2xl h-12 w-60 text-center  md:w-9/12"
            />

            <input
              type="text"
              {...register('codigo')}
              placeholder="Codigo de Seguridad"
              className="rounded-2xl h-12 w-60 text-center  md:w-9/12"
            />
            <div
              id="contenedorBotones2"
              className="flex flex-col flex-wrap justify-star items-center "
            >
              <Link
                id="actualizar2"
                to="/register"
                className="btnGrisPerfil text-xl"
              >
                Actualizar
              </Link>
              <Link
                id="borrar"
                to="/register"
                className="btnGrisPerfil text-xl"
              >
                Borrar
              </Link>
            </div>
          </form>
        </div>
        <div
          id="contDirDesk"
          className="flex-1 flex flex-col items-center min-h-screen top-0"
        >
          <label
            id="datosDir"
            className="font-bold my-4 text-white font-sans text-2xl "
          >
            DIRECCION
          </label>
          <form
            className="flex flex-col w-full h-full justify-center items-center gap-4 md:gap-10"
            action=""
          >
            <select
              {...register('direccion')}
              placeholder="Seleccione Direccion"
              className="rounded-2xl h-12 w-60 text-center  md:w-9/12"
            >
              <option value="placeholder">Seleccione Direccion</option>
              <option value="d1">NUMTARJETA 1</option>
              <option value="d2">NUMTARJETA 2</option>
              <option value="other">Otro</option>
            </select>

            <input
              type="text"
              {...register('name')}
              placeholder="Nombre completo del usuario"
              className="rounded-2xl h-12 w-60 text-center md:w-9/12"
            />
            <input
              type="text"
              {...register('dir')}
              placeholder="Direccion"
              className="rounded-2xl h-12 w-60 text-center md:w-9/12"
            />
            <input
              type="text"
              {...register('ciudad')}
              placeholder="Ciudad"
              className="rounded-2xl h-12 w-60 text-center md:w-9/12"
            />
            <input
              type="text"
              {...register('pais')}
              placeholder="País"
              className="rounded-2xl h-12 w-60 text-center md:w-9/12"
            />
            <input
              type="text"
              {...register('CP')}
              placeholder="Codigo Postal"
              className="rounded-2xl h-12 w-60 text-center md:w-9/12"
            />

            <div
              id="contenedorBotones3"
              className="flex flex-col flex-wrap justify-center items-center "
            >
              <Link
                id="actualizar2"
                to="/register"
                className="btnGrisPerfil text-xl"
              >
                Actualizar
              </Link>
              <Link
                id="borrar"
                to="/register"
                className="btnGrisPerfil text-xl"
              >
                Borrar
              </Link>
            </div>
          </form>
        </div>
      </div>
      {/* AQUI EMPIEZA LA PARTE MOVIL */}
      <div className="flex flex-col items-center justify-evenly min-h-screen flex-grow bg-indigo-600 md:hidden">
        <label
          id="Mensaje"
          className="object-center text-center font-bold my-4 text-white font-sans text-2xl "
        >
          DATOS DEL USUARIO
        </label>
        <form
          className="flex flex-col w-full h-full justify-center items-center gap-4 md:gap-10"
          action=""
        >
          <input
            type="text"
            {...register('name')}
            placeholder="Nombre completo"
            className="rounded-2xl h-12 w-60 text-center  md:w-1/2 md:px-8"
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
            className="rounded-2xl h-12 w-60 text-center  md:w-1/2 md:px-8"
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
            className="rounded-2xl h-12 w-60 text-center  md:w-1/2 md:px-8 "
          />
          <input
            type="password"
            {...register('confirmPassword')}
            placeholder="Confirmar contraseña"
            className="rounded-2xl h-12 w-60 text-center  md:w-1/2 md:px-8"
          />
          <input
            type="text"
            {...register('tel')}
            placeholder="Telefono"
            className="rounded-2xl h-12 w-60 text-center  md:w-1/2 md:px-8"
          />
          <input
            type="date"
            {...register('birthday')}
            placeholder="Fecha de nacimiento"
            className="rounded-2xl h-12 w-60 text-center  md:w-1/2 md:px-8"
          />
          <select
            {...register('gender')}
            placeholder="Genero"
            className="rounded-2xl h-12 w-60 text-center  md:w-1/2 md:px-8"
          >
            <option value="male">Masculino</option>
            <option value="female">Femenino</option>
            <option value="other">Otro</option>
          </select>

          {/* El siguiente boton falta darle implementacion verdad? */}

          <div
            id="contenedorBotones"
            className="flex flex-col flex-wrap justify-center items-center "
          >
            <Link
              id="actualizar"
              to="/register"
              className="btnGrisPerfil text-xl"
            >
              Actualizar
            </Link>
            <Link
              id="desuscribirse"
              to="/register"
              className="btnGrisPerfil text-xl"
            >
              Desuscribirse
            </Link>
          </div>
        </form>
        <Footer />
      </div>
      {/* Este es el div que cierra el modo desktop */}
    </div>
  );
};

export default Profile;
