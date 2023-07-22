import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

const RouteGuard = ({ component: Component, ...rest }) => {
    const { user } = useAuthContext();

    return user ? <Outlet {...rest} /> : <Navigate to={"/login"}></Navigate>;
};

export default RouteGuard;
