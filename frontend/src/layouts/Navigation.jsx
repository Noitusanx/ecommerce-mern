import React from "react";
import { Link } from "react-router-dom";
import NavStyle from '../assets/css/navbar.module.css'

const Navigation = () => {
  return (
    <div className={NavStyle['nav-bar']}>
        <Link to='/' className={NavStyle['products-link']}>
            <h1 className={NavStyle['header-link']}>ReactStore</h1>
        </Link>
        <Link to='/shopping' className={NavStyle['cart-link']}>
            <button>Cart</button>
        </Link>
    </div>



    // <nav>
    //     <ul>
    //         <li>
    //             <Link to="/">Product</Link>
    //         </li>
    //         <li>
    //             <Link to="/product-detail/1">Detail Products</Link>
    //         </li>
    //         <li>
    //             <Link to="/shopping">Shopping</Link>
    //         </li>
    //     </ul>
    // </nav>
  );
};

export default Navigation;
