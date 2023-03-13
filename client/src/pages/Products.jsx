import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useGetAllCategoriesQuery } from "../store/services/categoryService";
import { useGetProductsByFiltersMutation } from "../store/services/productService";

const Products = () => {
    const { data, isError, isLoading, error } = useGetAllCategoriesQuery();
    const [idCategory, setIdCategory] = useState();
    const [minPrice, setMinPrice] = useState();

    const [maxPrice, setMaxPrice] = useState();

    const [
        filter,
        {
            data: products,
            isError: isProductsError,
            isLoading: isProductsLoading,
            error: ProductsError,
        },
    ] = useGetProductsByFiltersMutation();

    const categories = data;

    const handleCategorySelect = (event) => {
        const selectedCategory = categories.find(
            (category) => category.name === event.target.value
        );
        selectedCategory ? setIdCategory(selectedCategory.Id) : setIdCategory();
    };

    const handlePriceRangeSelect = (event) => {
        const selectedOption = event.target.value;

        switch (selectedOption) {
            case "Sin rango de precio":
                setMinPrice();
                setMaxPrice();
                break;
            case "-$2001":
                setMinPrice(0);
                setMaxPrice(2000);
                break;
            case "$2001-$6000":
                setMinPrice(2001);
                setMaxPrice(6000);
                break;
            case "$6001-$10000":
                setMinPrice(6001);
                setMaxPrice(10000);
                break;
            case "$10001-$14000":
                setMinPrice(10001);
                setMaxPrice(14000);
                break;
            case "$14000+":
                setMinPrice(14001);
                setMaxPrice(1000000);
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        filter({ idCategory, minPrice, maxPrice });
    }, [idCategory, minPrice, maxPrice]);

    return (
        <div className="flex flex-col">
            <div className="flex bg-black w-full p-4 justify-evenly flex-wrap gap-4">
                <div className="relative w-60">
                    <select
                        className="border border-gray-300 rounded-md px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:border-indigo-700 focus:ring-2 focus:ring-indigo-700 w-full appearance-none"
                        onChange={handleCategorySelect}
                    >
                        <option value="">Todas las categorias</option>
                        {isLoading && !isError ? (
                            <option value="">Cargando categorías...</option>
                        ) : (
                            categories &&
                            categories.map((category, key) => {
                                return (
                                    <option key={key}>{category.name}</option>
                                );
                            })
                        )}
                    </select>
                </div>
                <div className="relative w-60">
                    <select
                        type="text"
                        list="precios"
                        name="precios"
                        id="precio"
                        className="border border-gray-300 rounded-md px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:border-indigo-700 focus:ring-2 focus:ring-indigo-700 w-full"
                        onChange={handlePriceRangeSelect}
                    >
                        <option>Sin rango de precio</option>
                        <option>-$2001</option>
                        <option>$2001-$6000</option>
                        <option>$6001-$10000</option>
                        <option>$10001-$14000</option>
                        <option>$14000+</option>
                    </select>
                </div>
            </div>
            <div className="flex w-full flex-wrap justify-evenly p-4 gap-4">
                {isProductsError ? (
                    <section>No hay productos para mostrar</section>
                ) : isProductsLoading ? (
                    <section>Cargando</section>
                ) : (
                    products &&
                    products.map((product, key) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                )}
            </div>
        </div>
    );
};

export default Products;
