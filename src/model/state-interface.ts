import { CartIconInterface } from "./cart-icon.model";
import { CartInterface } from "./cart.model";
import { CurrentUser } from "./user.model";

export interface StateInterface {
  cart: CartInterface
  user: {
    currentUser: CurrentUser
  }
}