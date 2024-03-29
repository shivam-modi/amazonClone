import React from 'react'
import moment from "moment"
import './order.css'
import CurrencyFormat from "react-currency-format";
import CheckoutProduct from './CheckoutProduct'

function Order({ order }) {
    return (
        <div className="order">
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
            <p className="orderId">
                <small>{order.id}</small>
            </p>
            {order.data.basket?.map(item => (
                <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                hideButton
              />
            ))}
            <CurrencyFormat 
                renderText={(value) => (
                    <>
                    <h3>Order Total: {value}</h3>
                    </>
                )}
                    decimalScale={2}
                    value={order.data.amount / 100}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
            /> 
        </div>
    )
}

export default Order
