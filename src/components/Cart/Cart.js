import React, { useState } from 'react';

import Modal from '../UI/Modal';
import CartList from './Cartlist';
import Paypal from '../Payment/Paypal';

import { cartModal } from '../../store/modal-slice';
import { useSelector, useDispatch } from 'react-redux';

import classes from './Cart.module.css';

const Cart = () => {
  const showCartItems = useSelector((state) => state.cartItem.items);
  let totalCartAmount = useSelector((state) => state.cartItem.totalAmount);
  const [checkout, setCheckout] = useState(false);

  const dispatch = useDispatch();

  const closeCartHandler = () => {
    dispatch(cartModal.toggle());
  };

  const checkOUthandler = () => {
    setCheckout(true);
  };

  if (totalCartAmount <= 0) {
    totalCartAmount = 0;
  }
  totalCartAmount = totalCartAmount.toFixed(2);

  let emptyItems = showCartItems.length;

  return (
    <Modal>
      {checkout ? (
        <Paypal />
      ) : (
        <div className={classes.CartContainer}>
          <h3>My Cart</h3>
          {showCartItems.map((item) => (
            <CartList Items={item} />
          ))}

          <div className={classes['submit-actions']}>
            <div className={classes['amount-actions']}>
              <h4 className={classes.total}>Total Amount</h4>
              <h4> ₹{totalCartAmount}</h4>
            </div>

            <p className="underline"></p>
            <button className={classes.close} onClick={closeCartHandler}>
              Close Cart
            </button>
            {emptyItems ? (
              <button onClick={checkOUthandler}>Place Order</button>
            ) : (
              ''
            )}
          </div>
        </div>
      )}
    </Modal>
  );
};

export default Cart;
