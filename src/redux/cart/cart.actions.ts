import { Item } from "../../model";
import CartActionTypes from "./cart.types";

export const setVisibility = () => {
  return {
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
  }
}

export const addItem = (item: any) => {
  return {
    type: CartActionTypes.ADD_ITEM,
    payload: item
  }
}

export const clearItem = (item: Item) => {
  
  return {
    type: CartActionTypes.CLEAR_ITEM,
    payload: item
  }
}

export const removeItem = (item: Item) => {
  
  return {
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
  }
}