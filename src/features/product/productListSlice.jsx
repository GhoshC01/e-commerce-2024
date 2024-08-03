import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllProduct } from './productListApi';

const initialState = {
  products: [],
  status: 'idle',
};

export const fetchAllProductAsync = createAsyncThunk(
  'product/fetchAllProduct',
  async () => {
    const response = await fetchAllProduct();
    return response; // return response directly
  }
);

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllProductAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload; // Use action.payload directly
      })
      .addCase(fetchAllProductAsync.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const selectProduct = (state) => state.product.products;
export default productSlice.reducer;
