import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import './cart-dropdown.styles.scss';

const Cart = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

// Using Reselect So the cart dropdown doesnt get rerendered whenever
// the state changes when unrelated to the cart
const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state)
});

// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   cartItems
// });

export default connect(mapStateToProps)(Cart);
