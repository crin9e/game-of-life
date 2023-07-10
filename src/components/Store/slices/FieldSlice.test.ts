import { FilledFieldTypes } from "../../../types";
import { fillField } from "../../../utils/helpers";
import reducer, { UpdateFieldState } from "./FieldSlice";

test("should return the initial state", () => {
  expect(reducer(undefined, { type: undefined })).toEqual({
    fieldState: fillField(50, 50, 0),
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
