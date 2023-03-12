
import { createContext, useEffect, useState } from "react";

export const filterContext = createContext();
const { Provider } = filterContext;

export const FilterContext = ({ children }) => {
    const [categoryFilter, setCategoryFilter] = useState(undefined);
    const [priceFilter, setPriceFilter] = useState(undefined);
     
    const actions = {
        categoryFilter,
        setCategoryFilter,
        priceFilter,
        setPriceFilter,
    };

    return <Provider value={actions}>{children}</Provider>;
};

export default FilterContext;