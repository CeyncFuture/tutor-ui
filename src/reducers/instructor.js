import {createReducer} from '../utils/utils';
import {SHOW_LOADER, SIGN_OUT, UPDATE_PROFILE, VERIFY_PROFILE} from '../actions/constants/user';

const instructor = {
  first_name: '',
  last_name: '',
  role: '',
  profile_picture: 1,
  isLoading: true
};

const states = {
  [UPDATE_PROFILE]: (state, payload) => {
    const newState = {
      ...payload,
      isLoading: false
    }
    return { ...state, ...newState };
  },
  [SHOW_LOADER]: (state, payload) => {
    return { ...state, isLoading: payload || true }
  },
};

export default createReducer(instructor, states);
