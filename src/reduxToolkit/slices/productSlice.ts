import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../../misc/type";
import axios from "axios";
import { AppState } from "../store";

// Define an async thunk to fetch products from the API
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get("https://fakestoreapi.com/products/");
    return response.data;
  }
);

// Define an action to delete a product from the store
export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (productId: number) => {
    // Implement the logic to delete the product (make an API call, etc.)
    // For demonstration purposes, let's return the productId
    return productId;
  }
);

interface ProductSliceState {
  products: ProductType[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ProductSliceState = {
  products: [],
  status: "idle",
  error: null,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ProductType>) => {
      state.products.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "An error occurred";
      })
      .addCase(deleteProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Remove the deleted product from the state
        state.products = state.products.filter(
          (product) => product.id !== action.payload
        );
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "An error occurred";
      });
  },
});

export const { addProduct } = productSlice.actions;
export const selectProductStatus = (state: AppState) => state.products.status;
export const selectProductError = (state: AppState) => state.products.error;
export default productSlice.reducer;
