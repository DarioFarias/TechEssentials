import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import LogoutPage from "../pages/LogoutPage";
import { useLogOutMutation } from "../store/services/userService";

const Logout = () => {
    const [shouldRedirect, setShouldRedirect] = useState(false);
    const [logout] = useLogOutMutation();
  
    useEffect(() => {
      const timeout = setTimeout(() => {
        logout().then(() => {
          setShouldRedirect(true);
        });
      }, 3000);
      return () => clearTimeout(timeout);
    }, [logout]);
  
    return shouldRedirect ? <Navigate to="/" /> : <LogoutPage />;
  };
  
  export default Logout;