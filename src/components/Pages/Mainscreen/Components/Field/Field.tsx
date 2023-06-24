import React from "react";
import { Status } from "../../../../../types";
import styles from "./Field.module.css";
import { FieldColumn } from "../FieldColumn/FieldColumn";
import { useSelector } from "react-redux";
import { filledFieldSelector } from "../../../../Store/slices/FieldSlice";

export const Field: React.FunctionComponent = () => {
  const filledField = useSelector(filledFieldSelector);

  return (
    <div className={styles.field} data-testid="field">
      {filledField!.map((column: Status[], columnIndex: number) => (
        <FieldColumn
          column={column}
          columnIndex={columnIndex}
          key={columnIndex}
        />
      ))}
    </div>
  );
};
