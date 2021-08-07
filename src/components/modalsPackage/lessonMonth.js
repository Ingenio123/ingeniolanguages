import { memo,useEffect } from 'react';
import styled from 'styled-components';
import {useDispatch,useSelector} from 'react-redux'

import {Months_lesson} from '../../redux/actions/packageAction'


function LessonMonth({handleMonth,InputMonths,Months}) {
  const dispatch = useDispatch()
  const Opcion = useSelector(state => state.itemPackage.optionClass)
  
  useEffect(() => {
    dispatch(Months_lesson(Months,Opcion))
    }, [Months])

    return (
        <div style={{width:"100px"}}>
            <TextLesson>Choose Month</TextLesson>
            <br /> 
            <MonthBuy   onChange={handleMonth}  ref={InputMonths} type="number"  min="1" max="12" />
        </div>
    )
}

export default  memo(LessonMonth);

const TextLesson = styled.span `
  font-size:16px;
  letter-spacing: 0px;
`

const MonthBuy =  styled.input`
  background:transparent;
  font-size:1rem;
  border:1px solid silver;
  padding:5px 4px;
  width: ${({Month})=>(Month ? '100%' : '100%' )};
  border-radius: 5px;
`
