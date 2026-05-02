import React from 'react'

function Cart({ cart }){
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.name} is in your cart.</li>
        ))}
      </ul>
    </div>
  )
}

export default Cart