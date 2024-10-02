import React, { useEffect, useState } from 'react';
import styles from './Products.module.css';
import ProductGridCard from '../../Components/ProductGridCard/ProductGridCard';
import SkeletonGridCard from '../../Components/SkeletonGridCard/SkeletonGridCard';
import { GetProducts } from '../../utils/Api/ProductsApi';

function Products() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const productData = await GetProducts();

      if (productData) {
        setProducts(productData.data);
      }
      setLoading(false);
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
