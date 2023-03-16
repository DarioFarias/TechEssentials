import { createContext, useEffect, useState } from "react";
import {
    useLazyGetUserByIdQuery,
    useMeQuery,
} from "../store/services/userService";

export const userContext = createContext();
const { Provider } = userContext;
export const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);

    const [updateUser, setUpdateUser] = useState(false)

    const [isLoged, setIsLoged] = useState(false);

    const { data, isError } = useMeQuery();

    const [getUserQuery, {isError: userIsError, isLoading:userIsLoading }] =
    useLazyGetUserByIdQuery();


    const setUserState = async () => {
        const userData = await getUserQuery(data?.result?.id);
        userIsError ? setUser(null) : userIsLoading ? null : setUser(userData?.data?.results)
    };

    const toggleIsLoged = () => {
        setIsLoged(!isLoged);
    };

    const toggleUpdateUser = () => {
        setUpdateUser(!updateUser);
    };

    useEffect(() => {
        if (data) {
            setUserState();
            setIsLoged(true);
        }

        if (!data) {
            setUser(null);
            setIsLoged(false);
        }
    }, [data, isError, updateUser]);

    const getUser = () => {
        return user;
    };

    const getIsLoged = () => {
        return isLoged;
    };


    const actions = {
        getUser,
        getIsLoged,
        toggleUpdateUser
    };

    return <Provider value={actions}>{children}</Provider>;
};

export default UserContext;
