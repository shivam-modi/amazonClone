import React from 'react'
import { useStateValue } from '../data/StateProvider'
import "./checkoutProduct.css"

function CheckoutProduct({id, image, title, price, rating, hideButton}) {
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
       // remove item from basket
       dispatch({
           type: "REMOVE_FROM_BASKET",
           id: id
       })
    }

    return (
        <div className="checkoutProduct">
            <img src={image} className="checkoutProductImage"/>
            <div className="checkoutProductInfo">
                <p className="checkoutProductTitle">
                   {title} 
                </p>
                <p className="checkoutProductPrice">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProductRating">
                   <p>{"⭐".repeat(rating)}</p>
                </div>
                {!hideButton && ( <button onClick={removeFromBasket}>Remove from Cart</button> )}
            </div>
        </div>
    )
}

export default CheckoutProduct
