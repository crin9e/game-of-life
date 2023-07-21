import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginForm } from "../Pages/LoginForm/LoginForm";
import { Mainscreen } from "../Pages/Mainscreen/Mainscreen";
import { NotFound } from "../Pages/NotFound/NotFound";
import { CheckForLogin } from "../../utils/CheckForLogin/CheckForLogin";

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
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </>
  );
};
