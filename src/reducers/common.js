import {createReducer} from '../utils/utils';
import {GET_SUBJECTS_SUCCESS, GET_SUBJECTS_ERROR} from '../actions/constants/common';

const common = {
    subjects: {
        categories:[
            // {
            //     subjects: [
            //         {
            //             id: '',
            //             name:''
            //         }
            //     ]
            // }
        ]
    }
};

const states = {
    [GET_SUBJECTS_SUCCESS]: (state, payload) => {
        return { ...state, subjects: payload};
    },
    [GET_SUBJECTS_ERROR]: (state, payload) => {
        return { ...state, subjects: payload};
    }
};

export default createReducer(common, states);
