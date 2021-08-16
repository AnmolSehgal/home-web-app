import { all } from "@redux-saga/core/effects";
import authSaga from "./authSaga";
import fetchSagaActions from "./fetchDataSaga";

const saga = [...authSaga, ...fetchSagaActions];

export function* rootSaga() {
  yield all(saga);
}
