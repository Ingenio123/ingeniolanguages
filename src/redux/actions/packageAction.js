import {PRICE_LESSON,LESSON_MONTHS} from './types';

export const  Select_Package = (price,idiom,lesson,time) => (dispatch) =>{
    
    dispatch({
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
    
    dispatch({
        type: 'Delete_Package',
        payload: idiom
    })

}

export const  Months_lesson = (data) => (dispatch)=>{
    console.log(data)

    if(data.value > 0 && data.value <=12 ){ 
        
        dispatch({
            type: 'NUMBER_MONTHS',
            payload: data.value
        })

        
        dispatch({
            type:LESSON_MONTHS,
        }) 

    }

    return '';

}
