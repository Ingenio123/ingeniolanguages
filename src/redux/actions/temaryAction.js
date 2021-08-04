import {CREATE_ONE_iTEMEN_TEMARY} from '../actions/types'
import axios from 'axios';  

// =============== Create One Item Temary ==================== //
export const CreateOneItemTemary = (data) => async (dispatch) =>{
    const dataObject = {
        name_level: data.payload.Level,
        sublevel:[{
            name_sublevel:data.payload.subLevel,
            content:[
                {item: data.payload.data.item1},
                {item: data.payload.data.item2},
                {item: data.payload.data.item3}
            ],
            exam: data.payload.data.Exam
        }]
    }
    console.log(dataObject)
    const res = await axios.post('http://192.168.1.9:4000/temary/createOne',dataObject)
    console.log(res)
    dispatch({
        type: CREATE_ONE_iTEMEN_TEMARY,
        payload: data.payload
    })
}

export const AddItemstoContent =  (data) => (dispatch)=>{
    
    // const res = await axios.post('http://localhost:4000/temary/addItemContent',datos);
    // console.log(res.data)
}