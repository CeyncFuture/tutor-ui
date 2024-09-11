import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {get} from 'lodash';
import {useNavigate} from "react-router";
import userActions from "../actions/user";
import logo from "../assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  let profile_picture = get(user, 'profile_picture', 1);
  profile_picture = profile_picture === null ? 1 : profile_picture;
  const is_logged_in = get(user,'is_logged_in', false);
  const userRole = 'tutor' || get(user,'role', 'all');

  const handleSignOut = () => {
    setIsOpen(false);
    sessionStorage.clear();
    dispatch(userActions.signOut());
    navigate('/login');
  }

  const handleAccountSettings = () => {
    setIsOpen(false);
    navigate('/account', { state: { isEditDisabled: false } });
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
      <img className="header-logo" src={logo} alt="logo" onClick={() => is_logged_in && navigate('/home')} />
      {is_logged_in && userRole !== 'tutor' && <img
        className="header-profile"
        src={require(`../assets/profilePictures/${profile_picture}.png`)}
        alt="profile"
        onClick={() => setIsOpen(!isOpen)}
      />}
      {is_logged_in && userRole === 'tutor' &&
      <button
        className="signOut-button"
        onClick={handleSignOut}
      >
        <h2>Sign out</h2>
      </button>
      }
      {isOpen && renderAccountList()}
    </div>
  );
}

export default Header;
