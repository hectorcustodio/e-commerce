import React from 'react'
import { connect } from 'react-redux'
import { CartInterface, Item } from '../../model'
import { StateInterface } from '../../model/state-interface'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import CartItem from '../cart-item/cart-tem.component'
import FormButton from '../form-button/form-button.component'
import './cart-dropdown.style.scss'

const CartDropdown = ({ cartItems }: CartInterface) => {
  console.log(cartItems)
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {
          cartItems && cartItems.map((cartItem: Item) => <div key={cartItem.id}><CartItem  {...cartItem} /></div>)
        }
      </div>
      <FormButton>GO TO CHECKOUT</FormButton>
    </div>)
}

const mapStateToProps = (state: StateInterface) => {
  return { cartItems: selectCartItems(state) }
}
export default connect(mapStateToProps)(CartDropdown)

