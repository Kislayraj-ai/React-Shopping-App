import { useCallback, useEffect, useState } from 'react';
import { cartActions } from '../store/cart-slice';

export const useStoreItem = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const homeData = useCallback(async () => {
    setLoading(true);

    try {
      const data = await fetch(`https://fakestoreapi.com/products`);
      if (!data.ok) {
        throw new Error(`Failed`);
      }
      const reponse = await data.json();
      setItems(reponse);
      setError();
      setLoading(false);
    } catch (e) {
      setError('OOps! Something Went Wrong');
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    homeData();
  }, [homeData]);

  return { items, loading, error };
};

export const setCartItem = (cart) => {
  return async () => {
    const sendRequest = async () => {
      const response = await fetch(
        `https://react-shopping-app-cd61a-default-rtdb.firebaseio.com/cart.json`,
        {
          method: 'PUT',
          body: JSON.stringify({
            items: cart.items,
            totalItems: cart.totalItems,
            totalAmount: cart.totalAmount,
          }),
        }
      );
      if (!response.ok) {
        throw new Error('Sending cart data failed');
      }
    };
    try {
      await sendRequest();
    } catch (e) {
      console.log(e.message);
    }
  };
};
export const fetchCartItem = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://react-shopping-app-cd61a-default-rtdb.firebaseio.com/cart.json`
      );
      const data = await response.json();
      return data;
    };

    const cartData = await fetchData();

    dispatch(
      cartActions.replaceCart({
        items: cartData.items || [],
        totalItems: cartData.totalItems,
        totalAmount: cartData.totalAmount,
      })
    );
  };
};
