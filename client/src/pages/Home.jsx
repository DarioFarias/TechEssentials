import ProductCard from "../components/ProductCard";
import Banner from "../components/Banner"

const Home = () => {
    return (
        <>
        <div className="flex w-full flex-wrap justify-evenly p-4 gap-4">
            <Banner/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
        </>
    );
};

export default Home;
