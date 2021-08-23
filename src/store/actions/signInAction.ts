import { actionTypes } from "../actionType";

export const phoneNumberAuthRequest = (phoneNumber: string) => {
  return {
    type: actionTypes.PHONE_NUMBER_AUTHENTICATION_REQUEST,
    payload: {
      phoneNumber: phoneNumber,
    },
  };
};

export const phoneNumberAuthSuccess = () => {
  return {
    type: actionTypes.PHONE_NUMBER_AUTHENTICATION_SUCCESS,
  };
};

export const phoneNumberAuthFailure = () => {
  return {
    type: actionTypes.PHONE_NUMBER_AUTHENTICATION_FAILURE,
  };
};

export const otpAuthRequest = (otp: string) => {
  return {
    type: actionTypes.OTP_AUTHENTICATION_REQUEST,
    payload: {
      otp: otp,
    },
  };
};

export const otpAuthSuccess = () => {
  return {
    type: actionTypes.OTP_AUTHENTICATION_SUCCESS,
  };
};

export const otpAuthFailure = () => {
  return {
    type: actionTypes.OTP_AUTHENTICATION_FAILURE,
  };
};
