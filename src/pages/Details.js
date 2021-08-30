import { useEffect, useState, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaShoppingCart } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart-slice';
import Loading from '../components/UI/Loading';
import classes from './Details.module.css';

const Details = () => {
  const { id } = useParams();
  const [singleItem, setSingleItem] = useState('');
  const [loading, setLoading] = useState(false);

  const singleData = useCallback(async () => {
    setLoading(true);
    const data = await fetch(`https://fakestoreapi.com/products/${id}`);
    const reponse = await data.json();
    setSingleItem(reponse);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    singleData();
  }, [singleData]);
  const { image, description, title, price, category } = singleItem;
  const dispatch = useDispatch();

  const addSingleItem = () => {
    dispatch(
      cartActions.addCartitems({
        id,
        title,
        price,
        image,
      })
    );
  };
  if (loading) {
    return <Loading />;
  }
  return (
    <div className={classes.details}>
      <div className={classes['single-item']}>
        <img src={image} alt={title} />
        <div className="underline"></div>
        <div className={classes.contents}>
          <p className={classes['main-title']}>{title}</p>

          <p className={classes.Title}>Category</p>
          <p>{category}</p>
          <p className={classes.Title}>Description</p>
          <p>{description}</p>
          <p className={classes.Title}>Price</p>
          <p className={classes.price}> ₹{price}</p>
        </div>
      </div>
      <Link to="/home">
        <button>
          <FaArrowLeft /> back
        </button>
      </Link>
      <button className={classes.add} onClick={addSingleItem}>
        Add <FaShoppingCart />
      </button>
    </div>
  );
};

export default Details;
