import React from 'react';
import {useSelector} from "react-redux";
import {get} from 'lodash';
import EmailVerification from "./emailVerification";
import RoleSelectionModal from "./roleSelectionModal";
import QuestionForm from "./questionForm";

const Home = () => {
  const user = useSelector((state) => state.user);
  const is_verified = get(user,'is_verified', false);
  const user_role = get(user,'user_role', 'all');


  if (!is_verified){
    return (
    <EmailVerification/>
    );
  }
  if (user_role === 'all') {
    return (
        <RoleSelectionModal/>
      );
  }
  if (user_role === 'student') {
    return (
      <QuestionForm/>
    );
  } else {
    return (
      <h1>home</h1>
    )
  }

}

export default Home;
