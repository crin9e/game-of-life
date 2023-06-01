import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "../Router/Router";
import { Provider } from "react-redux";
import { store } from "../Store/store";
import styles from "./App.module.css";

export const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className={styles.root}>
          <Router />
        </div>
      </Provider>
    </BrowserRouter>
  );
};
