import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { CellTypes } from "../../types";
import styles from "./Cell.module.css";

export const Cell: React.FunctionComponent<CellTypes> = ({ status, x, y }) => {
  const [cellStatus, setCellStatus] = useState(status);
  const handleChangeStatus = (event: MouseEvent) => {
    event.preventDefault();
    if (event.type === "mouseover") {
      if (event.buttons == 1) {
        setCellStatus("alive");
      }
      if (event.buttons == 2) {
        setCellStatus("dead");
      }
      if (event.buttons == 4) {
        setCellStatus("vacant");
      }
    }
    if (event.type === "mousedown") {
      if (event.buttons == 1) {
        setCellStatus("alive");
      }
      if (event.buttons == 2) {
        setCellStatus("dead");
      }
      if (event.buttons == 4) {
        setCellStatus("vacant");
      }
    }
  };

  useEffect(() => {
    setCellStatus(status);
  }, [status]);

  return (
    <div
      data-testid={`cell-${x}-${y}`}
      className={clsx(styles.cell, styles[cellStatus])}
      onMouseOver={handleChangeStatus}
      onMouseDown={handleChangeStatus}
    ></div>
  );
};
