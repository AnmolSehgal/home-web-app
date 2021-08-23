export interface LoginState {
  loginSuccess: boolean;
  otpSuccess: boolean;
}

export interface StateInterface {
  signIn: LoginState;
}
