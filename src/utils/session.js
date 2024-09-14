import fetch from '../utils/apiService';
import config from '../config';
import {get} from 'lodash';


const isWhiteListedRoute = () => {
  const list = get(config,'WHITELISTED_ROUTES',['login', 'register', 'tutor']);
  const route = window.location.pathname.split('/')[1];
  return route && list.indexOf(route) > -1;
};

const redirectToLogin = () => {
  sessionStorage.clear();
  window.location.href = '/login';
}

const getUserData = () => {
  return fetch('/user');
};

const session = (callback) => {

  const userToken = sessionStorage.getItem('usrtkn');

  if (!userToken && !isWhiteListedRoute()) {
    redirectToLogin();
  }

  if (isWhiteListedRoute()) {
    return callback();
  }

  getUserData()
    .then((response) => {
      if(response.data){
        response.is_logged_in = true;
        callback(response.data.payload);
      } else {
        redirectToLogin();
      }
    });
};

export default session;
