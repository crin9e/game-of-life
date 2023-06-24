import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "../Router/Router";
import { Provider } from "react-redux";
import { store } from "../Store/store";
import styles from "./App.module.css";
import { UserPanel } from "../Pages/Mainscreen/Components/UserPanel/UserPanel";

export const App = () => {
  useEffect(() => {
    const handleContextmenu = (e) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextmenu);
    return function cleanup() {
      document.removeEventListener("contextmenu", handleContextmenu);
    };
  }, []);

  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className={styles.root}>
          <UserPanel />
          <Router />
        </div>
      </Provider>
    </BrowserRouter>
  );
};
