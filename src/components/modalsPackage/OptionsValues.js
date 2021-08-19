import { useState } from 'react'
import Select  from 'react-select'
import {useDispatch,useSelector} from 'react-redux';
import {CreateOneMonthLesson} from '../../redux/actions/ItemOnePackageAction'
import {CalculatePricesOne} from '../../redux/actions/ItemOnePackageAction'
import { useMemo } from 'react';
export default function OptionsValues({ GroupLessons,valor }) {
    const dispatch =  useDispatch();
    const {lessonMonth} = useSelector(state => state.itemPackage);

    const options = [
        { value: '1', label: '1 lessons' },
        { value: '4', label: '4 lessons per month' },
        { value: '8', label: '8 lessons per month' },
        { value: '12', label: '12 lessons per month' },
        { value: '16', label: '16 lessons per month' },
        { value: '20', label: '20 lessons per month' }
      ]
    
    
    const [Items, setItems] = useState(options[0]);
    
    const handleItems = (item)=>{
        setItems(item)

        if(item.value == 1){
            dispatch(CreateOneMonthLesson(item));
            return dispatch(CalculatePricesOne(item));
        }

        dispatch({
            type: "REMOVE_OPTION_CLASS_ONE"
        })
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
