import {
  fetchWishListFailure,
  fetchWishListRequest,
  fetchWishListSuccess,
  removeWishListItemFailure,
  removeWishListItemRequest,
  removeWishListItemSuccess,
} from "../actions/wishListActons";
import { actionTypes } from "../actionType";
import { WishlistStateInterface } from "../types";

const initState: WishlistStateInterface = {
  list: [],
  loadSpinner: false,
};

const wishListReducer = (
  state = initState,
  action:
    | ReturnType<typeof fetchWishListRequest>
    | ReturnType<typeof fetchWishListSuccess>
    | ReturnType<typeof fetchWishListFailure>
    | ReturnType<typeof removeWishListItemRequest>
    | ReturnType<typeof removeWishListItemSuccess>
    | ReturnType<typeof removeWishListItemFailure>
) => {
  switch (action.type) {
    case actionTypes.FETCH_WISHLIST_REQUEST:
      return { ...state, loadSpinner: true };
    case actionTypes.FETCH_WISHLIST_SUCCESS:
      return { ...state, loadSpinner: false, list: action.payload.data };
    case actionTypes.FETCH_WISHLIST_FAILURE:
      return { ...state, loadSpinner: false };
    case actionTypes.REMOVE_WISHLIST_ITEM_REQUEST:
      return { ...state, loadSpinner: true };
    case actionTypes.REMOVE_WISHLIST_ITEM_SUCCESS:
      return {
        ...state,
        loadSpinner: false,
        list: state.list.filter(
          (value) => value.productId !== action.payload.productId
        ),
      };
    case actionTypes.REMOVE_WISHLIST_ITEM_FAILURE:
      return { ...state, loadSpinner: false };
    default:
      return { ...state };
  }
};

export default wishListReducer;
