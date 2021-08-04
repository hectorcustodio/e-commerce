import React from 'react'
import './cart-icon.style.scss'
import { ReactComponent as ShoppingIcon } from '../../assets//shopping-bag.svg'
import { connect } from 'react-redux'
import { setVisibility } from '../../redux/cart/cart.actions'
import { CartIconInterface } from '../../model/cart-icon.model'
import { StateInterface } from '../../model/state-interface'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'


const CartIcon = ({ setVisibility, itemCount }: CartIconInterface) => (
  <div className='cart-icon' onClick={setVisibility}>
    <ShoppingIcon className='shopping-icon' />

    <span className='item-count'>{itemCount || 0}</span>

  </div>
)

const mapStateToProps = (state: StateInterface) => {
  return {
    itemCount: selectCartItemsCount(state)
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  setVisibility: () => dispatch(setVisibility())
})


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
