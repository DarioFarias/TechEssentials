import ProductCard from '../components/ProductCard';
import Banner from '../components/Banner';
import { useGetAllProductsQuery } from '../store/services/productService';
import { useContext } from 'react';
import { userContext } from '../context/UserContext';

const Home = () => {
  const { data, isError, isLoading, error } = useGetAllProductsQuery();
  const products = data;

  return (
    <>
      <div className="flex w-full flex-wrap justify-evenly p-4 gap-4">
        <Banner />
        {isLoading && !isError ? (
          <section>Loading...</section>
        ) : (
          products &&
          products.map((product, key) => {
            return <ProductCard key={product.id} product={product} />;
          })
        )}
      </div>
    </>
  );
};

export default Home;
