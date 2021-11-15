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

export const removeItem = (cartItems: Item[], cartItemToRemove: Item) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id)
  if (!existingCartItem) return
  if (cartItemToRemove.quantity === 1) return clearItem(cartItems, cartItemToRemove)

  return cartItems.map(
    item => item.id === cartItemToRemove.id ?
      { ...item, quantity: item.quantity - 1 } : item)

}


export const clearItem= (cartItems: Item[], itemToRemove: Item) => {
  return cartItems.filter((item: Item) => item.id !== itemToRemove.id)
}