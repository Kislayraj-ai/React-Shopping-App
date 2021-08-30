import React from 'react';
import Card from '../UI/Card';

import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import { cartActions } from '../../store/cart-slice';
import { useDispatch } from 'react-redux';

import classes from './CartList.module.css';
const CartList = (props) => {
  const { id, title, price, totalPrice, image, quantity } = props.Items;

  const dispatch = useDispatch();

  const increaseQuantityHandler = () => {
    dispatch(
      cartActions.addCartitems({
        id,
        title,
        price,
        image,
      })
    );
  };
  let ItemPriceFormat = totalPrice.toFixed(2);

  const decreaseQuantityHandler = () => {
    dispatch(cartActions.removeCartItems(id));
  };
  return (
    <Card className={classes['cart-content']}>
      <div className={classes['content-container']}>
        <img src={image} alt={title} />

        <div className={classes['cart-actions']}>
          <FaPlusCircle
            className={classes.action}
            onClick={increaseQuantityHandler}
          />
          <FaMinusCircle
            className={classes.action}
            onClick={decreaseQuantityHandler}
          />
        </div>
        <p className={classes.amount}>x{quantity}</p>
        <p>Price : ₹{ItemPriceFormat}</p>
      </div>

      <p>{title}</p>
    </Card>
  );
};

export default CartList;
