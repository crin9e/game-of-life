import { createSlice } from "@reduxjs/toolkit";
import { fillField } from "../../../utils/helpers";

const initialState = {
  fieldState: fillField(10, 10, 0),
};

export const FieldSlice = createSlice({
  name: "FieldSlice",
  initialState,
  reducers: {
    UpdateFieldState: (state, action) => {
      state.fieldState = action.payload;
    },
    UpdateCellStatus: (state = initialState, action) => {
      state.fieldState[action.payload.x][action.payload.y] =
        action.payload.status;
    },
  },
});

export const { UpdateFieldState, UpdateCellStatus } = FieldSlice.actions;
export default FieldSlice.reducer;
