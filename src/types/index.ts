export type Status = "vacant" | "alive";

export type CellTypes = {
  status: Status;
  x: number;
  y: number;
};

export type FilledFieldTypes = Status[][] | null;

export type FieldSize = {
  x: number;
  y: number;
};

export type FieldTypes = {
  filledField: FilledFieldTypes;
};

export type SpeedActions = "slowDown" | "resetSpeed" | "speedUp";

export type ControlPanelState = {
  fieldSize: FieldSize;
  population: number;
  speed: number;
  isPlaying: boolean;
};

export type LoginState = {
  username: string | null;
};

export type FieldState = {
  fieldState: FilledFieldTypes | null;
};
