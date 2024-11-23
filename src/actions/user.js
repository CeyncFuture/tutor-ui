import {get} from 'lodash';
import {SIGN_OUT, UPDATE_PROFILE, UPDATE_PROFILE_ERROR, VERIFY_PROFILE, SHOW_LOADER} from "./constants/user";
import fetch from '../utils/apiService';
import commonActions from './common';
import { createNotification } from '../utils/utils';

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
  verifyUserProfile(){
    return {
      type: VERIFY_PROFILE
    }
  },
  showLoader(payload){
    return {
      type: SHOW_LOADER,
      payload
    }
  },
  register(payload, navigate){
    return (dispatch) => {
      return fetch('/auth/register', {
        method: 'POST',
        body: payload
      })
        .then((response) => {
          if (response.data) {
            createNotification("success",get(response, 'data.message', 'Successfully registered!'));
            navigate('/login')
          } else {
            createNotification("error",get(response, 'error.response.data.message', 'An unexpected error occurred.'));
            // dispatch(commonActions.setError());
          }
        });
    }
  },
  login(payload, navigate){
  return (dispatch) => {
    return fetch('/auth/login', {
      method: 'POST',
      body: payload
    })
      .then((response) => {
        if (response.data){
          sessionStorage.setItem('usrtkn', get(response, 'data.payload.access_token'));
          dispatch(userActions.updateUserProfileSuccess(get(response, 'data.payload.user',  {
            first_name: '',
            last_name: '',
            role: '',
            profile_picture: 1,
            is_logged_in:true,
            is_verified: false
          })));
          createNotification("success",get(response, 'data.message', 'Successfully login!'));
          navigate('/')
        } else {
          // dispatch(commonActions.setError());
          createNotification("error",get(response, 'error.response.data.message', 'An unexpected error occurred.'));
        }
      });
  }
},
  updateUserProfile(payload, isEdit) {
    return (dispatch) => {
      dispatch(userActions.showLoader());
      return fetch('/user', {
        method: isEdit ? 'PUT' : 'POST',
        body: payload
      })
        .then((response) => {
          if (response.data) {
            !isEdit && sessionStorage.setItem('usrtkn', get(response, 'data.token.access_token'));
            dispatch(userActions.updateUserProfileSuccess(get(response, 'data.payload')));
            createNotification("success",get(response, 'data.message', 'Successfully updated!'));
          } else {
            dispatch(userActions.updateUserProfileFailure(response.error));
            dispatch(commonActions.setError());
            dispatch(userActions.showLoader(false));
            createNotification("error",get(response, 'error.response.data.message', 'An unexpected error occurred.'));
          }
        }
      );
    }
  },
  getUserById(userId) {
    return (dispatch) => {

      return fetch(`/user/${userId}`)
        .then((response) => {
            if (response.data) {
              dispatch(userActions.updateUserProfileSuccess(response));
            } else {
              // dispatch(userActions.updateUserProfileFailure(response.error));
              createNotification("error",get(response, 'error.response.data.message', 'An unexpected error occurred.'));
            }
          }
        );
    }
  },
  getUserById(userId) {
    return (dispatch) => {

      return fetch(`/user/${userId}`)
        .then((response) => {
          if (response.data) {
            dispatch(userActions.updateUserProfileSuccess(response));
          } else {
            // dispatch(userActions.updateUserProfileFailure(response.error));
            createNotification("error",get(response, 'error.response.data.message', 'An unexpected error occurred.'));
          }
        }
      );
    }
  }
};

export default userActions;
