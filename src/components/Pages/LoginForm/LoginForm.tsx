import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styles from "./LoginForm.module.css";

export const LoginForm: React.FunctionComponent = () => {
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const loggedInUser = localStorage.getItem("userName");

  const login = () => {
    if (username.length > 0) {
      localStorage.setItem("userName", username.trim());
      navigate("/");
    }
  };

  return !loggedInUser ? (
    <div className={styles.loginFormWrapper}>
      <div className={styles.loginForm}>
        <input
          className={styles.nameInput}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          data-testid="loginInput"
        />
        <button
          type="submit"
          className={styles.startButton}
          onClick={login}
          data-testid="loginButton"
        >
          START
        </button>
      </div>
    </div>
  ) : (
    <Navigate to="/" replace={true} />
  );
};
