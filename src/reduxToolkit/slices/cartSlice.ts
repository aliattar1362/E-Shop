import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../misc/type";

interface InitialState {
  cart: ProductType[];
  totalQuantity: number;
}

const initialState: InitialState = {
  cart: [],
  totalQuantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.cart = action.payload;
      state.totalQuantity = calculateTotalQuantity(action.payload);
    },

    addItem: (state, action) => {
      const addedProduct = action.payload;
      let addedToCart = false;
      const productIndex = state.cart.findIndex(
        (product) => product.id === addedProduct.id
      );

      if (productIndex === -1) {
        addedProduct.rating.initialCount = addedProduct.rating.count;
        addedProduct.rating.count -= 1;
        state.cart.push(addedProduct);
      } else {
        // if product exists in cart
        addedToCart = true;
        if (
          addedToCart === true &&
          addedProduct.rating.initialCount - addedProduct.rating.count < 2
        ) {
          // Handle specific logic when the product is already in the cart
        }
        state.cart[productIndex].rating.count -= 1;
      }
      state.totalQuantity = calculateTotalQuantity(state.cart);
    },

    removeItem: (state, action) => {
      const removedProduct = action.payload;

      const productIndex = state.cart.findIndex(
        (product) => product.id === removedProduct.id
      );

      if (productIndex !== -1) {
        state.cart[productIndex].rating.count += 1;

        if (
          state.cart[productIndex].rating.count ===
          state.cart[productIndex].rating.initialCount
        ) {
          state.cart.splice(productIndex, 1);
        }
      }

      state.totalQuantity = calculateTotalQuantity(state.cart);
    },
    deleteItem: (state, action) => {
      const deletedProduct = action.payload;

      state.cart = state.cart.filter(
        (product) => product.id !== deletedProduct.id
      );

      state.totalQuantity = calculateTotalQuantity(state.cart);
    },
  },
});

// Move local storage logic outside of the createSlice block
export const saveCartToLocalStorage = (cart: ProductType[]) => {
  localStorage.setItem("cart", JSON.stringify(cart.map((item) => item)));
};

const cartReducer = cartSlice.reducer;
export const { setCart, addItem, removeItem, deleteItem } = cartSlice.actions;
export default cartReducer;

const calculateTotalQuantity = (cart: ProductType[]): number => {
  return cart.reduce(
    (total, item) =>
      total + (item.rating.initialCount ?? 0) - item.rating.count,
    0
  );
};
