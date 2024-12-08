import {get} from 'lodash';
import {GET_QUESTIONS, GET_TUTORS} from "./constants/admin";
import fetch from '../utils/apiService';
import {createNotification} from "../utils/utils";
import {SHOW_LOADER} from "./constants/user";

const adminActions = {
    showLoader(isLoading){
        return {
            type: SHOW_LOADER,
            payload: isLoading
        }
    },
    getQuestions(page) {
        return (dispatch) => {
            return fetch(`/question?page=${page}&size=20`)
                .then((response) => {
                        if (response.data) {
                            dispatch({
                                type: GET_QUESTIONS,
                                payload: response.data.payload.questions
                            });
                        } else {
                            createNotification("error",get(response, 'error.response.data.message', 'An unexpected error occurred.'));
                        }
                    }
                ).finally(() => {
                    dispatch(adminActions.showLoader(false));
                });
        }
    },
    getTutors(page) {
        return (dispatch) => {
            return fetch(`/tutor?page=${page}&size=20`)
                .then((response) => {
                        if (response.data) {
                            dispatch({
                                type: GET_TUTORS,
                                payload: response.data.payload.tutors
                            });
                        } else {
                            createNotification("error",get(response, 'error.response.data.message', 'An unexpected error occurred.'));
                        }
                    }
                ).finally(() => {
                    dispatch(adminActions.showLoader(false));
                });
        }
    },
};

export default adminActions;
