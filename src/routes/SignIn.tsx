import { useState } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import InputBox from "../components/InputBox";
import Button from "../components/SubmitButton";

import loginImg from "../icons/login.svg";
import logo from "../icons/logo.svg";
import { StateInterface } from "../store/types";
import {
  otpAuthRequest,
  phoneNumberAuthRequest,
} from "../store/actions/signInAction";

const SignIn = (
  props: ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps>
) => {
  const [otp, setOTP] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div className="flex flex-row justify-center">
      <div className="h-full border-l-2">
        <img src={loginImg} className="h-full" alt="login" />
      </div>
      <div className="flex flex-col ml-2 py-2">
        <img src={logo} className="h-20 w-20" alt="logo" />
        <div className="py-1.5 border-b border-text mb-3">Welcome Back</div>
        {!props.loginSuccess ? (
          <div>
            <InputBox
              label="Phone number"
              value={phoneNumber}
              type="text"
              placeholder="Enter Mobile Number"
              onInputChange={(inputVal: string) => {
                setPhoneNumber(inputVal);
              }}
            />
            <Button
              name="Enter"
              className="rounded-xl text-white bg-primary-400 my-2 w-full"
              id="signInBtn"
              onBtnClick={() => {
                console.log("hi");
                props.phoneNumAuthRequest(phoneNumber);
              }}
            />
          </div>
        ) : (
          <div>
            <InputBox
              label="OTP"
              type="number"
              value={otp}
              placeholder="Enter OTP"
              onInputChange={(inputVal: string) => {
                setOTP(inputVal);
              }}
            />
            <Button
              name="Submit"
              className="rounded-xl text-white bg-primary-400 my-2 w-full"
              id="otpBtn"
              onBtnClick={() => {
                props.otpAuthRequest(otp);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = (state: StateInterface) => {
  return {
    loginSuccess: state.signIn.loginSuccess,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    otpAuthRequest: (otp: string) => {
      dispatch(otpAuthRequest(otp));
    },
    phoneNumAuthRequest: (phoneNumber: string) => {
      dispatch(phoneNumberAuthRequest(phoneNumber));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
