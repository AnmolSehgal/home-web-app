import firebase from "firebase";
import "firebase/auth";

export async function onPhoneNumberSubmit(phoneNumber: string) {
  console.log("Hello phone num", phoneNumber);
  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier("signInBtn", {
    size: "invisible",
  });
  await firebase
    .auth()
    .signInWithPhoneNumber(phoneNumber, window.recaptchaVerifier)
    .then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
    });
}

export async function onOTPSubmit(otp: string) {
  console.log("otp", otp);
  const result = await window.confirmationResult.confirm(otp);
  return result;
}

export async function onSignOutSubmit() {
  return await firebase.auth().signOut();
}
