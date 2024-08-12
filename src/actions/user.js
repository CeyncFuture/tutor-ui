import {get} from 'lodash';
import {SIGN_OUT, UPDATE_PROFILE, UPDATE_PROFILE_ERROR, VERIFY_PROFILE} from "./constants/user";
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
            firstName: '',
            lastName: '',
            userRole: '',
            profilePicture: 1,
            isLoggedIn:true,
            isVerified: false
          })));
          navigate('/')
        } else {
          console.log(response.error);
        }
      });
  }
},
  updateUserProfile(payload) {
    return (dispatch, getState) => {
      //using getState: can access current redux state
      return fetch('/userData', {
        method: 'PUT',
        body: payload
      })
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
