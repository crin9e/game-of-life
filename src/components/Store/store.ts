import { configureStore } from "@reduxjs/toolkit";
import ContolPanelSlice from "./slices/ContolPanelSlice";
import FieldSlice from "./slices/FieldSlice";

const preloadedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

export const store = configureStore({
  reducer: {
    ContolPanelSlice,
    FieldSlice,
  },
  preloadedState,
});

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export type RootState = ReturnType<typeof store.getState>;
