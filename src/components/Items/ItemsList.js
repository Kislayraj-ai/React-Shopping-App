import React from 'react';
import Card from '../UI/Card';

import { Link } from 'react-router-dom';
import { FaInfo, FaShoppingCart } from 'react-icons/all';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

import classes from './ItemsList.module.css';

const ItemsList = (props) => {
  const dispatch = useDispatch();
  const { id, title, image, price } = props.items;

  const addToCartHandler = () => {
    dispatch(
      cartActions.addCartitems({
        id,
        title,
        image,
        price,
      })
    );
  };

  return (
    <Card>
      <Link to={`/details/${id}`} className={`${classes.btn} ${classes.info}`}>
        <FaInfo className={classes.icons} />
      </Link>
      <div className={classes.listItems}>
        <div className={classes['img-container']}>
          <img src={image} alt={title} />
        </div>
        <h4>{title}</h4>
        <p>₹{price}</p>

        <button className={classes.btn} onClick={addToCartHandler}>
          Add <FaShoppingCart className={classes.icons} />
        </button>
      </div>
    </Card>
  );
};

export default ItemsList;
