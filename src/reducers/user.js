import {createReducer} from '../utils/utils';
import {SIGN_OUT, UPDATE_PROFILE, UPDATE_USER_ROLE, VERIFY_PROFILE} from '../actions/constants/user';

const user = {
  first_name: '',
  last_name: '',
  user_role: '',
  profile_picture: 1
};

const states = {
  [UPDATE_PROFILE]: (state, payload) => {
    return { ...state, ...payload};
  },
  [SIGN_OUT]: () => {
    return user;
  },
  [VERIFY_PROFILE]: (state) => {
    return { ...state, is_verified: true }
  },
  [UPDATE_USER_ROLE]: (state, payload) => {
    return { ...state, user_role: payload }
  }
};

export default createReducer(user, states);
