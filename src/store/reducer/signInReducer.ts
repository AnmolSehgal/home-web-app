import {
  otpAuthFailure,
  otpAuthRequest,
  otpAuthSuccess,
  phoneNumberAuthFailure,
  phoneNumberAuthRequest,
  phoneNumberAuthSuccess,
} from "../actions/signInAction";
import { actionTypes } from "../actionType";
import { LoginState } from "../types";

const initState: LoginState = {
  loginSuccess: false,
  otpSuccess: false,
};

const signInReducer = (
  state = initState,
  action:
    | ReturnType<typeof phoneNumberAuthRequest>
    | ReturnType<typeof phoneNumberAuthSuccess>
    | ReturnType<typeof phoneNumberAuthFailure>
    | ReturnType<typeof otpAuthRequest>
    | ReturnType<typeof otpAuthSuccess>
    | ReturnType<typeof otpAuthFailure>
) => {
  switch (action.type) {
    case actionTypes.PHONE_NUMBER_AUTHENTICATION_REQUEST:
      return { ...state, loginSuccess: false };
    case actionTypes.PHONE_NUMBER_AUTHENTICATION_SUCCESS:
      return { ...state, loginSuccess: true };
    case actionTypes.PHONE_NUMBER_AUTHENTICATION_FAILURE:
      return { ...state, loginSuccess: false };
    case actionTypes.OTP_AUTHENTICATION_REQUEST:
      return { ...state, otpSuccess: false };
    case actionTypes.OTP_AUTHENTICATION_SUCCESS:
      return { ...state, otpSuccess: true };
    case actionTypes.OTP_AUTHENTICATION_FAILURE:
      return { ...state, otpSuccess: false };
    default:
      return { ...state };
  }
};
export default signInReducer;
