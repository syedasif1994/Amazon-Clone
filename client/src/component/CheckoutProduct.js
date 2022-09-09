import React from 'react'
import { useStateValue } from '../StateProvider';
import "./checkoutproduct.css"

function CheckoutProduct(props) {

    const { id, product_name, product_price, imagepic, product_rating } = props;
    const [{ cart },dispatch] = useStateValue();

console.log(cart)

const removetocart = () => {
    dispatch({
        type:"REMOVE_CART",
        id:id,
    })
}

    return (
        <>
            <div className='products'>

                <img src={imagepic} alt={product_name} className="products_img" />
                <div className='products_info'>
                    <p className='products_title'>{product_name}</p>
                    <p className='products_price'> ₹ <strong>{product_price}</strong></p>
                    <div className='products_rating'>
                        {Array(product_rating).fill().map((_, i) => <p>⭐</p>)}
                    </div>
                    <button className='products_btn' type="submit" onClick={removetocart}>Remove to Cart</button>
                </div>

            </div>

        </>
    )
}

export default CheckoutProduct