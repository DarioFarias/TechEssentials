import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { userContext } from "../context/UserContext";

const User = () => {
    const {userData} = useContext(userContext)
    const user = userData?.results
    return user ? (
        <Outlet />
    ) : (
        <Navigate to="/" replace={true} />
    );
};

export default User;
