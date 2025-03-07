import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice'; //使用 immer 简化代码后需要创建 slice as reducer
import modalReducer from './features/modal/modalSlice';
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});
