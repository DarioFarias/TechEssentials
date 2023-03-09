import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useGetAllCategoriesQuery } from "../store/services/categoryService";
import { useGetProductsByCategoryIdQuery } from "../store/services/productService";

const Products = () => {
    const { data, isError, isLoading, error } = useGetAllCategoriesQuery();
    const [idCategory, setIdCategory] = useState("");
    const {
        data: products,
        isError: isProductsError,
        isLoading: isProductsLoading,
        error: ProductsError,
    } = useGetProductsByCategoryIdQuery(idCategory);
    const categories = data;
    const handleCategorySelect = (event) => {
        const selectedCategory = categories.find(
            (category) => category.name === event.target.value
        );
        if (selectedCategory) {
            setIdCategory(selectedCategory.Id);
        }
    };

    return (
        <>
            <div className="flex bg-black w-full p-4 justify-evenly flex-wrap gap-4">
                <div className="relative w-60">
                    <select
                        className="border border-gray-300 rounded-md px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:border-indigo-700 focus:ring-2 focus:ring-indigo-700 w-full appearance-none"
                        onChange={handleCategorySelect}
                    >
                        <option value="">Seleccione una categoría</option>
                        {isLoading && !isError ? (
                            <option value="">Cargando categorías...</option>
                        ) : (
                            categories.map((category, key) => {
                                return (
                                    <option key={key}>{category.name}</option>
                                );
                            })
                        )}
                    </select>
                </div>
                <div className="relative w-60">
                    <input
                        type="text"
                        list="precios"
                        name="precios"
                        id="precio"
                        className="border border-gray-300 rounded-md px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:border-indigo-700 focus:ring-2 focus:ring-indigo-700 w-full appearance-none"
                        placeholder="Rango de precio"
                    />
                    <datalist id="precios">
                        <option value="<$2001" />
                        <option value="$2001-$4000" />
                        <option value="$4001-$6000" />
                        <option value="$6001-$8000" />
                        <option value="$8000<" />
                    </datalist>
                </div>
            </div>
            <div className="flex w-full flex-wrap justify-evenly p-4 gap-4">
                {isProductsError ? (
                    <section>No hay productos para mostrar</section>
                ) : isProductsLoading ? (
                    <section>Cargando</section>
                ) : (
                    products && products.map((product, key) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                )}
            </div>
        </>
    );
};

export default Products;
