import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../context/UserContext";
import LogoutPage from "../pages/LogoutPage";
import { useLogOutMutation } from "../store/services/userService";

const Logout = () => {
    const {setLogout} = useContext(userContext)

  const navigate = useNavigate();
  const [logout] = useLogOutMutation()

  useEffect(() => {
    logout();
    setTimeout(() => {
        setLogout()
        navigate("/")
    }, 3000);
    return clearTimeout();
  }, []);
  return <LogoutPage/>;
};

export default Logout;