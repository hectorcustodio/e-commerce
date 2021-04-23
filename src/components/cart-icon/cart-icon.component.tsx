import React from 'react'
import './cart-icon.style.scss'
import { ReactComponent as ShoppingIcon } from '../../assets//shopping-bag.svg'
import { connect } from 'react-redux'
import { setVisibility } from '../../redux/cart/cart.actions'


const CartIcon = ({ setVisibility }: any) => (
  <div className='cart-icon' onClick={setVisibility}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>0</span>
  </div>
)

const mapStateToProps = ({ cart }: any) => ({
  visibility: cart.visible
})

const mapDispatchToProps = (dispatch: any) => ({
  setVisibility: () => dispatch(setVisibility())
})


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
