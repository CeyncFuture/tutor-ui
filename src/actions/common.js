import fetch from '../utils/apiService';
import {GET_SUBJECTS_SUCCESS, GET_SUBJECTS_ERROR, SET_ERROR} from "./constants/common";

const commonActions = {
    getSubjectsSuccess(payload) {
        return {
            type: GET_SUBJECTS_SUCCESS,
            payload
        };
    },
    getSubjectsFailure(error) {
        return {
            type: GET_SUBJECTS_ERROR,
            payload: error
        };
    },
    setError() {
        return {
            type: SET_ERROR,
        };
    },
    getSubjects () {
        return (dispatch) => {
            return fetch(`/subject`)
                .then((response) => {
                        if (response.data) {
                            dispatch(commonActions.getSubjectsSuccess(response.data.payload));
                        } else {
                            dispatch(commonActions.getSubjectsFailure(response.error));
                            dispatch(commonActions.setError());
                        }
                    }
                );
        }
    }
};

export default commonActions;
