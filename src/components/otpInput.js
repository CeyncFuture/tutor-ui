import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Timer from "./timer";

const  OTPInput = ({requestOTP, verifyOTP}) => {
  const [number, setNumber] = useState('');
  const savedTime = sessionStorage.getItem('timer');
  const [isValidSavedTimeAvailable, setIsValidSavedTimeAvailable] = useState(savedTime !== 0 || true);
  const isOTPSent = JSON.parse(sessionStorage.getItem('isOTPSent'));

  const handleChange = (event) => {
    const value = event.target.value;
    if (value === '' || /^[0-9\b]+$/.test(value)) {
      setNumber(value);
    }
  };

  const handleTimerCallback = () => {
    setIsValidSavedTimeAvailable(false);
    sessionStorage.setItem('isOTPSent', JSON.stringify(false));
  }

  const otpInputWithTimer = () => {
    return (
      <>
        <Timer callback={handleTimerCallback}/>
        <TextField
          value={number}
          onChange={handleChange}
          variant="outlined"
        />
        <Button variant="contained" color="primary" onClick={()=>verifyOTP(number)}>
          Verify
        </Button>
      </>
    )
  }

  return (
    <div className="otp-input-container">
      <div className="otp-input-form">
        <h2>Please verify your email</h2>
        {
          (isOTPSent && isValidSavedTimeAvailable) ? otpInputWithTimer()
            : (
              <Button variant="contained" color="primary" onClick={requestOTP}>
                Request a new pin
              </Button>
            )
        }
      </div>
    </div>
  );
}

export default OTPInput;
