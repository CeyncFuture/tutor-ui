import {get} from 'lodash';
import {GET_TUTORS_SUCCESS, GET_TUTORS_FAILURE} from "./constants/tutor";
import fetch from '../utils/apiService';
import {createNotification} from "../utils/utils";

const tutorActions = {
    getTutors(page) {
        return (dispatch) => {
            return fetch(`/tutor?page=${page}&size=20`)
                .then(response => {
                        const tutors = response.data.payload.tutors;

                        dispatch({
                            type: GET_TUTORS_SUCCESS,
                            payload: tutors
                        })
                    }
                ).catch(error => {
                    createNotification("error",get(error, 'error.message', 'An unexpected error occurred.'));

                    dispatch({
                        type: GET_TUTORS_FAILURE,
                        payload: error.message
                    })
                })
        }
    },
};

export default tutorActions;