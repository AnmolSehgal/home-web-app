import { actionTypes } from "../actionType";

export const addToWishListRequest = (productId: string) => {
  return {
    type: actionTypes.ADD_TO_WISHLIST_REQUEST,
    payload: {
      productId: productId,
    },
  };
};

export const fetchWishListRequest = () => {
  return {
    type: actionTypes.FETCH_WISHLIST_REQUEST,
  };
};

export const fetchWishListSuccess = (data: any) => {
  return {
    type: actionTypes.FETCH_WISHLIST_SUCCESS,
    payload: {
      data: data.map((value: any) => {
        return {
          productId: value.productId,
          productName: value.productName,
          stock: value.stock,
          price: value.price,
          discount: value.discount,
          image: value.image,
        };
      }),
    },
  };
};

export const fetchWishListFailure = () => {
  return {
    type: actionTypes.FETCH_WISHLIST_FAILURE,
  };
};

export const removeWishListItemRequest = (productId: string) => {
  return {
    type: actionTypes.REMOVE_WISHLIST_ITEM_REQUEST,
    payload: {
      productId: productId,
    },
  };
};

export const removeWishListItemSuccess = (productId: string) => {
  return {
    type: actionTypes.REMOVE_WISHLIST_ITEM_SUCCESS,
    payload: {
      productId: productId,
    },
  };
};

export const removeWishListItemFailure = (produtId: string) => {
  return {
    type: actionTypes.REMOVE_WISHLIST_ITEM_FAILURE,
  };
};
