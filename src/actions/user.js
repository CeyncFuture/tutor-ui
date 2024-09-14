import {get} from 'lodash';
import {SIGN_OUT, UPDATE_PROFILE, UPDATE_PROFILE_ERROR, VERIFY_PROFILE, SHOW_LOADER} from "./constants/user";
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
  verifyUserProfile(){
    return {
      type: VERIFY_PROFILE
    }
  },
  showLoader(){
    return {
      type: SHOW_LOADER
    }
  },
  register(payload, navigate){
    return () => {
      return fetch('/auth/register', {
        method: 'POST',
        body: payload
      })
        .then((response) => {
          if (response.data) {
            navigate('/login')
          } else {
            console.log(response.error);
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
          navigate('/')
        } else {
          console.log(response.error);
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
            dispatch(userActions.updateUserProfileSuccess(get(response, 'data.payload')));
          } else {
            dispatch(userActions.updateUserProfileFailure(response.error));
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
              dispatch(userActions.updateUserProfileFailure(response.error));
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
            dispatch(userActions.updateUserProfileFailure(response.error));
          }
        }
      );
    }
  }
};

export default userActions;
