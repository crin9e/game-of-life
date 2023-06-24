import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginState } from "../../../types";

const initialState: LoginState = {
  username: null,
};

const LoginSlice = createSlice({
  name: "LoginSlice",
  initialState,
  reducers: {
    logIn: (state = initialState, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    logOut: (state = initialState) => {
      state.username = null;
    },
  },
});

export const { logIn, logOut } = LoginSlice.actions;
export default LoginSlice.reducer;
