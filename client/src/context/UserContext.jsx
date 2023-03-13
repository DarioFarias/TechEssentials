
import { createContext, useEffect, useState } from "react";
import { useMeQuery } from "../store/services/userService";


export const userContext = createContext();
const { Provider } = userContext;
export const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);

    const [isLoged, setIsLoged] = useState(false);
    
    const { data, isError} = useMeQuery();
        
    useEffect(() => {
        if (data) {
            setUser(data.result);
            setIsLoged(true);
        }
        
        if (isError) {
            setUser(null);
            setIsLoged(false);
        }
    }, [data, isError]);

    const getUser = () =>{
        return user
    }

    const getIsLoged = () =>{
        return isLoged
    }
    
    const actions = {
        getUser,
        getIsLoged
    };

    return <Provider value={actions}>{children}</Provider>;
};

export default UserContext;
