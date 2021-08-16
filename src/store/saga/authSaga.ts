import { takeLatest, put } from "@redux-saga/core/effects";
import { push } from "connected-react-router";

import {
  onOTPSubmit,
  onPhoneNumberSubmit,
  onSignOutSubmit,
} from "../../services/firebase/auth";
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
    yield put(otpAuthSuccess());
    yield put(push("/dashboard"));
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
function* signOutSaga() {
  try {
    yield onSignOutSubmit();
    yield put(push("/SignIn"));
    console.log("hi");
    localStorage.removeItem("uid");
  } catch (err) {
    console.log(err);
  }
}

const authSaga = [
  takeLatest(actionTypes.OTP_AUTHENTICATION_REQUEST, otpAuthRequestSaga),
  takeLatest(
    actionTypes.PHONE_NUMBER_AUTHENTICATION_REQUEST,
    phoneNumAuthRequestSaga
  ),
  takeLatest(actionTypes.SIGN_OUT_REQUEST, signOutSaga),
];
export default authSaga;
