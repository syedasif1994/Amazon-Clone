import React from 'react'
import "./totalamount.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from '../StateProvider';
import { getCartTotal } from '../reduce';


function TotalAmount() {

    const [{ cart }] = useStateValue();

    return (
        <>
        <div className='totalamount'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            TotalAmount ({cart.length} items):
                            <strong> {value}</strong>
                        </p>
                        <small className='totalamount_gift'>
                            <input type="checkbox" />This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getCartTotal(cart)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={" ₹ "}
            />
        </div>
        
        </>
    )
}

export default TotalAmount