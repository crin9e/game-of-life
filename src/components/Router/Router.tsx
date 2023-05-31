import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginForm } from "../LoginForm/LoginForm";
import { Mainscreen } from "../Mainscreen/Mainscreen";
import { NotFound } from "../NotFound/NotFound";
import { CheckForLogin } from "../CheckForLogin/CheckForLogin";

export const Router: React.FunctionComponent = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginForm />} />
        <Route
          path="/"
          element={
            <CheckForLogin>
              <Mainscreen />
            </CheckForLogin>
          }
        />
        <Route
          path="notfound"
          element={
            <CheckForLogin>
              <NotFound />
            </CheckForLogin>
          }
        />
        <Route path="*" element={<Navigate to="notfound" />} />
      </Routes>
    </>
  );
};
