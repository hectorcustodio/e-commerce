import React from "react";
import { connect } from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { Item } from "../../model";
import { StateInterface } from "../../model/state-interface";
import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors";
import './checkout.style.scss'


interface CheckoutPageInterface {
  checkoutItems: Item[]
  totalAmount: number
}

const CheckoutPage = ({ checkoutItems, totalAmount }: CheckoutPageInterface) => (
  <div className='checkout-page'>
    <div
      className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {
      checkoutItems.map((cartItem: Item) =>
        <CheckoutItem key={cartItem.id} item={cartItem} />
      )
    }
    <div className="total"><span>Total: ${totalAmount}</span></div>
  </div>
)

const mapStateToProps = (state: StateInterface) => ({
  checkoutItems: selectCartItems(state),
  totalAmount: selectCartTotal(state)
})

export default connect(mapStateToProps)(CheckoutPage)

