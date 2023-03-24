import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

import { useLogOutMutation } from '../store/services/userService';
import Swal from 'sweetalert2';

const Logout = () => {
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [logout] = useLogOutMutation();

  useEffect(() => {
    // Agregar la clase al body
    // document.body.classList.add("custom-bg");
    document.body.style.backgroundColor = 'rgba(255, 251, 251, 0.554)';

    logout().then(() => {
      Swal.fire({
        title: '¡Sesión cerrada!\nGracias Vuelva pronto :D',
        icon: 'success',
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
      }).then(() => {
        // Eliminar la clase del body
        // document.body.classList.remove("custom-bg");
        // Restaurar el fondo del cuerpo de la página
        document.body.style.backgroundColor = '';
        setShouldRedirect(true);
      });
    });
  }, [logout]);

  return shouldRedirect ? <Navigate to="/" /> : <Navigate to="/" />;
};

export default Logout;
