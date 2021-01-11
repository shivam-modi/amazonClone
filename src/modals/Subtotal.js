import React from 'react'
import CurrencyFormat from "react-currency-format";
import { useHistory } from 'react-router-dom';
import { getBasketTotal } from '../data/reducer';
import { useStateValue } from '../data/StateProvider';
import './subtotal.css'

function Subtotal() {
    const history = useHistory(); 
    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="subtotal">
          <CurrencyFormat 
            renderText={(value) => (
                <div>
                 <p>
                   Subtotal ({basket?.length} items):
                   <strong> {value}</strong>  
                 </p>
                 <small className="subtotalGift">
                     <input type="checkbox" style={{marginRight: '5px'}}/> This order conatins a gift
                 </small>
                </div>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />  
          <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
