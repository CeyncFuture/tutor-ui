import {createReducer} from '../utils/utils';
import {GET_TUTORS_START, GET_TUTORS_SUCCESS, GET_TUTORS_FAILURE, GET_TUTORS_END} from "../actions/constants/tutor";

const initialState = {
    tutors: [],
    totalElements: 0,
    error: null
};

const reducers = {
    [GET_TUTORS_SUCCESS]: (state, payload) => {
        return {
            ...state,
            tutors: payload.tutors,
            totalElements: payload.totalElements
        };
    },
    [GET_TUTORS_FAILURE]: (state, payload) => {
        return {
            ...state,
            error: payload
        };
    }
};

export default createReducer(initialState, reducers);