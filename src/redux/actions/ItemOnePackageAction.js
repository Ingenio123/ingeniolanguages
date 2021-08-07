import {ITEM_PACKAGE,
    LESSON_MONTH,
    GROUP_CLASS_CANT_PERSONS,
    GROUP_TOW_CLASS_CANT_PERSONS,
    GROUP_MORE_OF_TWO_PERSONS,
    CHANGE_TIME,
    CHANGE_LESSON,
    CALCULO_MONTHS} from './types'

export const CreateOneItems  = (data) => (dispatch) =>{
    
    return dispatch({
        type: ITEM_PACKAGE,
        payload: data
    })

}


export const CreateOneMonthLesson =  (data) => (dispatch)=>{
    
    return dispatch({
        type: LESSON_MONTH,
        payload:data
    })

} 

export const GroupPersons = (data)=> (dispatch) =>{

    const valor = parseInt(data.value)
    let valorCalcular = 0;

    if(valor >1 && valor === 2){
        valorCalcular = 0.75; // --> serial el 75%
        
        dispatch({
            type:GROUP_TOW_CLASS_CANT_PERSONS,
            payload: valorCalcular
        })

        return dispatch({
            type:'PRICES_GROUP'
        })
        
        
    }

    if(valor > 2  && valor <= 10){

        valorCalcular = 0.50;

        dispatch({
            type: GROUP_MORE_OF_TWO_PERSONS,
            payload: {
                valorCalcular,
                valor
            }
        })

        return dispatch({
            type:'PRICES_GROUP'
        })

        
    }

    dispatch({
        type: GROUP_CLASS_CANT_PERSONS,
        payload:valor
    })

}
