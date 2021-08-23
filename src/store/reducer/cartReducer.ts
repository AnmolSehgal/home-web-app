//import { actionTypes } from "../actionType";

import {
  fetchCartFailure,
  fetchCartRequest,
  fetchCartSuccess,
  removeFromCartFailure,
  removeFromCartRequest,
  removeFromCartSuccess,
} from "../actions/cartAction";
import { actionTypes } from "../actionType";
import { CartStateInterface } from "../types";

const initState: CartStateInterface = {
  itemList: [],
  loadSpinner: false,
};

const cartReducer = (
  state = initState,
  action:
    | ReturnType<typeof fetchCartRequest>
    | ReturnType<typeof fetchCartSuccess>
    | ReturnType<typeof fetchCartFailure>
    | ReturnType<typeof removeFromCartRequest>
    | ReturnType<typeof removeFromCartSuccess>
    | ReturnType<typeof removeFromCartFailure>
) => {
  switch (action.type) {
    case actionTypes.FETCH_CART_REQUEST:
      return { ...state, loadSpinner: true };

    case actionTypes.FETCH_CART_SUCCESS:
      return {
        ...state,
        itemList: action.payload.itemList,
        loadSpinner: false,
      };

    case actionTypes.FETCH_CART_FAILURE:
      return { ...state, loadSpinner: false };

    case actionTypes.REMOVE_ITEM_FROM_CART_REQUEST:
      return { ...state, loadSpinner: true };

    case actionTypes.REMOVE_ITEM_FROM_CART_SUCCESS:
      return {
        ...state,
        itemList: state.itemList.filter((value) => {
          return value.productId !== action.payload.productId;
        }),
        loadSpinner: false,
      };

    case actionTypes.REMOVE_ITEM_FROM_CART_FAILURE:
      return { ...state, loadSpinner: false };

    default:
      return { ...state };
  }
};
export default cartReducer;
