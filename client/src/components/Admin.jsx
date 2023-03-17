import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { userContext } from "../context/UserContext";

const Admin = () => {
    const {getUser} = useContext(userContext)
    const user = getUser()
    return user?.role === "admin" ? (
        <Outlet />
    ) : (
        <Navigate to="/" replace={true} />
    );
};

export default Admin;
