import React, { useEffect, useState } from 'react'
import "./payment.css"
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from '../StateProvider';
import CurrencyFormat from 'react-currency-format';
import { getCartTotal } from '../reduce';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import {useNavigate} from "react-router-dom"
import axios from '../axios';


function Payment({ user }) {

  const [{ cart }] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();
  const history=useNavigate()

  const [error, setError] = useState(null)
  const [disabled, setDisabled] = useState(true)
  const [succeeded, setSucceeded] = useState(false)
  const [processing, setProcessing] = useState("")
  const [clientSecret, setClientSecret] = useState(true)

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      }
    }).then(()=>{
      setSucceeded(true)
      setError(null)
      setProcessing(false)
      history.replace("/orderlist")
    });
  }


  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        url: `/payments/create?total=${getCartTotal(cart)}`,
      })
      setClientSecret(response.data.clientSecret)
    }
    getClientSecret()
  }, [cart])
  
  console.log("Secret is >>>>>>",clientSecret);


  const handleChange = (event) => {
    setDisabled(event.empty)
    setError(event.error ? event.error.message : "")
  }

  return (
    <div className='payment'>

      <div className='payment_container'>
        <div className='payment_address'>
          <div className="payment_title">
            <h1>Delivery Address</h1>
          </div>
          <div className="payment_addressInfo">
            <p>{user?.email}</p>
            <p>Room no: 123, Building: XYZ</p>
            <p>Kharghar:410210</p>
            <p>Navi Mumbai,India.</p>
          </div>
        </div>
        <div className='payment_main'>
          <div className='payment_item'>

            <h1>Checkout (
              {cart.length || "0"} Items
              )
            </h1>

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

          <div className='payment_method'>

            <form onsubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className='payment_methodContainer'>

                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <p>
                        TotalAmount ({cart.length} items):
                        <strong> {value}</strong>
                      </p>
                    </>
                  )}
                  decimalScale={2}
                  value={getCartTotal(cart)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={" ₹ "}
                />

                <button disabled={processing || disabled || succeeded} className="payment_btn" type="submit">
                  <span> {processing ? <p>Processing</p> : "Buy Now"} </span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Payment