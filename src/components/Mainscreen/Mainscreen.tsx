import React from "react";
import { ControlPanel } from "../ControlPanel/ControlPanel";
import { Field } from "../Field/Field";
import { UserPanel } from "../UserPanel/UserPanel";
import classes from "./Mainscreen.module.css";

export const Mainscreen: React.FunctionComponent = () => {
  const loggedInUser = localStorage.getItem("userName");

  return (
    <div className={classes.formWrapper}>
      <div className={classes.form}>
        <UserPanel loggedInUser={loggedInUser} />
        <Field fieldSize={{ x: 50, y: 50 }} initialPopulation={30} />
        <ControlPanel />
      </div>
    </div>
  );
};
