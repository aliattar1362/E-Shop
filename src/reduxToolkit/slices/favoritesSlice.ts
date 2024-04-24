import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../../misc/type";

interface FavoritesState {
  favorites: ProductType[];
}

const initialState: FavoritesState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<ProductType>) => {
      const { id } = action.payload;

      // Check if the product already exists in the favorites
      const existingProduct = state.favorites.find(
        (product) => product.id === id
      );

      if (!existingProduct) {
        // If the product doesn't exist, add it to favorites
        state.favorites.push(action.payload);
      } else {
        // Alert the user
        window.alert("This product has been added to the favorites list");
      }
    },
    removeFromFavorites: (state, action: PayloadAction<ProductType>) => {
      const productIdToRemove = action.payload.id;
      state.favorites = state.favorites.filter(
        (product) => product.id !== productIdToRemove
      );
    },
  },
});

const favoritesReducer = favoritesSlice.reducer;
export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesReducer;
