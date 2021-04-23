import React from 'react'
import { connect } from 'react-redux'
import CartItem from '../cart-item/cart-tem.component'
import FormButton from '../form-button/form-button.component'
import './cart-dropdown.style.scss'

const CartDropdown = ({ cartItems }:any) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {
          cartItems.map((cartItem:any) => <CartItem key={cartItem.id} item={cartItem} />)
        }
      </div>
      <FormButton>GO TO CHECKOUT</FormButton>
    </div>)
}

const mapStateToProps = ({ cart: { cartItems } }: any) => ({ cartItems })
export default connect(mapStateToProps)(CartDropdown)

