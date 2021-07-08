import React from 'react'
import { Item } from '../../model'
import './checkout-item.styles.scss'

const CheckoutItem = (item: Item) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={item.imageUrl} alt="item" />
      </div>
      <span className="name">{item.name}</span>
      <span className="quantity">{item.quantity}</span>
      <span className="price">{item.price}</span>
      <div className="remove-button">&#10005;</div>
    </div>
  )
}

export default CheckoutItem