import React from "react";
import CartStyle from '../../assets/css/cart.module.css';
import CartItem from '../../layouts/CartItem';
import { useState, useEffect } from "react";
import axios from "axios";

const Index = () => {
  const [cartItems, setCartItems] = useState([]);

  const totalPrice = () =>{
    return cartItems.reduce(
      (sum, item) => sum + Number(item.price), 0);
  }

  useEffect(()=>{
    async function fetchCart(){
      try {
        const response = await axios.get('http://localhost:8000/api/orders/user/1')
        // karena isi data dalam postman nya berupa array maka harus dipecah kedalam object terlebih dahulu
        let data = Object.assign({}, 
          ...(response.data.map(
            result => ({
              cart_items: result.products
            })
          ))
          )
          // Jika query aggregate backendnya (postman) bisa berupa object langsung bukan array maka bisa langsung: setCart(response.data.products)
          setCartItems(data.cart_items);

      } catch (error) {
        console.error('error fetching cart', error)
      }
    } fetchCart();
  }, []);

 async function removeFromCart(product){
  // Menghapus data di dalam server
  await axios.delete(`http://localhost:8000/api/orders/delete/user/1/product/${product}`)
  //  agar data yang di dalam view akan langsung hilang:
  const updatedCart = cartItems.filter(item => item.code !== product);
  setCartItems(updatedCart);
 } 

  return(
    <div>
      <div id="page-wrap">
          <h1 className={CartStyle['heading']}>Shopping Cart</h1>

          {/*Vue nya: <h1>Shopping</h1>
            <div
              v-for="item in cartItems"
              :key="item.id"
              class="product-container"
            >
            <img src="" alt="" className="product-image" /> */}
            {cartItems.map((item)=>(
              <CartItem key={item.id} item={item} onRemoveItem={removeFromCart}/>
            ))}

          <h3 className={CartStyle['total-price']}>Total: Rp {totalPrice()}</h3>
          <button className={CartStyle['checkout-button']}>
            Checkout
          </button>
      </div>
    </div>
  )
};

export default Index;