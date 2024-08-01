import {createReducer} from '../utils/utils';
import {UPDATE_PROFILE} from '../actions/constants/user';

const user = {
  firstName: '',
  lastName: '',
  userRole: '',
  profilePicture: 1
};

const states = {
  [UPDATE_PROFILE]: (state, payload) => {
    const newState = state
      .set('firstName', payload.firstName)
      .set('lastName', payload.lastName)
      .set('userRole', payload.userRole)
      .set('profilePicture', payload.profilePicture);
    return newState;
  }
};

export default createReducer(user, states);
