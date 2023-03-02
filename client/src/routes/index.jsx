import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Payment from "../pages/Payment";
import Product from "../pages/Product";
import Products from "../pages/Products";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import Contact from "../pages/Contact"


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
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
        children: [
          {
            path: "/profile/cart",
            element: <Cart />,
            children: [
              {
                path: "/profile/cart/payment",
                element: <Payment />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  { path: "/login", element: <Login/> },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

export default router;
