import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { LoginState } from "../../types";

export const CheckForLogin: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  const loggedInUser = useSelector(
    (state: { LoginSlice: LoginState }) => state.LoginSlice.username
  );

  return loggedInUser ? children : <Navigate to="/login" />;
};
