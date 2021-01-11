import React,{ forwardRef } from 'react'
import { useStateValue } from '../data/StateProvider'
import FlipMove from "react-flip-move"
import CheckoutProduct from '../modals/CheckoutProduct';
import Subtotal from '../modals/Subtotal'
import './checkout.css'

function Checkout() {
    const [{basket, user}, dispatch] = useStateValue();
    const FunctionalArticle = forwardRef((props, ref) => (
      <div ref={ref}>
        {props.itemName}
      </div>
    ));
    
    return (
        <div className="checkout">
           <div className="checkoutLeft">
             <img className="checkoutAd" src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/GiftCards/LPAIndia/Header/170_AP_1500x300.jpg" alt=""/>
             <div>
              <h3>Hello {user ? user?.email.split("@", 1) : "Guest, Sign In to check out"}</h3> 
              <h2 className="checkoutTitle">
                Your Shopping Basket
              </h2> 
                <FlipMove>
                  {basket.map(item => {
                    return <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                  /> 
                    // return <FunctionalArticle key={item.id} {...item}>
                          
                    // </FunctionalArticle>
                  })}
               </FlipMove>
            </div> 
           </div>
           <div className="checkoutRight"> 
                <Subtotal/>   
           </div>
        </div>
    )
}

export default Checkout
