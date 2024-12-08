import {createReducer} from '../utils/utils';
import {GET_QUESTIONS, GET_TUTORS} from "../actions/constants/admin";
import {SHOW_LOADER} from "../actions/constants/user";

const admin = {
    tutors: [],
    questions: [],
    isLoading: false
};

const states = {
    [GET_QUESTIONS]: (state, payload) => {
        return {
            ...state,
            questions: payload
        };
    },
    [GET_TUTORS]: (state, payload) => {
        return {
            ...state,
            tutors: payload,
        };
    },
    [SHOW_LOADER]: (state, payload) => {
        return {
            ...state,
            isLoading: payload
        }
    },
};

export default createReducer(admin, states);