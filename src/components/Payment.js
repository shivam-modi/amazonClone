import React, { useEffect, useState } from 'react'
import CheckoutProduct from '../modals/CheckoutProduct'
import { useStateValue } from '../data/StateProvider'
import "./payment.css"
import { Link, useHistory } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../data/reducer';
import axios from '../axios';
import { db } from '../firebase';

export default function Payment() {
    const [{basket, user}, dispatch] = useStateValue();
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [clientSecret, setClientSecret] = useState(true);
    const history = useHistory(); 

    useEffect(() => {
       // generate the special stripe secret or OTP
       const getClientSecret = async () => {
          const response = await axios({
              method: 'post',
              //stripe expects the total curenccy submits in cents
              url: `/payments/create?total=${getBasketTotal(basket) * 100}` // in cents
          });
          setClientSecret(response.data.clientSecret)
          console.log(response.data.clientSecret)
       } 
       getClientSecret();
    }, [basket])

    const stripe = useStripe();
    const elements = useElements();
   
    const handleChange = e => {
       setDisabled(e.empty);
       setError(e.error ? e.error.message : "")
    }
  
    const handleSubmit = async (e) => {
       e.preventDefault();
       setProcessing(true);
       
       const payload = await stripe.confirmCardPayment(clientSecret, {
           payment_method: {
               card: elements.getElement(CardElement)
           }
       }).then(({paymentIntent}) => {
           // paymentIntent = payment Confirmation

           db.collection('users').doc(user?.uid)
                                 .collection("orders")
                                 .doc(paymentIntent.id)
                                 .set({
                                     basket: basket,
                                     amount: paymentIntent.amount,
                                     created: paymentIntent.created
                                 })  

           setSucceeded(true);
           setError(false);
           setProcessing(false);

           dispatch({
               type: 'EMPTY_BASKET'
           })

           history.replace('/orders')
       })
    }

    return (
        <div className="payment">
            <div className="paymentContainer">
                <h1>
                    Checkout (<Link to="/checkout">{basket?.length} items</Link>)
                </h1>
               <div className="paymentSection">
                 <div className="paymentTitle">
                    <h3>Delivery Address</h3> 
                 </div>
                 <div className="paymentAddress">
                     <p>{user?.email}</p>
                     <p>123 Mohan Garden</p>
                     <p>New Delhi, India</p>
                 </div>
               </div>
               <div className="paymentSection">
                 <div className="paymentTitle">
                   <h3>Review items and delivery</h3>
                 </div>  
                 <div className="paymentItems">
                   {basket.map(item => (
                      <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                   ))}
                 </div>
               </div>
               <div className="paymentSection">
                 <div className="paymentTitle">
                   <h3>Payment Method</h3>
                 </div>  
                 <div className="paymentDetails">
                   {/* Stripe use */}
                   <form onSubmit={handleSubmit}>
                       <CardElement onChange={handleChange}/>
                       <div className="paymentPriceContainer">
                          <CurrencyFormat 
                            renderText={(value) => (
                                <>
                                <h3>Order Total: {value}</h3>
                                </>
                            )}
                             decimalScale={2}
                             value={getBasketTotal(basket)}
                             displayType={"text"}
                             thousandSeparator={true}
                             prefix={"$"}
                          /> 
                          <button disabled={processing || disabled || succeeded}>
                              <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
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
