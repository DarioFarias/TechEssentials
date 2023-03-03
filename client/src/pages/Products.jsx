import ProductCard from "../components/ProductCard";

const Products = () => {
    return (
        <>
            <div className="flex bg-black w-full p-4 justify-evenly flex-wrap gap-4">
                <div class="relative">
                    <input
                        type="text"
                        list="categorias"
                        name="categoria"
                        id="categoria"
                        className="border border-gray-300 rounded-md px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:border-indigo-700 focus:ring-2 focus:ring-indigo-700 w-full appearance-none"
                        placeholder="Categoria"
                    />
                    <datalist id="categorias">
                        <option value="Celulares" />
                        <option value="Tabletas" />
                        <option value="Audifonos" />
                        <option value="Manos Libres" />
                        <option value="Baterias" />
                    </datalist>
                </div>
                <div class="relative">
                    <input
                        type="text"
                        list="precios"
                        name="precios"
                        id="precio"
                        className="border border-gray-300 rounded-md px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:border-indigo-700 focus:ring-2 focus:ring-indigo-700 w-full appearance-none"
                        placeholder="Rango de precio"
                    />
                    <datalist id="precios">
                        <option value="<$1000" />
                        <option value="$1001-$2000" />
                        <option value="$2001-$3000" />
                        <option value="$3001-$4000" />
                        <option value="$4001<" />
                    </datalist>
                </div>
            </div>
            <div className="flex w-full flex-wrap justify-evenly p-4 gap-4">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </>
    );
};

export default Products;
