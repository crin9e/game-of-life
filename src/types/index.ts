export type Statuses = "vacant" | "alive" | "dead";

export type CellTypes = {
  status: Statuses;
  x: number;
  y: number;
};

export type FilledFieldTypes = string[][];

export type FieldSize = {
  x: number;
  y: number;
};

export type FieldTypes = {
  fieldSize: {
    x: number;
    y: number;
  };
  // cells: CellTypes[];
};
