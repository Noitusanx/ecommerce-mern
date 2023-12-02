import React from "react";
import { Link } from "react-router-dom";
import Styles from '../assets/css/product.module.css'

const ProductItem = ({product}) => {
  return (
    <div className={`${Styles.product} ${Styles['product-item']}`}>
      {/* Memberikan url pada gambarnya sehingga gambarnya bisa kelihatan */}
        <img src={`http://localhost:8000${product.imageUrl}`} alt={product.name} className={Styles['img-product']}/>
        <h3>{product.name}</h3>
        <p>Rp {product.price}</p>
        <Link to={`/product-detail/${product.code}`}>
            <button>Details</button>
        </Link>
    </div>
  )
};



export default ProductItem;