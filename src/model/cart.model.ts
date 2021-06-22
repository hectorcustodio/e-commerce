

export interface Item {
  id: number
  imageUrl: string,
  price: number,
  name: string,
  quantity: number
}

export interface CartInterface {
  visible?: boolean,
  cartItems: Item[]
}