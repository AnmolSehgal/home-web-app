import { actionTypes } from "../actionType";

export const addToCartAction = (productId: string, quantity: number) => {
  return {
    type: actionTypes.ADD_ITEM_TO_CART_REQUEST,
    payload: {
      productId: productId,
      quantity: quantity,
    },
  };
};

export const removeFromCartRequest = (productId: string) => {
  return {
    type: actionTypes.REMOVE_ITEM_FROM_CART_REQUEST,
    payload: {
      productId: productId,
    },
  };
};

export const removeFromCartSuccess = (productId: string) => {
  return {
    type: actionTypes.REMOVE_ITEM_FROM_CART_SUCCESS,
    payload: {
      productId: productId,
    },
  };
};

export const removeFromCartFailure = () => {
  return {
    type: actionTypes.REMOVE_ITEM_FROM_CART_FAILURE,
  };
};

export const fetchCartRequest = () => {
  return {
    type: actionTypes.FETCH_CART_REQUEST,
  };
};

export const fetchCartSuccess = (data: any) => {
  return {
    type: actionTypes.FETCH_CART_SUCCESS,
    payload: {
      itemList: data.map((value: any) => {
        return {
          discount: value.discount,
          image: value.image,
          price: value.price,
          productId: value.productId,
          productName: value.productName,
          quantity: value.quantity,
          stock: value.stock,
        };
      }),
    },
  };
};

export const fetchCartFailure = () => {
  return {
    type: actionTypes.FETCH_CART_FAILURE,
  };
};
