import { configureStore } from '@reduxjs/toolkit';
import cartModalUi from './modal-slice';
import CreateCart from './cart-slice';

const Store = configureStore({
  reducer: { cartModal: cartModalUi.reducer, cartItem: CreateCart.reducer },
});

export default Store;
