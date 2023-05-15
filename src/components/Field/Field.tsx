import React, { memo } from "react";
import { FieldTypes, Status } from "../../types";
import { Cell } from "../Cell/Cell";
import styles from "./Field.module.css";
import { fillField } from "../../utils/helpers";

export const Field: React.FunctionComponent<FieldTypes> = memo(function Field({
  fieldSize,
  initialPopulation,
}) {
  const { x, y } = fieldSize;

  const filledField = fillField(x, y, initialPopulation);

  return (
    <div className={styles.field} data-testid="field">
      {filledField.map((row: Status[], rowIndex: number) => (
        <div key={rowIndex}>
          {row.map((element: Status, elementIndex) => (
            <div key={`${rowIndex}_${elementIndex}`}>
              {<Cell status={element} x={rowIndex} y={elementIndex} />}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
});
