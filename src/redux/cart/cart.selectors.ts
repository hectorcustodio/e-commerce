import { createSelector } from 'reselect';
import { StateInterface } from '../../model/state-interface';


const selectCart = (state: StateInterface) => state.cart

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce(
    (accumulatedQuantity, cartItem) =>
      accumulatedQuantity + cartItem.quantity, 0
  )

)

export const selectCartVisibility = createSelector(
  [selectCart],
  ({ visible }) => visible || false
)