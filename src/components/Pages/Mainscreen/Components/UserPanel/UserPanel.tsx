import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginState } from "../../../../../types";
import { logOut } from "../../../../Store/slices/LoginSlice";
import classes from "./UserPanel.module.css";

export const UserPanel: React.FunctionComponent = ({}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loggedInUser = useSelector(
    (state: { LoginSlice: LoginState }) => state.LoginSlice.username
  );
  const logout = () => {
    dispatch(logOut());
    navigate("login");
  };
  return (
    <div className={classes.userPanel}>
      {loggedInUser ? (
        <>
          <p className={classes.greeting} data-testid="greeting">
            Hello, {loggedInUser}
          </p>
          <button
            className={classes.logoutButton}
            onClick={logout}
            data-testid="logoutButton"
          >
            log out
          </button>
        </>
      ) : (
        <p className={classes.greeting} data-testid="greeting">
          Please, log in
        </p>
      )}
    </div>
  );
};
