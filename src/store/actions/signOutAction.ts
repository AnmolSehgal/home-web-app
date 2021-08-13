import { actionTypes } from "../actionType";

export function signOutRequest() {
  return { type: actionTypes.SIGN_OUT_REQUEST };
}

export function signOutSuccess() {
  return { type: actionTypes.SIGN_OUT_SUCCESS };
}

export function signOutFailure() {
  return { type: actionTypes.SIGN_OUT_FAILURE };
}
