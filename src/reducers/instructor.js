import {createReducer} from '../utils/utils';
import {SHOW_LOADER} from '../actions/constants/user';
import {UPDATE_INSTRUCTOR_PROFILE} from '../actions/constants/instructor';

const instructor = {
  first_name: '',
  last_name: '',
  role: '',
  profile_picture: 1,
  isLoading: true
};

const states = {
  [UPDATE_INSTRUCTOR_PROFILE]: (state, payload) => {
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
