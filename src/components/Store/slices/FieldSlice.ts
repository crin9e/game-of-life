import { createSelector, createSlice } from "@reduxjs/toolkit";
import { FieldState, FilledFieldTypes } from "../../../types";
import { fillField } from "../../../utils/helpers";

const initialState: FieldState = {
  fieldState: fillField(50, 50, 0),
};

export const FieldSlice = createSlice({
  name: "FieldSlice",
  initialState,
  reducers: {
    UpdateFieldState: (state, action) => {
      state.fieldState = action.payload;
    },
  },
});

export const { UpdateFieldState } = FieldSlice.actions;

export const filledFieldSelector = createSelector(
  (state: { FieldSlice: FieldState }) => state.FieldSlice.fieldState,
  (fieldState: FilledFieldTypes) => fieldState
);

export default FieldSlice.reducer;
