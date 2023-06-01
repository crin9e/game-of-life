import React, { memo } from "react";
import { FieldTypes, Status } from "../../../../../types";
import styles from "./Field.module.css";
import { fillField } from "../../../../../utils/helpers";
import { FieldRow } from "../FieldRow/FieldRow";

export const Field: React.FunctionComponent<FieldTypes> = memo(function Field({
  fieldSize,
  initialPopulation,
}) {
  const { x, y } = fieldSize;

  const filledField = fillField(x, y, initialPopulation);

  return (
    <div className={styles.field} data-testid="field">
      {filledField.map((row: Status[], rowIndex: number) => (
        <FieldRow row={row} rowIndex={rowIndex} key={rowIndex} />
      ))}
    </div>
  );
});
