export type Status = "vacant" | "alive" | "dead";

export type CellTypes = {
  status: Status;
  x: number;
  y: number;
};

export type FilledFieldTypes = Status[][];

export type FieldSize = {
  x: number;
  y: number;
};

export type FieldTypes = {
  fieldSize: {
    x: number;
    y: number;
  };
  initialPopulation: number;
};

export type SpeedActions = "slowDown" | "resetSpeed" | "speedUp";
