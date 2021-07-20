// Copyright 2021 Hector Augusto Custódio

import { CartInterface } from "../../model"
import CartActionTypes from "./cart.types"
import { addItemToCart, removeItemFromCart } from "./cart.utils"
const INITIAL_STATE: CartInterface = {

  
  visible: true,
  cartItems: []
}

const cartReducer = (state: CartInterface = INITIAL_STATE, action: any) => {
  console.log('REDUCER', state, action)
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        visible: !state.visible
        
      }
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      }
    case CartActionTypes.REMOVE_ITEM:
      return{
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      }
    default:
      return state
  }
}

export default cartReducer;