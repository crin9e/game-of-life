import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ControlPanel } from "./Components/ControlPanel/ControlPanel";
import { Field } from "./Components/Field/Field";
import { UserPanel } from "./Components/UserPanel/UserPanel";
import classes from "./Mainscreen.module.css";
import { UpdateCellStatus } from "../../Store/slices/FieldSlice";

export const Mainscreen: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const loggedInUser = localStorage.getItem("userName");

  // const test = () =>
  //   dispatch(UpdateCellStatus({ x: 0, y: 0, status: "alive" }));

  // test();

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
