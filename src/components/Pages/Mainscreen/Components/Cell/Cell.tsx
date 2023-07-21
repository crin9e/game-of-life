import React from "react";
import clsx from "clsx";
import { CellTypes } from "../../../../../types";
import styles from "./Cell.module.css";
import { useDispatch } from "react-redux";

export const Cell: React.FunctionComponent<CellTypes> = ({ status, x, y }) => {
  const dispatch = useDispatch();

  const handleChangeStatus: React.MouseEventHandler<HTMLDivElement> = (
    event
  ) => {
    event.preventDefault();
    if (event.type === "mouseover") {
      if (event.buttons == 1) {
        dispatch({ type: "PLANT_CELL", payload: { x, y } });
      }
      if (event.buttons == 2) {
        dispatch({ type: "KILL_CELL", payload: { x, y } });
      }
    }
    if (event.type === "mousedown") {
      if (event.buttons == 1) {
        dispatch({ type: "PLANT_CELL", payload: { x, y } });
      }
      if (event.buttons == 2) {
        dispatch({ type: "KILL_CELL", payload: { x, y } });
      }
    }
  };

  return (
    <div
      data-testid={`cell-${x}-${y}`}
      className={clsx(styles.cell, styles[status])}
      onMouseOver={handleChangeStatus}
      onMouseDown={handleChangeStatus}
    ></div>
  );
};
