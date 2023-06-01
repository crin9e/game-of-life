import React from "react";
import { useNavigate } from "react-router-dom";
import { UserPanelTypes } from "../../types";
import classes from "./UserPanel.module.css";

export const UserPanel: React.FunctionComponent<UserPanelTypes> = ({
  loggedInUser,
}) => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("userName");
    navigate("login");
  };
  return (
    <div className={classes.userPanel}>
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
    </div>
  );
};
