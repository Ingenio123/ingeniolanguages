import {useState} from 'react';
import Select  from 'react-select'
export default function NumberStudents() {
    const options = [
        { value: '1', label: '1 Student' },
        { value: '2', label: '2 Students' },
        { value: '3', label: '3 Students' },
        { value: '4', label: '4 Students' },
        { value: '5', label: '5 Students' },
        { value: '6', label: '6 Students' },
        { value: '7', label: '7 Students' },
        { value: '8', label: '8 Students' },
        { value: '9', label: '9 Students' },
        { value: '10', label: '10 Students' },
    ]
    const [Items, setItems] = useState(options[0]);
    const handleItems = (item)=>{
        setItems(item)

        if(item.value == 1){
            // dispatch(CreateOneMonthLesson(item));
            // return dispatch(CalculatePricesOne(item));
        }

        // dispatch({
        //     type: "REMOVE_OPTION_CLASS_ONE"
        // })
        // dispatch(CreateOneMonthLesson(item))
        
        // if(GroupLessons){
        //     dispatch({
        //         type:'RESET_PRICES'
        //       })
        // }

        // dispatch({
        //     type: 'CALCULATE_PRICES_ITEMS'
        // })
        // valor()
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
