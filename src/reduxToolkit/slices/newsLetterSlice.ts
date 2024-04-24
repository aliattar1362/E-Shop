import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NewsletterState {
  email: string | null;
}

const initialState: NewsletterState = {
  email: null,
};

const newsletterSlice = createSlice({
  name: "newsletter",
  initialState,
  reducers: {
    subscribeToNewsletter: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    unsubscribeFromNewsletter: (state) => {
      state.email = null;
    },
  },
});

const newsletterReducer = newsletterSlice.reducer;
export const { subscribeToNewsletter, unsubscribeFromNewsletter } =
  newsletterSlice.actions;
export default newsletterReducer;
