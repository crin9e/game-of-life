import React, { useEffect } from "react";
import styles from "./App.module.css";

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

  return <div className={styles.root}>o</div>;
};
