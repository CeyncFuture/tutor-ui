import {get} from 'lodash';
import {
    GET_QUESTIONS_SUCCESS,
    GET_QUESTIONS_FAILURE,
    GET_QUESTIONS_END
} from "./constants/question";
import fetch from '../utils/apiService';
import {createNotification} from "../utils/utils";

const questionActions = {
    getQuestions(page) {
        return (dispatch) => {
            return fetch(`/question?page=${page}&size=20`)
                .then((response) => {
                        const questions = response.data.payload.questions;
                        console.log(response.data)

                        dispatch({
                            type: GET_QUESTIONS_SUCCESS,
                            payload: questions
                        });
                    }
                ).catch(error => {
                    createNotification("error",get(error, 'error.message', 'An unexpected error occurred.'));

                    dispatch({
                        type: GET_QUESTIONS_FAILURE,
                        payload: error.message
                    })
                }
                ).finally(() => {
                    dispatch({
                        type: GET_QUESTIONS_END
                    })
                })
        }
    }
};

export default questionActions;