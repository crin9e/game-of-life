import React from "react";
import { FilledFieldTypes, FieldTypes, Statuses } from "../../types";
import { Cell } from "../Cell/Cell";
import styles from "./Field.module.css";

export const Field: React.FunctionComponent<FieldTypes> = ({ fieldSize }) => {
  const { x, y } = fieldSize;

  const field = Array.from("x".repeat(x)).map((e) => Array.from("y".repeat(y)));
  const filledField: FilledFieldTypes = field.map((row) =>
    row.map((element) => element.replace("y", "vacant "))
  );

  console.log({ filledField });

  return (
    <div className={styles.field} data-testid="field">
      {filledField.map((row: Statuses[], rowIndex) => (
        <div key={rowIndex}>
          {row.map((element: Statuses, elementIndex) => (
            <div key={`${rowIndex}_${elementIndex}`}>
              {<Cell status={element} x={rowIndex} y={elementIndex} />}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
