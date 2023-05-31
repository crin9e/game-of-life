import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "../Router/Router";
import styles from "./App.module.css";

export const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.root}>
        <Router />
      </div>
    </BrowserRouter>
  );
};
