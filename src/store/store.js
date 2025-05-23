import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartReducer';

const store = configureStore({
  reducer: {
    cart2: cartReducer,
  },
});

export default store;
