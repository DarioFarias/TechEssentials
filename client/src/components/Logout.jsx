import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LogoutPage from "../pages/LogoutPage";
import { useLogOutMutation } from "../store/services/userService";

const Logout = () => {

  const navigate = useNavigate();
  const [logout] = useLogOutMutation()

  useEffect(() => {
    logout();
    setTimeout(() => {
        navigate("/")
    }, 3000);
    return clearTimeout();
  }, []);
  return <LogoutPage/>;
};

export default Logout;