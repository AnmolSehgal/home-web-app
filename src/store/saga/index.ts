import { all } from "@redux-saga/core/effects";
import authSaga from "./authSaga";
import fetchSagaActions from "./fetchDataSaga";
import wishListSaga from "./wishListSaga";

const saga = [...authSaga, ...fetchSagaActions, ...wishListSaga];

export function* rootSaga() {
  yield all(saga);
}
