import React from 'react';
import { Item } from '../../model';

import './cart-item.styles.scss';

const CartItem = ({ imageUrl, price, name, quantity }: Item) => (
  <>
    <div className='cart-item'>
      <img src={imageUrl} alt="item" />
      <div className='item-details'>
        <span className="name">{name}</span>

        <span className="Price">{quantity} x ${price}</span>

      </div>
    </div>
  </>
)


export default CartItem