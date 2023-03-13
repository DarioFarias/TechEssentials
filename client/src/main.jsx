import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import router from "./routes/index";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import UserContext from "./context/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <UserContext>
                <RouterProvider router={router} />
            </UserContext>
        </Provider>
    </React.StrictMode>
);
