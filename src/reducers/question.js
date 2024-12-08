import {createReducer} from '../utils/utils';
import {GET_QUESTIONS_START, GET_QUESTIONS_SUCCESS, GET_QUESTIONS_FAILURE, GET_QUESTIONS_END} from "../actions/constants/question";

const initialState = {
    questions: [],
    isLoading: false,
    error: null
};

const reducers = {
    [GET_QUESTIONS_START]: (state, payload) => {
        return {
            ...state,
            isLoading: true
        };
    },
    [GET_QUESTIONS_SUCCESS]: (state, payload) => {
        return {
            ...state,
            questions: payload
        };
    },
    [GET_QUESTIONS_FAILURE]: (state, payload) => {
        return {
            ...state,
            error: payload
        };
    },
    [GET_QUESTIONS_END]: (state) => {
        return {
            ...state,
            isLoading:  false
        };
    },
};

export default createReducer(initialState, reducers);