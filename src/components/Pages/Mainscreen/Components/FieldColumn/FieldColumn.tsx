import React, { memo } from "react";
import { Status } from "../../../../../types";
import { Cell } from "../Cell/Cell";

export const FieldColumn: React.FunctionComponent<{
  column: Status[];
  columnIndex: number;
}> = memo(function ({ column, columnIndex }) {
  return (
    <div key={columnIndex} data-testid="column">
      {column.map((element: Status, elementIndex) => (
        <div key={`${columnIndex}_${elementIndex}`}>
          {<Cell status={element} x={columnIndex} y={elementIndex} />}
        </div>
      ))}
    </div>
  );
});
