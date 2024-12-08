import {get} from 'lodash';
import {UPDATE_INSTRUCTOR_PROFILE, UPDATE_INSTRUCTOR_PROFILE_ERROR} from "./constants/instructor";
import fetch from '../utils/apiService';
import { createNotification } from '../utils/utils';

const instructorActions = {
  updateUserProfileSuccess(payload) {
    return {
      type: UPDATE_INSTRUCTOR_PROFILE,
      payload
    };
  },
  updateUserProfileFailure(error) {
    return {
      type: UPDATE_INSTRUCTOR_PROFILE_ERROR,
      payload: error
    };
  },
  getInstructorById(shareableId) {
    return (dispatch) => {

      return fetch(`/user/admin/${shareableId}`)
        .then((response) => {
            if (response.data) {
              dispatch(instructorActions.updateUserProfileSuccess(get(response, 'data.payload',  {
                first_name: '',
                last_name: '',
                role: '',
                profile_picture: 1,
                is_logged_in:true,
                is_verified: false
              })));
            } else {
              // dispatch(userActions.updateUserProfileFailure(response.error));
              createNotification("error",get(response, 'error.response.data.message', 'An unexpected error occurred.'));
            }
          }
        );
    }
  }
};

export default instructorActions;
