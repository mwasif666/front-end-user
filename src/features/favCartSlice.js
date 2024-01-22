// favCartSlice.js

import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  prod: [],
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
      let check = state.prod.find((x) => x.id === favFoodData.id);

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
  },
});

export const { addFav, getCartTotal } = favCartSlice.actions;
export const selectWishlistItems = (state) => state.whisList.prod;
export const selectWishlistTotal = (state) => state.whisList.total;
export default favCartSlice.reducer;
