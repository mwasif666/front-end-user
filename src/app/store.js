import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";
import authReducer from "../features/authSlice";
import whisListReducer from "../features/favCartSlice";
export const store = configureStore({
  reducer: {
    allCart: cartReducer,
    auth: authReducer,
    whisList: whisListReducer,
  },
});
