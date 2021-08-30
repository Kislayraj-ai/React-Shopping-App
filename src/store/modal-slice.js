import { createSlice } from '@reduxjs/toolkit';

const cartModalUi = createSlice({
  name: 'modal',
  initialState: { CartisVisible: false },

  reducers: {
    toggle(state) {
      state.CartisVisible = !state.CartisVisible;
    },
  },
});
export const cartModal = cartModalUi.actions;
export default cartModalUi;
