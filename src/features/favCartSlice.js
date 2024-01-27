// favCartSlice.js

import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  prod: [],
  cart: [],
  message: "",
  total: 0,
};

const favCartSlice = createSlice({
  name: "whisList",
  initialState,
  reducers: {
    addFav: (state, action) => {
      let localStorageData = JSON.parse(localStorage.getItem("favProd")) || [];
      let favFoodData = action.payload;
      console.log("redux", favFoodData);
      let check = state.prod.find((x) => x._id === favFoodData._id);

      if (check) {
        // Show notification using react-toastify
        toast.error("Item is already present in the wishlist", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        state.prod = [...state.prod, favFoodData];
        localStorage.setItem("favProd", JSON.stringify(state.prod));
        toast.success("Item add successfuly in the wishlist", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    },
    getCartTotal: (state) => {
      state.total = state.prod.length;
    },
    removeItem2: (state, action) => {
      state.prod = state.prod.filter((item) => item._id !== action.payload._id);
    },
    increaseItemQuantity2: (state, action) => {
      state.prod = state.prod.map((item) => {
        if (item._id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },
    decreaseItemQuantity2: (state, action) => {
      state.prod = state.prod.map((item) => {
        if (item._id === action.payload) {
          // Ensure that the quantity doesn't go below 1
          const newQuantity = Math.max(1, item.quantity - 1);
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
    },
    addToCart: (state, action) => {
      const item = state.prod.find((x) => x._id === action.payload);
      if (item) {
        state.cart.push(item);
        toast.success("Item added successfully to the cart", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    },
  },
});

export const {
  addFav,
  getCartTotal,
  decreaseItemQuantity2,
  increaseItemQuantity2,
  removeItem2,
  addToCart,
} = favCartSlice.actions;
export const selectWishlistItems = (state) => state.whisList.prod;
export const selectWishlistTotal = (state) => state.whisList.total;
export const selectCartItems = (state) => state.whisList.cart;
export default favCartSlice.reducer;
