import {createReducer} from '../utils/utils';
import {SIGN_OUT, UPDATE_PROFILE, VERIFY_PROFILE} from '../actions/constants/user';

const user = {
  firstName: '',
  lastName: '',
  userRole: '',
  profilePicture: 1
};

const states = {
  [UPDATE_PROFILE]: (state, payload) => {
    return { ...state, ...payload};
  },
  [SIGN_OUT]: () => {
    return user;
  },
  [VERIFY_PROFILE]: (state) => {
    return { ...state, isVerified: true }
  }
};

export default createReducer(user, states);
