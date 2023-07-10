import { put, select } from "redux-saga/effects";
import { FilledFieldTypes, Status } from "../../../types";
import { checkNeighbours } from "../../../utils/helpers";
import { UpdateFieldState } from "../slices/FieldSlice";

export function* processNextFrameSaga(): any {
  try {
    const fieldState: FilledFieldTypes = yield select(
      (state) => state.FieldSlice.fieldState
    );
    const cellsToUpdate: {
      x: number;
      y: number;
      status: Status;
    }[] = [];
    const fieldStateCopy = [...fieldState!];
    fieldStateCopy.map((column, x, array) =>
      column.map((cell: Status, y: number) => {
        const neighbours = checkNeighbours(array, x, y);
        if (cell === "alive") {
          if (neighbours < 2) {
            cellsToUpdate.push({ x, y, status: "vacant" });
          }
          if (neighbours > 3) {
            cellsToUpdate.push({ x, y, status: "vacant" });
          }
        }
        if (cell === "vacant") {
          if (neighbours === 3) {
            cellsToUpdate.push({ x, y, status: "alive" });
          }
        }
      })
    );
    cellsToUpdate.map((cell) => {
      fieldStateCopy[cell.x] = [...fieldStateCopy[cell.x]];
      fieldStateCopy[cell.x][cell.y] = cell.status;
    });
    yield put(UpdateFieldState(fieldStateCopy));
  } catch (e) {
    console.log({ e });
  }
}

export function* killCellSaga(payload: {
  payload: { x: number; y: number };
}): any {
  try {
    const fieldState: FilledFieldTypes = yield select((state) => {
      return state.FieldSlice.fieldState;
    });
    const fieldStateCopy = [...fieldState!];
    const { x, y } = payload.payload;
    fieldStateCopy[x] = [...fieldStateCopy[x]];
    fieldStateCopy[x][y] = "vacant";
    yield put(UpdateFieldState(fieldStateCopy));
  } catch (e) {
    console.log({ e });
  }
}

export function* plantCellSaga(payload: {
  payload: { x: number; y: number };
}): any {
  try {
    const fieldState: FilledFieldTypes = yield select(
      (state) => state.FieldSlice.fieldState
    );
    const fieldStateCopy = [...fieldState!];
    const { x, y } = payload.payload;
    fieldStateCopy[x] = [...fieldStateCopy[x]];
    fieldStateCopy[x][y] = "alive";
    yield put(UpdateFieldState(fieldStateCopy));
  } catch (e) {
    console.log({ e });
  }
}
