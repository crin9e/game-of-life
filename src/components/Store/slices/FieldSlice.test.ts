import { FilledFieldTypes } from "../../../types";
import { fillField } from "../../../utils/helpers";
import reducer, { UpdateCellStatus, UpdateFieldState } from "./FieldSlice";
// import { FieldSize } from "../../../types";

test("should return the initial state", () => {
  expect(reducer(undefined, { type: undefined })).toEqual({
    fieldState: fillField(10, 10, 0),
  });
});

test("should update whole field", () => {
  const previousState: {
    fieldState: FilledFieldTypes;
  } = {
    fieldState: fillField(10, 10, 0),
  };

  expect(
    reducer(previousState, UpdateFieldState(fillField(20, 50, 100)))
  ).toEqual({ fieldState: fillField(20, 50, 100) });
});

test("should update a single cell", () => {
  const previousState: {
    fieldState: FilledFieldTypes;
  } = {
    fieldState: fillField(3, 3, 0),
  };

  expect(
    reducer(previousState, UpdateCellStatus({ x: 2, y: 2, status: "alive" }))
  ).toEqual({
    fieldState: [
      ["vacant", "vacant", "vacant"],
      ["vacant", "vacant", "vacant"],
      ["vacant", "vacant", "alive"],
    ],
  });
});
