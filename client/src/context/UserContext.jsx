import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";

export const userContext = createContext();
const { Provider } = userContext;

export const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoged, setIsLoged] = useState(false);
    
    
    const setLogin = () => {
        setUser(Cookies.get("token"));
    };
    
    const setLogout = () => {
        Cookies.remove("token");
        setIsLoged(false);
        setUser(null);
    };
    
    useEffect(() => {
        const token = Cookies.get("token");
        if (token) {
            setUser(token);
            setIsLoged(true);
        }
        
        if (!token || token === null) {
            setUser(null);
            setIsLoged(false);
        }
    }, [setLogin, setLogout]);
    
    const actions = {
        setLogout,
        setLogin,
        user,
        isLoged,
    };

    return <Provider value={actions}>{children}</Provider>;
};

export default UserContext;
