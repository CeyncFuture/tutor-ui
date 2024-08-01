import {UPDATE_PROFILE, UPDATE_PROFILE_ERROR} from "./constants/user";
import fetch from '../utils/apiService';

const userActions = {
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
