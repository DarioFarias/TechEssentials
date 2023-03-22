import { createContext, useState } from "react";

export const controlPanelContext = createContext();
const { Provider } = controlPanelContext;

export const ControlPanelContext = ({ children }) => {
    const [category, setCategory] = useState();

    const [product, setProduct] = useState();

    const actions = {
        category,
        setCategory,
        product,
        setProduct,
    };

    return <Provider value={actions}>{children}</Provider>;
};

export default ControlPanelContext;
