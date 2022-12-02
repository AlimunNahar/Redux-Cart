import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: true,
  products: [],
  carts: [],
};

export const getAllProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await axios.get("products.json");
    return res.data;
  }
);

const counterSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    AddToCart: (state, action) => {
      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.carts[itemIndex].quantity += 1;
      } else {
        const tempProducts = { ...action.payload, quantity: 1 };
        state.carts.push(tempProducts);
      }
    },
    decrement: (state, action) => {
      let index = state.carts.findIndex((item) => item.id === action.payload);
      if (state.carts[index].quantity <= 0) {
        state.carts[index].quantity = 0;
      } else {
        state.carts[index].quantity -= 1;
      }
    },
    increment: (state, action) => {
      let index = state.carts.findIndex((item) => item.id === action.payload);
      state.carts[index].quantity += 1;
    },
    DeleteCartItem: (state, action) => {
      const remainingItems = state.carts.filter((item) => {
        return item.id !== action.payload;
      });
      state.carts = remainingItems;
    },
  },
  extraReducers: {
    [getAllProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
  },
});

export const { AddToCart, DeleteCartItem, decrement, increment } =
  counterSlice.actions;

export default counterSlice.reducer;
