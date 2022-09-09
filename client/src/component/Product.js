import React from 'react'
import "./product.css"
import DefaultImage from "./pic.webp"
import { useStateValue } from '../StateProvider'

function Product(props) {

  const {id,product_name,product_price,imagepic,product_rating }= props;

  const [{ cart }, dispatch] = useStateValue();
  console.log("Add", cart);

  const addtoCart = () => {
    dispatch({
      type: "ADD_CART",
      item: {
        id: id,
        product_name: product_name,
        imagepic: imagepic,
        product_price: product_price,
        product_rating: product_rating,
      },
    });
  };

  return (
    <div className='product' key={id}>
      <div className='product-info'>
        <p className='product_title'>{product_name}</p>
        <p className='product_price'> ₹ <strong>{product_price}</strong></p>
        <div className='product_rating'>
          {Array(product_rating).fill().map((_, i) => <p>⭐</p>)}
        </div>
      </div>
      <img src={imagepic || DefaultImage} alt={product_name} />
      <button type="submit" onClick={addtoCart}>Add to Cart</button>
    </div>
  )
}

export default Product