import React from "react";
import CartStyle from '../assets/css/cart.module.css'

const CartItem = ({item, onRemoveItem}) => {
  return (
        <div className={CartStyle['product-container']}>
          <img src={`http://localhost:8000${item.imageUrl}`} alt="" className={CartStyle['product-image']} />
          <div className={CartStyle['details-wrap']}>
            <h3>{item.name}</h3>
            <p>Rp. {item.price}</p>
          </div>
          <button className={CartStyle['remove-button']} onClick={()=> onRemoveItem(item.code)}>Remove</button>
        </div>
  )
};

export default CartItem;

