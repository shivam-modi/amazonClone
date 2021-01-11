import React from 'react'
import "./product.css"
import { useStateValue } from "../data/StateProvider";

function Product({id, title, image, price, rating}) {
    const [{basket}, dispatch] = useStateValue();

    //console.log("this is in basket...", basket)

    const addToBasket = () =>{
        //dispatch the item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
               id: id,
               title: title,
               image: image,
               price: price,
               rating: rating 
            }
        })
    }
    return (
        <div className="product">
            <div className="productInfo">
                <p>{title}</p>
                <p className="productPrice">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="productRating">
                    {/* {Array(rating).fill().map((_, i) => (
                      <p>⭐</p> 
                    ))} */}
                    {/* Another implementation */}
                    {<p> {"⭐".repeat(rating)}</p>}
                </div>
            </div>
            <img src={image} alt=""/>
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
