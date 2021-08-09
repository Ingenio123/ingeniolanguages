import { useState } from 'react'
import Select  from 'react-select'
import {useDispatch} from 'react-redux';
import {CreateOneMonthLesson} from '../../redux/actions/ItemOnePackageAction'
export default function OptionsValues({ GroupLessons,valor }) {
    const dispatch =  useDispatch();
    
    const options = [
        { value: '4', label: '4 lessons per month' },
        { value: '8', label: '8 lessons per month' },
        { value: '12', label: '12 lessons per month' },
        { value: '16', label: '16 lessons per month' },
        { value: '20', label: '20 lessons per month' }
      ]
    
    
    const [Items, setItems] = useState(options[0]);
    
    const handleItems = (item)=>{
        setItems(item)
        dispatch(CreateOneMonthLesson(item))

        // if(GroupLessons){
        //     dispatch({
        //         type:'RESET_PRICES'
        //       })
        // }

        dispatch({
            type: 'CALCULATE_PRICES_ITEMS'
        })
        valor()
    }
    
    
    return (
        <div>
            <Select 
                options={options}
                onChange={handleItems}
                 />
        </div>
    )
}
