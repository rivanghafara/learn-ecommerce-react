import { createContext, useContext, useReducer } from "react";

const CartContext = createContext()

function cartReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      let itemToIncrement = state.items.find(item => item.id === action.payload.id)
      if (!itemToIncrement) {
        state.items.unshift(action.payload)
      } else {
        state.items = state.items.map(item => {
          if (item.id === action.payload.id) {
            return { ...item, item_count: item.item_count + 1 }
          }
          return item
        })
      }
      return { ...state, count: state.count + 1 }
    case "DECREMENT":
      let itemToDecrement = state.items.findIndex(item => {
        if (item.id === action.payload.id && item.item_count === 1) {
          return item
        }
        return null
      })

      if (itemToDecrement >= 0) {
        state.items.splice(itemToDecrement, 1)
      }
      state.items = state.items.map(item => {
        if (item.id === action.payload.id) {
          return { ...item, item_count: item.item_count - 1 }
        }
        return item
      })
      if (state.count - 1 < 0) {
        state.count = 0
      } else {
        state.count--
      }
      return { ...state, count: state.count }
    default:
      throw new Error('action.type not available')
  }
}

function CartProvider({ children }) {
  // useReducer take 2 arguments, reducer function and initialValue
  const [state, dispatch] = useReducer(cartReducer, { count: 0, items: [] })
  const value = { state, dispatch }
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

function useCart() {
  const context = useContext(CartContext)
  if (typeof context === 'undefined') {
    throw new Error(`CartConsumer must be used within a CartProvider`)
  }
  return context
}

export { CartProvider, useCart }