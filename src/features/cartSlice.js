import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify"; // Import the toast function
import productData from "../productData";

const initialState = {
  cart: [],
  items: productData,
  totalQuantity: 0,
  totalPrice: 0,
  wishlist: [],
  product:[],
  loading: true,
  success: false,
  error: "",
  message: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let find = state.cart.findIndex((item) => item._id === action.payload._id);
      if (find >= 0) {
        state.cart[find].quantity += 1;
      } else {
        state.cart.push({...action.payload , quantity:1});
      }

      // Show Toast Notification when an item is added to the cart
      toast.success(`${action.payload.prodTitle} added to cart successfully!`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    },
    getCartTotal: (state) => {
      let { totalQuantity, totalPrice } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { prodPrice, quantity } = cartItem;
          const itemTotal = prodPrice * quantity;
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += quantity;
          return cartTotal;
        },
        {
          totalPrice: 0,
          totalQuantity: 0,
        }
      );
      state.totalPrice = parseInt(totalPrice.toFixed(2));
      state.totalQuantity = totalQuantity;
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload);
    },
    increaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item._id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    },
    decreaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item._id === action.payload) {
          // Ensure that the quantity doesn't go below 1
          const newQuantity = Math.max(1, item.quantity - 1);
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
    },
    setEmptyCart:(state , action)=>{
      state.cart = []
    },
    getProduct: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
  .addCase(fetchProduct.pending, (state) => {
    state.loading = true;
  })
  .addCase(
    fetchProduct.fulfilled,
    (state,action) => {
      state.product  = action.payload
    })
  .addCase(fetchProduct.rejected, (state) => {
    state.loading = false;
    // Handle the rejection, e.g., set an error message
    state.error = "Failed to fetch product";
  });
  },
});

export const {
  addToCart,
  getCartTotal,
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  setEmptyCart
} = cartSlice.actions;

export default cartSlice.reducer;

export const fetchProduct = createAsyncThunk("users/getProd", async () => {
  const res = await fetch("http://localhost:5000/api/prod/v1/getproduct")
  let data = await res.json();
  return data;
});
