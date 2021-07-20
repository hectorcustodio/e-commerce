import React from 'react'
import { connect } from 'react-redux'
import { Item } from '../../model'
import { removeItem } from '../../redux/cart/cart.actions'
import './checkout-item.styles.scss'

interface CheckoutItemInterface {
  item: Item,
  removeItemFromCart?: (item: Item) => any
}

const CheckoutItem = ({ item, removeItemFromCart }: CheckoutItemInterface) => {
  console.log(removeItemFromCart)
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={item.imageUrl} alt="item" />
      </div>
      <span className="name">{item.name}</span>
      <span className="quantity">{item.quantity}</span>
      <span className="price">{item.price}</span>
      <div className="remove-button" onClick={() => removeItemFromCart && removeItemFromCart(item)}>&#10005;</div>
    </div>
  )
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    removeItemFromCart: (item: Item) => dispatch(removeItem(item))
  }
}

export default connect(null, mapDispatchToProps)(CheckoutItem)