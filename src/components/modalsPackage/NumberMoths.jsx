import {useState} from 'react';
import Select  from 'react-select'
export default function NumberMonths() {
    const options = [
        { value: '1', label: '1 Month' },
        { value: '2', label: '2 Months' },
        { value: '3', label: '3 Months' },
        { value: '4', label: '4 Months' },
        { value: '5', label: '5 Months' },
        { value: '6', label: '6 Months' },
        { value: '7', label: '7 Months' },
        { value: '8', label: '8 Months' },
        { value: '9', label: '9 Months' },
        { value: '10', label: '10 Months' },
        { value: '11', label: '11 Months' },
        { value: '12', label: '12 Months' },
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
        <>
            <Select 
                options={options}
                onChange={handleItems}
            />
        </>
    )
}
