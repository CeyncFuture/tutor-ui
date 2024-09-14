import React, {useState} from 'react';
import fetch from "../utils/apiService";
import Loader from "./circularProgress";
import ErrorPage from "./errorPage";
import OTPInput from "./otpInput";
import {useDispatch} from "react-redux";
import userActions from "../actions/user";

const EmailVerification = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(false);

  const requestOTP = async () => {
    setIsLoading(true);
    const { data, error }  = await fetch('/auth/otp',{method: 'POST'});
    if (error) {
      sessionStorage.setItem('isOTPSent', JSON.stringify(false));
      setShowError(true);
    }
    if (data) {
      sessionStorage.setItem('isOTPSent', JSON.stringify(true));
      sessionStorage.setItem('timer', JSON.stringify(300));
    }
    setIsLoading(false);
  };
  const verifyOTP = async (otp) => {
    setIsLoading(true);
    const { data, error }  = await fetch('/auth/otp-verify',{method: 'POST', body: { otp }});
    if (error) {
      setShowError(true);
    }
    if (data) {
      dispatch(userActions.verifyUserProfile());
    }
    setIsLoading(false);
  };

  return isLoading ? <Loader/>
    : showError ? <ErrorPage isNotfound={false}/>
      : <OTPInput requestOTP={requestOTP} verifyOTP={verifyOTP}/>;
}

export default EmailVerification;
