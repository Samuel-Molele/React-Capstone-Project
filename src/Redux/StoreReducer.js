import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../Redux/CartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
