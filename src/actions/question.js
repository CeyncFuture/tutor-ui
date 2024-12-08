import {get} from 'lodash';
import {
    GET_QUESTIONS_SUCCESS,
    GET_QUESTIONS_FAILURE
} from "./constants/question";
import fetch from '../utils/apiService';
import {createNotification} from "../utils/utils";
import userActions from "./user";

const questionActions = {
    getQuestions(page) {
        return (dispatch) => {
            return fetch(`/question?page=${page-1}&size=20`)
                .then(response => {
                    if (response.data) {
                        dispatch({
                            type: GET_QUESTIONS_SUCCESS,
                            payload: get(response, "data.payload")
                        })
                    } else {
                        dispatch({
                            type: GET_QUESTIONS_FAILURE,
                            payload: get(response, 'error.response.data.message', 'An unexpected error occurred.')
                        })
                        createNotification("error", get(response, 'error.response.data.message', 'An unexpected error occurred.'));
                    }
                })
        }
    }
};

export default questionActions;