import { useState } from 'react'
import Select  from 'react-select'
import {useDispatch,useSelector}  from 'react-redux'
import {CreateOneItems} from '../../redux/actions/ItemOnePackageAction'

export default function Optiontime({GroupLessons,valor}) {
    // const  = useSelector(state => state.)
    const options = [
        { value: '30', label: '30 min' },
        { value: '45', label: '45 min' },
        { value: '60', label: '60 min' }
      ]


    const [Items, setItems] = useState(options[0]);
    const dispatch  = useDispatch();

    const handleItems = (item)=>{
        setItems(item)
        dispatch(CreateOneItems(item))

        if(GroupLessons){
            dispatch({
                type:'RESET_PRICES'
            })
        }

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
