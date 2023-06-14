import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FieldSize } from "../../../types";

const initialState: {
  fieldSize: FieldSize;
  population: number;
  speed: number;
} = {
  fieldSize: { x: 50, y: 50 },
  population: 0,
  speed: 50,
};

const ContolPanelSlice = createSlice({
  name: "ContolPanelSlice",
  initialState,
  reducers: {
    changeFieldSize: (
      state = initialState,
      action: PayloadAction<FieldSize>
    ) => {
      state.fieldSize = action.payload;
    },
    changePopulation: (state = initialState, action: PayloadAction<number>) => {
      state.population = action.payload;
    },
    changeSpeed: (state = initialState, action: PayloadAction<number>) => {
      state.speed = action.payload;
    },
  },
});

export const { changeFieldSize, changePopulation, changeSpeed } =
  ContolPanelSlice.actions;
export default ContolPanelSlice.reducer;
