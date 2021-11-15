import React from 'react'
import { connect } from 'react-redux'
import { Item } from '../../model'
import { clearItem, addItem, removeItem } from '../../redux/cart/cart.actions'
import './checkout-item.styles.scss'

interface CheckoutItemInterface {
  item: Item,
  removeItemFromCart: (item: Item) => any,
  addItem: (item: Item) => any,
  clearItem: (item: Item) => any,
}

const CheckoutItem = ({ item, removeItemFromCart, clearItem, addItem }: CheckoutItemInterface) => {
  console.log(removeItemFromCart)
  const { imageUrl, name, quantity, price } = item;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => removeItemFromCart(item)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(item)}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={() => clearItem(item)}>
        &#10005;
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    addItem: (item: Item) => dispatch(addItem(item)),
    clearItem: (item: Item) => dispatch(clearItem(item)),
    removeItemFromCart: (item: Item) => dispatch(removeItem(item))
  }
}

export default connect(null, mapDispatchToProps)(CheckoutItem)