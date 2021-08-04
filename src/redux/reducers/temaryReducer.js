import {CREATE_ONE_iTEMEN_TEMARY} from '../actions/types';

const initialState  = {}
export default function CreateTemary  (state =initialState , action ){
    switch (action.type) {
        case CREATE_ONE_iTEMEN_TEMARY:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state;
    }
}