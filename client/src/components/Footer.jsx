import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="object-center text-center flex flex-col items-center justify gap-2 md:gap-16">
      <div
        id="footerLogos"
        className="flex table-rowitems-center justify-evenly w-full flex-wrap p-4 gap-4 md:gap-16 "
      >
        <div id="LoginTw">
          <Link to="/">
            <img className="h-12 cursor-pointer" src="/TwitterLogo.svg" />
          </Link>
        </div>
        <div>
          <Link to="/">
            <img className="h-12 cursor-pointer" src="/InstagramLogo.svg" />
          </Link>
        </div>
        <div>
          <Link to="/">
            <img className="h-12 cursor-pointer" src="/FbLogo.svg" />
          </Link>
        </div>
      </div>
      <div
        id="DatosContacto"
        className="flex flex-col justify-center items-center gap-2 md:gap-10 "
      >
        <div id="telefonoContainer">
          <label
            id="Telefono"
            className="object-center text-center font-bold  text-white font-sans text-2xl "
          >
            8110213651
          </label>
        </div>
        <div id="HorarioContainer">
          <label
            id="Telefono"
            className="object-center text-center font-bold  text-white font-sans text-2xl "
          >
            Horario 24 horas
          </label>
        </div>
      </div>
    </div>
  );
};

export default Footer;
