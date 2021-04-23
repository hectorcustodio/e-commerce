import CartActionTypes from "./cart.types";

export const setVisibility = () => {
  return {
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
  }
}

export const addItem = (item:any) =>{
  return {
    type: CartActionTypes.ADD_ITEM,
    payload: item
  }
}