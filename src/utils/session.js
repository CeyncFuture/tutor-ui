import fetch from '../utils/apiService';
import config from '../config';
import {get} from 'lodash';


const isWhiteListedRoute = () => {
  const list = get(config,'WHITELISTED_ROUTES',['login', 'register']);
  const route = window.location.pathname.split('/')[1];
  return route && list.indexOf(route) > -1;
};

const redirectToLogin = () => {
  window.history.replaceState(null, '', '/login');
}

const getUserData = () => {
  return fetch('/userData');
};

const session = (callback) => {

  const userToken = sessionStorage.getItem('usrtkn');

  if (!userToken && !isWhiteListedRoute()) {
    redirectToLogin();
  }

  if (isWhiteListedRoute()) {
    return callback();
  }

  try {
    getUserData()
      .then((response) => {
        response.isLoggedIn = true;
        callback(response);
      });
  } catch {
    redirectToLogin();
  }
};

export default session;
