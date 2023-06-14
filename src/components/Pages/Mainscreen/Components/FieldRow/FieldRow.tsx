import React from "react";
import { Status } from "../../types";
import { Cell } from "../Cell/Cell";

export const FieldRow: React.FunctionComponent<{
  row: Status[];
  rowIndex: number;
}> = ({ row, rowIndex }) => {
  return (
    <div key={rowIndex} data-testid="row">
      {row.map((element: Status, elementIndex) => (
        <div key={`${rowIndex}_${elementIndex}`}>
          {<Cell status={element} x={rowIndex} y={elementIndex} />}
        </div>
      ))}
    </div>
  );
};
