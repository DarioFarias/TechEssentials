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
import Layout from "../layouts/Layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
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
                path: "/profile",
                element: <Profile />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/payment",
                element: <Payment />,
            },
            {
                path: "/cart",
                element: <Cart />,
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
]);

export default router;
