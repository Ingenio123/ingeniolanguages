import {PRICE_LESSON,LESSON_MONTHS} from './types';

export const  Select_Package = (price,idiom,lesson,time) => (dispatch) =>{
    
    return dispatch({
        type: PRICE_LESSON,
        payload:{
            lesson,
            idiom,
            time,
            price
        } 
    })
}

export const Delete_Package = (idiom) => (dispatch) => {
    
    return dispatch({
        type: 'Delete_Package',
        payload: idiom
    })

}

export const  Months_lesson = (data,options) => (dispatch)=>{
   
    if(data.value > 0 && data.value <=12 ){ 
        
        if(options === 2) {
            dispatch({
                type: 'NUMBER_MONTHS',
                payload: data.value
            })
            return;
        }

        if(options === 1) {
            dispatch({
                type: 'NUMBER_MONTHS_INDIVIDUAL',
                payload: data.value
            })
            return ;
        }
 
    }


}
