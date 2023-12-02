import { useState, useEffect } from "react";
import StylesDetails from '../../assets/css/detail.module.css'
import '../../index.css'
import NotFound from '../errors/error';
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = ({}) => {
    const {id} = useParams();
    const [product, setProducts] = useState({});
    const [addToCartText, setAddToCartText] = useState('Add to cart')

    useEffect(()=>{
      async function fetchDetail(){
        try{
          const response = await axios.get(`http://localhost:8000/api/products/${id}`);
          setProducts(response.data);
        } catch(error){
          console.log('error fetching product', error);
        }
      }
      fetchDetail();
    }, [id]);

    async function addToCart(product){
      await axios.post('http://localhost:8000/api/orders/user/1/add', {product: product}) /* nilai product tersebut merupakan yang terdapat pada body request di postman */
      setAddToCartText('Product added successfully');
    }
    
  return(
    <div>
      {/* <h1>Detail Product {id}</h1> */}
      {product.id? ( <div id="page-wrap" className={StylesDetails['page-wrap']}>
        <div id="img-wrap" className={StylesDetails['img-wrap']}>
            <img src={`http://localhost:8000${product.imageUrl}`} alt={product.name} className={StylesDetails['img-details']} />
        </div> 
        <div id="product-details" className={StylesDetails['product-details']}>
            <h1>{product.name}</h1>
            <h3 id="price" className={StylesDetails['price']}>Rp. {product.price}</h3>
            <p>Average rating: {product.averageRating}</p>
            <button id="add-to-cart" className={StylesDetails['add-to-cart']} onClick={()=>addToCart(product.code)}>{addToCartText}</button>
            <p>{product.description}</p>
        </div>
      </div>): (<NotFound/>)
    }
    </div>
  )
};

export default Detail;

