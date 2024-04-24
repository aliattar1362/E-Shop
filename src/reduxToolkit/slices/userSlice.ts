import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType, TokenType } from "../../misc/type"; // Import your types

interface UserSliceState {
  user: UserType | null;
  tokens: TokenType | null;
}

const initialState: UserSliceState = {
  user: null,
  tokens: null,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    loadLocalStorage: (state) => {
      const userDataStr = localStorage.getItem("userData");
      const tokensStr = localStorage.getItem("tokens");
      if (userDataStr) {
        const userData: UserType = JSON.parse(userDataStr);
        state.user = userData;
      }
      if (tokensStr) {
        const tokens: TokenType = JSON.parse(tokensStr);
        state.tokens = tokens;
      }
    },
    saveUserData: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
      localStorage.setItem("userData", JSON.stringify(state.user));
    },
    saveTokens: (state, action: PayloadAction<TokenType>) => {
      state.tokens = action.payload;
      localStorage.setItem("tokens", JSON.stringify(state.tokens));
    },
    logoutUser: (state) => {
      state.user = initialState.user;
      state.tokens = initialState.tokens;
      localStorage.removeItem("userData");
      localStorage.removeItem("tokens");
    },
  },
});

export const { loadLocalStorage, saveUserData, saveTokens, logoutUser } =
  userSlice.actions;

const userReducer = userSlice.reducer;
export default userReducer;
