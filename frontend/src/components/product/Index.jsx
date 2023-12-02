import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Styles from '../../assets/css/product.module.css'
import '../../index.css'
import ProductItem from '../../layouts/ProductItem';

const Index = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get('http://localhost:8000/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
  
    fetchProducts();
  }, []);
  
  return (
    <div id="page-wrap">
      <div className={Styles['grid-wrap']}>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} /> /* nama productnya itu (kiri) harus sesuai dengan props pada productItem */
        ))}
      </div>
    </div>
  );
}

export default Index;