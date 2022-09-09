import React from 'react'
import "./checkout.css"
import CheckoutProduct from './CheckoutProduct'
import TotalAmount from "./TotalAmount"
import { useStateValue } from '../StateProvider'
import {Link} from "react-router-dom"


function Checkout({ user }) {

  const [{ cart }] = useStateValue();

  return (
    <>
      <div className="checkout">
        <div className="checkout_container">
          {/* ----------------- Section 01: Checkout_left  ----------------- */}
          <div className="checkout_left">
            <div className='underline'>
              <div className="underline_product"></div>
              <div className="underline_paymentGateway"></div>
              <div className="underline_payment"></div>
            </div>
            <div className='checkout_title'>
              <h4>Hello,{user?.email || " Guest"}</h4>
              <h2>Your Shopping Cart</h2>
            </div>

            {cart.map((item) => {
              const { id, product_name, product_price, imagepic, product_rating } = item;
              return (
                <>
                  <CheckoutProduct
                    id={id}
                    product_name={product_name}
                    product_price={product_price}
                    imagepic={imagepic}
                    product_rating={product_rating}
                  />
                </>
              )
            })}
          </div>

          {/* ----------------- Section 02: Checkout_Right  ----------------- */}
          <div className="checkout_right">
            <div className="checkout_payment">
              <TotalAmount />
              <Link to="/payment">
              <button className='totalamount_btn'>Proceed for checkout</button>
              </Link>
            </div>

          </div>
        </div>

      </div>

    </>
  )
}

export default Checkout