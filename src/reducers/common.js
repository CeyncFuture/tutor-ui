import {createReducer} from '../utils/utils';
import {GET_SUBJECTS_SUCCESS, GET_SUBJECTS_ERROR, SET_ERROR} from '../actions/constants/common';

const common = {
    subjects: {
        categories:[]
    },
    hasError: false,
};

const states = {
    [GET_SUBJECTS_SUCCESS]: (state, payload) => {
        return { ...state, subjects: payload};
    },
    [GET_SUBJECTS_ERROR]: (state, payload) => {
        return { ...state, subjects: payload};
    },
    [SET_ERROR]: (state) => {
        return { ...state, hasError: true};
    }
};

export default createReducer(common, states);
