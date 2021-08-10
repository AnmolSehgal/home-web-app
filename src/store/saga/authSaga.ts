import { takeLatest, put } from "@redux-saga/core/effects";
import { push } from "connected-react-router";

import { onOTPSubmit, onPhoneNumberSubmit } from "../../services/firebase/auth";
import {
  phoneNumberAuthSuccess,
  otpAuthSuccess,
  phoneNumberAuthFailure,
  otpAuthFailure,
  phoneNumberAuthRequest,
  otpAuthRequest,
} from "../actions/signInAction";
import { actionTypes } from "../actionType";

function* otpAuthRequestSaga({
  payload,
}: ReturnType<typeof otpAuthRequest>): Generator {
  try {
    const userData: any = yield onOTPSubmit(payload.otp);
    localStorage.setItem("uid", userData.user.uid);
    localStorage.setItem("phoneNumber", userData.user.phoneNumber);
    yield put(otpAuthSuccess());
    yield put(push("/"));
  } catch (error) {
    console.log(error);
    yield put(otpAuthFailure());
  }
}

function* phoneNumAuthRequestSaga({
  payload,
}: ReturnType<typeof phoneNumberAuthRequest>) {
  try {
    yield onPhoneNumberSubmit(payload.phoneNumber);
    yield put(phoneNumberAuthSuccess());
  } catch (error) {
    console.log(error);
    yield put(phoneNumberAuthFailure());
  }
}

const authSaga = [
  takeLatest(actionTypes.OTP_AUTHENTICATION_REQUEST, otpAuthRequestSaga),
  takeLatest(
    actionTypes.PHONE_NUMBER_AUTHENTICATION_REQUEST,
    phoneNumAuthRequestSaga
  ),
];
export default authSaga;
