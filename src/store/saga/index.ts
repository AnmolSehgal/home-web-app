import { all } from "@redux-saga/core/effects";
import authSaga from "./authSaga";

const saga = [...authSaga];

export function* rootSaga() {
  yield all(saga);
}
