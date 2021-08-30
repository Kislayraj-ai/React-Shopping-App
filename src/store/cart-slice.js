import { createSlice } from '@reduxjs/toolkit';

const CreateCart = createSlice({
  name: 'Cart',
  initialState: { items: [], totalItems: 0, totalAmount: 0 },
  reducers: {
    addCartitems(state, action) {
      let newItem = action.payload;
      let existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalItems++;
      if (!existingItem) {
        state.totalAmount = state.totalAmount + newItem.price;
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          totalPrice: newItem.price,
          quantity: 1,
          image: newItem.image,
        });
      } else {
        state.totalAmount = state.totalAmount + existingItem.price;
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },

    //remove cart handler
    removeCartItems(state, action) {
      let cartItemId = action.payload;
      let existingItem = state.items.find((item) => item.id === cartItemId);
      state.totalItems--;
      if (existingItem.quantity === 1) {
        state.totalAmount = state.totalAmount - existingItem.price;
        state.items = state.items.filter((item) => item.id !== cartItemId);
      } else {
        state.totalAmount = state.totalAmount - existingItem.price;
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },

    replaceCart(state, action) {
      state.totalItems = action.payload.totalItems;
      state.totalAmount = action.payload.totalAmount;
      state.items = action.payload.items;
    },
  },
});

export const cartActions = CreateCart.actions;
export default CreateCart;
