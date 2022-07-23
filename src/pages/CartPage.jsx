import React from 'react'
import { useCart } from '../context/CartContext'

function CartPage() {
  const { state } = useCart()

  console.log(state.items);
  return (
    <div>CartPage</div>

  )
}

export default CartPage