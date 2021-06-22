import { CartInterface } from "../../model"
import CartActionTypes from "./cart.types"
import { addItemToCart } from "./cart.utils"
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
    default:
      return state
  }
}

export default cartReducer;