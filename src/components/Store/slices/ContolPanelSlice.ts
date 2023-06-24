import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ControlPanelState } from "../../../types";

const initialState: ControlPanelState = {
  fieldSize: { x: 50, y: 50 },
  population: 0,
  speed: 1000,
  isPlaying: false,
};

const ContolPanelSlice = createSlice({
  name: "ContolPanelSlice",
  initialState,
  reducers: {
    toggleIsPlaying: (state = initialState, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },
    changeFieldSize: (
      state = initialState,
      action: PayloadAction<{ axis: "x" | "y"; size: number }>
    ) => {
      state.fieldSize[action.payload.axis] = action.payload.size;
    },
    changePopulation: (state = initialState, action: PayloadAction<number>) => {
      state.population = action.payload;
    },
    changeSpeed: (
      state = initialState,
      action: PayloadAction<"up" | "down" | "reset">
    ) => {
      if (action.payload === "reset") {
        state.speed = 1000;
      }
      if (action.payload === "up") {
        if (state.speed > 0) {
          state.speed -= 500;
        }
      }
      if (action.payload === "down") {
        if (state.speed < 2000) {
          state.speed += 500;
        }
      }
    },
    reset: (state = initialState) => {
      state.fieldSize = initialState.fieldSize;
      state.population = initialState.population;
      state.speed = initialState.speed;
    },
  },
});

export const {
  changeFieldSize,
  changePopulation,
  changeSpeed,
  reset,
  toggleIsPlaying,
} = ContolPanelSlice.actions;
export default ContolPanelSlice.reducer;
