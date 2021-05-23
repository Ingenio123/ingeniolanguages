import {ADD_ID_TEACHER} from '../actions/types'
const idsReducers = (state,action)=>{
    switch(action.type){
        case ADD_ID_TEACHER:
            return {
                ...state,
                ids: [...state.id_teacher, action.payload]
            }
        default:

            return state;
    }
}
export default idsReducers;