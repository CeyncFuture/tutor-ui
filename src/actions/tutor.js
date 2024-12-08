import {get} from 'lodash';
import {GET_TUTORS_SUCCESS, GET_TUTORS_FAILURE} from "./constants/tutor";
import fetch from '../utils/apiService';
import {createNotification} from "../utils/utils";

const tutorActions = {
    getTutors(page) {
        return (dispatch) => {
            return fetch(`/tutor?page=${page}&size=20`)
                .then(response => {
                        if (response.data) {
                            dispatch({
                                type: GET_TUTORS_SUCCESS,
                                payload: get(response, "data.payload.tutors")
                            })
                        } else {
                            dispatch({
                                type: GET_TUTORS_FAILURE,
                                payload: get(response, 'error.response.data.message', 'An unexpected error occurred.')
                            })
                            createNotification("error",get(response, 'error.response.data.message', 'An unexpected error occurred.'));
                        }
                    }
                )
        }
    },
};

export default tutorActions;