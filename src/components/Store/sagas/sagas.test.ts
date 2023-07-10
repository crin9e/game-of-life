import { expectSaga } from "redux-saga-test-plan";
import { killCellSaga, plantCellSaga, processNextFrameSaga } from "./sagas";
import { UpdateFieldState } from "../slices/FieldSlice";
import { fillField } from "../../../utils/helpers";

test("kill cell saga", () => {
  const filledField = fillField(5, 5, 100);
  filledField![2][2] = "vacant";
  return expectSaga(killCellSaga, { payload: { x: 2, y: 2 } })
    .withState({
      FieldSlice: { fieldState: fillField(5, 5, 100) },
    })
    .put(UpdateFieldState(filledField))
    .run();
});

test("plant cell saga", () => {
  const filledField = fillField(5, 5, 0);
  filledField![2][2] = "alive";
  return expectSaga(plantCellSaga, { payload: { x: 2, y: 2 } })
    .withState({
      FieldSlice: { fieldState: fillField(5, 5, 0) },
    })
    .put(UpdateFieldState(filledField))
    .run();
});

test("process next frame saga", () => {
  const filledField = fillField(5, 5, 0);
  filledField![0][0] = "alive";
  filledField![0][4] = "alive";
  filledField![4][4] = "alive";
  filledField![4][0] = "alive";

  return expectSaga(processNextFrameSaga)
    .withState({
      FieldSlice: { fieldState: fillField(5, 5, 100) },
    })
    .put(UpdateFieldState(filledField))
    .run();
});
