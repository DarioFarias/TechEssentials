import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useMeQuery } from "../store/services/userService";

const Admin = () => {
    const { data, isLoading} = useMeQuery();

    return isLoading ? (
        <p>Cargando...</p>
    ) : data?.result.role === "admin" ? (
        <Outlet />
    ) : (
        <Navigate to="/" replace={true} />
    );
};

export default Admin;
