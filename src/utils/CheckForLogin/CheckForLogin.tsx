import React from "react";
import { Navigate } from "react-router-dom";

export const CheckForLogin: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  const loggedInUser = localStorage.getItem("userName");

  return loggedInUser ? children : <Navigate to="/login" />;
};
