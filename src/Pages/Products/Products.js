import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Products.module.css';
import ProductGridCard from '../../Components/ProductGridCard/ProductGridCard';
import SkeletonGridCard from '../../Components/SkeletonGridCard/SkeletonGridCard';

function Products() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/products'); // Ensure the URL is correct
        setProducts(response.data); // Set products state with fetched data
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); // Ensure loading is false even on error
      }
    };

    fetchData();
  }, []);

  return (
    <div className={`${styles['products-container']}`}>
      {loading ? (
        // Display skeleton cards while loading
        Array.from({ length: 9 }).map((_, index) => (
          <SkeletonGridCard key={index} />
        ))
      ) : (
        // Map through products and display ProductGridCard for each
        products.map((product) => (
          <ProductGridCard
            key={product.id}
            id={product.id}
            description={product.description}
            salePrice={product.salePrice}
            category={product.category}
            image={product.image}
          />
        ))
      )}
    </div>
  );
}

export default Products;
