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
      const cartItem = state.products.find((item) => {
        return item.id === action.payload;
      });
      state.carts = [...state.carts, cartItem];
    },
  },
  extraReducers: {
    [getAllProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { AddToCart } = counterSlice.actions;

export default counterSlice.reducer;
