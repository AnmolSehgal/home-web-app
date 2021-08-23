import { all } from "@redux-saga/core/effects";
import authSaga from "./authSaga";
import cartSaga from "./cartSaga";
import fetchSagaActions from "./fetchDataSaga";
import wishListSaga from "./wishListSaga";

const saga = [...authSaga, ...fetchSagaActions, ...wishListSaga, ...cartSaga];

export function* rootSaga() {
  yield all(saga);
}
