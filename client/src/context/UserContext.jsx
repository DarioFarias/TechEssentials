import { createContext, useEffect, useState } from "react";
import {
    useLazyGetUserByIdQuery,
    useMeQuery,
} from "../store/services/userService";

export const userContext = createContext();
const { Provider } = userContext;
export const UserContext = ({ children }) => {

    const [isLoged, setIsLoged] = useState(false);

    const { data, isError } = useMeQuery();

    const [getUserQuery,{data: userData }] =
    useLazyGetUserByIdQuery();

    useEffect(() => {
        if (data?.result) {
            getUserQuery(data?.result?.id)
            setIsLoged(true);
        }

        if (!data?.result) {
            setIsLoged(false);
        }
    }, [data?.result, isError]);

    const getIsLoged = () => {
        return isLoged;
    };


    const actions = {
        getIsLoged,
        userData,
    };

    return <Provider value={actions}>{children}</Provider>;
};

export default UserContext;
