import {createReducer} from '../utils/utils';
import {SHOW_LOADER, SIGN_OUT, UPDATE_PROFILE, VERIFY_PROFILE} from '../actions/constants/user';

const user = {
  first_name: '',
  last_name: '',
  role: '',
  profile_picture: 1,
  isLoading: false
};

const states = {
  [UPDATE_PROFILE]: (state, payload) => {
    const newState = {
      ...payload,
      isLoading: false
    }
    return { ...state, ...newState };
  },
  [SIGN_OUT]: () => {
    return user;
  },
  [VERIFY_PROFILE]: (state) => {
    return { ...state, is_verified: true }
  },
  [SHOW_LOADER]: (state, payload) => {
    return { ...state, isLoading: payload || true }
  },
};

export default createReducer(user, states);
