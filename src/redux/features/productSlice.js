import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://fakestoreapi.com/products";

export const fetchProducts = createAsyncThunk(
  "product/getProducts",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        "something went wroung with get products"
      );
    }
  }
);

const initialState = {
  data: [],
  loading: false,
  error: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state, action) => {
      state.loading = true;
    },

    [fetchProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },

    [fetchProducts.rejected]: (state, action) => {
      state.error = true;
    },
  },
});

export const { getProducts } = productSlice.actions;
export default productSlice.reducer;
