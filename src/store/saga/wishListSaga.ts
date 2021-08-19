import { takeLatest, put } from "@redux-saga/core/effects";

import {
  addToWishList,
  fetchWishList,
  removeWishListItem,
} from "../../services/firebase/firestore";

import {
  addToWishListRequest,
  fetchWishListSuccess,
  removeWishListItemRequest,
  removeWishListItemSuccess,
} from "../actions/wishListActons";
import { actionTypes } from "../actionType";

function* addWishListSaga({
  payload,
}: ReturnType<typeof addToWishListRequest>) {
  try {
    yield addToWishList(payload.productId);
  } catch (err) {
    console.log(err);
  }
}

function* fetchWishListSaga(): Generator {
  try {
    const wishList = yield fetchWishList();
    console.log(wishList);
    yield put(fetchWishListSuccess(wishList));
  } catch (err) {
    console.log(err);
  }
}

function* removeWishListItemSaga({
  payload,
}: ReturnType<typeof removeWishListItemRequest>) {
  try {
    yield removeWishListItem(payload.productId);
    yield put(removeWishListItemSuccess(payload.productId));
  } catch (error) {
    console.log(error);
  }
}

const wishListSaga = [
  takeLatest(actionTypes.ADD_TO_WISHLIST_REQUEST, addWishListSaga),
  takeLatest(actionTypes.FETCH_WISHLIST_REQUEST, fetchWishListSaga),
  takeLatest(actionTypes.REMOVE_WISHLIST_ITEM_REQUEST, removeWishListItemSaga),
];

export default wishListSaga;
