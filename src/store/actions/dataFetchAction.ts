import { actionTypes } from "../actionType";
import { ProductDataInterface } from "../types";

export const fetchDataRequest = () => {
  return {
    type: actionTypes.FETCH_DATA_REQUEST,
  };
};

export const fetchDataSuccess = (data: any) => {
  return {
    type: actionTypes.FETCH_DATA_SUCCESS,
    payload: {
      data: data.map((val: ProductDataInterface) => {
        return val;
      }),
    },
  };
};

export const fetchDataFailure = () => {
  return {
    type: actionTypes.FETCH_DATA_FAILURE,
  };
};
