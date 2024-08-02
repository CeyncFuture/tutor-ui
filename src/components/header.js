import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {get} from 'lodash';
import {useNavigate} from "react-router";
import userActions from "../actions/user";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const profilePicture = get(user, 'profilePicture', 1);
  const isLoggedIn = get(user,'isLoggedIn', false);

  const handleSignOut = () => {
    setIsOpen(false);
    sessionStorage.clear();
    dispatch(userActions.signOut());
    navigate('/login');
  }

  const handleAccountSettings = () => {
    setIsOpen(false);
    navigate('/account');
  }

  const renderAccountList = () => {
    return (
      <ul className="my-account-menu">
        <li>
          <button
            onClick={handleAccountSettings}
          >
            <h2>Account settings</h2>
          </button>
        </li>
        <li>
          <button
            onClick={handleSignOut}
          >
            <h2>Sign out</h2>
          </button>
        </li>
      </ul>
    );
  }

  return (
    <div className="header-container">
      <img className="header-logo" src="" alt="logo" onClick={() => isLoggedIn && navigate('/home')} />
      {isLoggedIn && <img
        className="header-profile"
        src={require(`../assets/profilePictures/${profilePicture}.png`)}
        alt="profile"
        onClick={() => setIsOpen(!isOpen)}
      />}
      {isOpen && renderAccountList()}
    </div>
  );
}

export default Header;
