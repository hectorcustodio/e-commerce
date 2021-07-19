import { Item } from "../../model"

export const addItemToCart = (cartItems: Item[], cartItemToAdd: Item) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id)
  if (existingCartItem) {
    return cartItems.map(
      item => item.id === cartItemToAdd.id ?
        { ...item, quantity: item.quantity + 1 } : item)
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

export const removeItemFromCart = (cartItems: Item[], itemToRemove: Item) => {
  return cartItems.filter((item: Item) => item.id !== itemToRemove.id)
}