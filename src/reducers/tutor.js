import {createReducer} from '../utils/utils';
import {GET_TUTORS_START, GET_TUTORS_SUCCESS, GET_TUTORS_FAILURE, GET_TUTORS_END} from "../actions/constants/tutor";

const initialState = {
    tutors: [],
    isLoading: false
};

const reducers = {
    [GET_TUTORS_START]: (state) => {
        return {
            ...state,
            isLoading: true
        }
    },
    [GET_TUTORS_SUCCESS]: (state, payload) => {
        return {
            ...state,
            tutors: payload
        };
    },
    [GET_TUTORS_FAILURE]: (state, payload) => {
        return {
            ...state,
            error: payload
        };
    },
    [GET_TUTORS_END]: (state) => {
        return {
            ...state,
            isLoading: false
        };
    }
};

export default createReducer(initialState, reducers);