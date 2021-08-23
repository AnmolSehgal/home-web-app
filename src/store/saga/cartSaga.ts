import { takeLatest, put } from "@redux-saga/core/effects";
import {
  addItemToCart,
  fetchCart,
  removeItemFromCart,
} from "../../services/firebase/firestore";
import {
  addToCartAction,
  fetchCartFailure,
  fetchCartSuccess,
  removeFromCartFailure,
  removeFromCartRequest,
  removeFromCartSuccess,
} from "../actions/cartAction";
import { actionTypes } from "../actionType";

function* addItemToCartSaga({ payload }: ReturnType<typeof addToCartAction>) {
  try {
    yield addItemToCart(payload.productId, payload.quantity);
  } catch (error) {
    console.log(error);
  }
}

function* fetchCartSaga(): Generator {
  try {
    const data = yield fetchCart();
    yield put(fetchCartSuccess(data));
  } catch (error) {
    console.log(error);

    yield put(fetchCartFailure());
  }
}

function* removeItemFromCartSaga({
  payload,
}: ReturnType<typeof removeFromCartRequest>) {
  try {
    yield removeItemFromCart(payload.productId);
    yield put(removeFromCartSuccess(payload.productId));
  } catch (error) {
    yield put(removeFromCartFailure());
    console.log(error);
  }
}

const cartSaga = [
  takeLatest(actionTypes.ADD_ITEM_TO_CART_REQUEST, addItemToCartSaga),
  takeLatest(actionTypes.REMOVE_ITEM_FROM_CART_REQUEST, removeItemFromCartSaga),
  takeLatest(actionTypes.FETCH_CART_REQUEST, fetchCartSaga),
];

export default cartSaga;
