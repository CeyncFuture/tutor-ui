import {createReducer} from '../utils/utils';
import {GET_QUESTIONS_START, GET_QUESTIONS_SUCCESS, GET_QUESTIONS_FAILURE, GET_QUESTIONS_END} from "../actions/constants/question";

const initialState = {
    questions: [],
    totalElements: 0,
    error: null
};

const reducers = {
    [GET_QUESTIONS_SUCCESS]: (state, payload) => {
        return {
            ...state,
            questions: payload.questions,
            totalElements: payload.totalElements
        };
    },
    [GET_QUESTIONS_FAILURE]: (state, payload) => {
        return {
            ...state,
            error: payload
        };
    }
};

export default createReducer(initialState, reducers);