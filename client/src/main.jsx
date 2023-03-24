import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import router from "./routes/index";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import UserContext from "./context/UserContext";
import CartContext from "./context/CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <UserContext>
                <CartContext>
                    <RouterProvider router={router} />
                </CartContext>
            </UserContext>
        </Provider>
    </React.StrictMode>
);
