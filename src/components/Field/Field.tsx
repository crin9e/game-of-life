import React, { useMemo } from "react";
import { FieldTypes, Statuses } from "../../types";
import { Cell } from "../Cell/Cell";
import styles from "./Field.module.css";
import { fillField } from "../../utils/helpers";

export const Field: React.FunctionComponent<FieldTypes> = ({
  fieldSize,
  initialPopulation,
}) => {
  const { x, y } = fieldSize;

  const filledField = useMemo(
    () => fillField(x, y, initialPopulation),
    [x, y, initialPopulation]
  );

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
