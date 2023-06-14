import React from "react";
import { LoginForm } from "./LoginForm";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "LoginFormStory",
  component: LoginForm,
};

export const LoginFormStory = () => {
  return (
    <BrowserRouter>
      <LoginForm />
    </BrowserRouter>
  );
};
