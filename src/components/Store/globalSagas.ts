import { takeEvery, takeLatest } from "redux-saga/effects";
import {
  killCellSaga,
  plantCellSaga,
  processNextFrameSaga,
} from "./sagas/sagas";

function* globalSagas() {
  yield takeLatest("PLAY", processNextFrameSaga);
  yield takeLatest("STOP", processNextFrameSaga);
  yield takeEvery("KILL_CELL", killCellSaga);
  yield takeEvery("PLANT_CELL", plantCellSaga);
}

export default globalSagas;
