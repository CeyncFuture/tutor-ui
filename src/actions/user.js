import {get} from 'lodash';
import {SIGN_OUT, UPDATE_PROFILE, UPDATE_PROFILE_ERROR} from "./constants/user";
import fetch from '../utils/apiService';

const userActions = {
  signOut(){
    return {
      type: SIGN_OUT
    }
  },
  updateUserProfileSuccess(payload) {
    return {
      type: UPDATE_PROFILE,
      payload
    };
  },
  updateUserProfileFailure(error) {
    return {
      type: UPDATE_PROFILE_ERROR,
      payload: error
    };
  },
  register(payload){
    return () => {
      return fetch('/api/register', {
        method: 'POST',
        body: payload
      })
        .then((response) => sessionStorage.setItem('usrtkn', get(response,'tkn')))
        .catch((error) => console.log(error));
    }
  },
  login(payload){
  return () => {
    return fetch('/api/login', {
      method: 'POST',
      body: payload
    })
      .then((response) => sessionStorage.setItem('usrtkn', get(response,'tkn')))
      .catch((error) => console.log(error));
  }
},
  updateUserProfile(payload) {
    return (dispatch, getState) => {
      //using getState: can access current redux state
      return fetch('/api/userData', {
        method: 'PUT',
        body: payload
      })
        .then((response) => dispatch(userActions.updateUserProfileSuccess(response)))
        .catch((error) =>  dispatch(userActions.updateUserProfileFailure(error)));
    }
  }
};

export default userActions;
