import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Payment from "../pages/Payment";
import Product from "../pages/Product";
import Products from "../pages/Products";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import Contact from "../pages/Contact";
import App from "../App";
import Admin from "../components/Admin";
import ControlPanel from "../pages/ControlPanel";
import Logout from "../components/Logout";
import User from "../components/User";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/products",
                element: <Products />,
            },
            {
                path: "/product",
                element: <Product />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/user",
                element: <User />,
                children: [
                    {
                        path: "/user/profile",
                        element: <Profile />,
                    },
                    {
                        path: "/user/payment",
                        element: <Payment />,
                    },
                    {
                        path: "/user/cart",
                        element: <Cart />,
                    },
                ],
            },
            {
                path: "/admin",
                element: <Admin />,
                children: [
                    {
                        index: true,
                        element: <ControlPanel />,
                    },
                ],
            },
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/logout",
        element: <Logout />,
    },
]);

export default router;
