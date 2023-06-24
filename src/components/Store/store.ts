import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import globalSagas from "./globalSagas";
import ContolPanelSlice from "./slices/ContolPanelSlice";
import FieldSlice from "./slices/FieldSlice";
import LoginSlice from "./slices/LoginSlice";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const preloadedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

export const store = configureStore({
  reducer: {
    ContolPanelSlice,
    FieldSlice,
    LoginSlice,
  },
  middleware: middlewares,
  preloadedState,
});

sagaMiddleware.run(globalSagas);

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export type RootState = ReturnType<typeof store.getState>;
