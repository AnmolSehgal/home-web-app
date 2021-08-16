import {
  fetchDataFailure,
  fetchDataRequest,
  fetchDataSuccess,
} from "../actions/dataFetchAction";
import { actionTypes } from "../actionType";
import { ProductStateInterface } from "../types";

const initState: ProductStateInterface = {
  data: [],
  dataSuccess: false,
};

const productsReducer = (
  state = initState,
  action:
    | ReturnType<typeof fetchDataRequest>
    | ReturnType<typeof fetchDataSuccess>
    | ReturnType<typeof fetchDataFailure>
) => {
  switch (action.type) {
    case actionTypes.FETCH_DATA_REQUEST:
      return { ...state, dataSuccess: true };
    case actionTypes.FETCH_DATA_SUCCESS:
      return { ...state, data: action.payload.data, dataSuccess: false };
    case actionTypes.FETCH_DATA_FAILURE:
      return { ...state, dataSuccess: false };
    default:
      return { ...state };
  }
};
export default productsReducer;
