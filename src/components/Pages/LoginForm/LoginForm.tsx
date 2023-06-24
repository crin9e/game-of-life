import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styles from "./LoginForm.module.css";
import { LoginState } from "../../../types";
import { logIn } from "../../Store/slices/LoginSlice";

export const LoginForm: React.FunctionComponent = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loggedInUser = useSelector(
    (state: { LoginSlice: LoginState }) => state.LoginSlice.username
  );

  const login = () => {
    if (username.length > 0) {
      dispatch(logIn(username.trim()));
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
