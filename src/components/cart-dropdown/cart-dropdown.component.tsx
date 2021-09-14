import React from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { CartInterface, Item } from '../../model'
import { CartIconInterface } from '../../model/cart-icon.model'
import { StateInterface } from '../../model/state-interface'
import { setVisibility } from '../../redux/cart/cart.actions'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import CartItem from '../cart-item/cart-tem.component'
import FormButton from '../form-button/form-button.component'
import './cart-dropdown.style.scss'

interface WithRouterCartInterface extends CartInterface, RouteComponentProps, CartIconInterface { }

const CartDropdown = ({ cartItems, history, setVisibility }: WithRouterCartInterface) => {
  console.log(cartItems)
  return (
    <div className='cart-dropdown'>
      
      
      <div className='cart-items'>
        {
          cartItems.length > 0 ?
            cartItems && cartItems.map((cartItem: Item) => <div key={cartItem.id}><CartItem  {...cartItem} /></div>) :
            <span className='empty-message'>Your cart is empty</span>
        }
      </div>
      
      <FormButton onClick={() => {

        history.push('/checkout')
        setVisibility()
      }}>GO TO CHECKOUT</FormButton>
      
    </div>)
}

const mapStateToProps = (state: StateInterface) => {
  return { cartItems: selectCartItems(state) }

}

const mapDispatchToProps = (dispatch: any) => ({
  setVisibility: () => dispatch(setVisibility())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown))

