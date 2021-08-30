import React from 'react';
import { FaShoppingCart } from 'react-icons/all';
import { cartModal } from '../../store/modal-slice';
import { useDispatch, useSelector } from 'react-redux';

import classes from './CartButton.module.css';

const CartButton = () => {
  const dispatch = useDispatch();
  const toggleCart = () => {
    dispatch(cartModal.toggle());
  };
  const totalItems = useSelector((state) => state.cartItem.totalItems);
  return (
    <div className={classes.cartButton}>
      <button onClick={toggleCart} className={classes.cartIcon}>
        <FaShoppingCart />
      </button>
      <p className={classes.noOfItem}>{totalItems}</p>
    </div>
  );
};

export default CartButton;
