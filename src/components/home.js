import React from 'react';
import {useSelector} from "react-redux";
import {get} from 'lodash';
import EmailVerification from "./emailVerification";
import RoleSelectionModal from "./roleSelectionModal";
import QuestionForm from "./questionForm";
import Profile from "./Profile";

const Home = () => {
  const user = useSelector((state) => state.user);

  const renderContent = () => {
    const is_verified = get(user,'is_verified', false);
    const role = get(user,'role', 'all');


    if (!is_verified){
      return (
        <EmailVerification/>
      );
    }
    if (role === 'all') {
      return (
        <RoleSelectionModal/>
      );
    }
    if (role === 'student') {
      return (
        <QuestionForm/>
      );
    } else {
      return (
        <Profile
          isEditable={true}
        />
      )
    }
  }

  return (
    <div className="home-container">
      <div className="bg"/>
      <div style={{position: 'relative',zIndex: '2'}}>
        {renderContent()}
      </div>
    </div>
  )

}

export default Home;