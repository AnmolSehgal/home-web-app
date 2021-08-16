import { fetchData } from "../../services/firebase/firestore";
import { put, takeLatest } from "@redux-saga/core/effects";
import { fetchDataSuccess, fetchDataFailure } from "../actions/dataFetchAction";
import { actionTypes } from "../actionType";

function* fetchDataSaga(): Generator {
  try {
    const data = yield fetchData();
    yield put(fetchDataSuccess(data));
  } catch (err) {
    console.log(err);
    fetchDataFailure();
  }
}

const fetchSagaActions = [
  takeLatest(actionTypes.FETCH_DATA_REQUEST, fetchDataSaga),
];

export default fetchSagaActions;
