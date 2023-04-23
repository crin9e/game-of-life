import React from "react";
import styles from "./LoginForm.module.css";

export const LoginForm = () => {
  return (
    <div className={styles.loginFormWrapper}>
      <div className={styles.loginForm}>
        <input className={styles.nameInput} />
        <button type="submit" className={styles.startButton}>
          START
        </button>
      </div>
    </div>
  );
};
