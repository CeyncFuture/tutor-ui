import React from 'react';
import {useSelector} from "react-redux";
import {get} from 'lodash';
import EmailVerification from "./emailVerification";

const Home = () => {
  const user = useSelector((state) => state.user);
  const isVerified = get(user,'isVerified', false);


  if (!isVerified){
    return (
    <EmailVerification/>
    );
  } else {
    return (
      <h1>home</h1>
    )
  }

}

export default Home;
