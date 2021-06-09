import { useState } from 'react'
import  {IoCaretDown} from 'react-icons/io5'
import styled from 'styled-components'
export const  Dropdown = ({title,lesson})=>{
    const [isActive, setIsActive] = useState(true)
    const [isActive2, setIsActive2] = useState(false)
    const [isActive3, setIsActive3] = useState(false)
    const [lesson1, setlesson1] = useState('30 min lesson')

    const Dropdown = styled.div `
        display: flex;
        justify-content:center;
        align-items:center;
        margin-top: 10px;
    `
    const DropdownSection = styled.div `
        border:1px solid rgba(0,0,0,.3);
        width: 80%;
        font-size:18px;
        font-weight:700;
        padding:10px;
        display: flex;
        justify-content:space-between;
    `
    const Icon = styled(IoCaretDown) `
        font-size:24px;
        cursor:pointer;
    `
    const DropdownContent = styled.div `
        margin: 0 auto;
        width:80%;

    `
    const DropdownItem = styled.div `
        font-size:18px;
        font-weight:700;
        padding:8px 10px;
        display:flex;
        justify-content: space-between;
        &:hover{
            cursor:pointer;
            background:rgba(0,0,0,.2)
        }
    `
    const TextSmall = styled.span `
        font-size:14px;
        margin-top:6px;
        margin-right: 55px;
    `
    const Usd = styled.span `
        color:red;
    `
    
    

    return (
        <>
             <Dropdown>
                <DropdownSection> {lesson1}  <Icon onClick={ (e)=> setIsActive(!isActive)} /> </DropdownSection>
            </Dropdown>
            {isActive && (
                < DropdownContent>
                    <DropdownItem >4 /  month $60</DropdownItem>
                    <DropdownItem >6/  month  $90</DropdownItem>
                    <DropdownItem >8/  month  $120</DropdownItem>
                </ DropdownContent>
            )}
            <Dropdown>
                <DropdownSection> 45 min lessons   <Icon onClick={ (e)=> setIsActive2(!isActive2) } /> </DropdownSection>
            </Dropdown>
            {isActive2 && (
                < DropdownContent>
                    <DropdownItem onClick={(e)=> setIsActive2(false)}>4  lessons / <TextSmall>monthly</TextSmall>  <Usd>  USD 90 </Usd> </DropdownItem>
                    <DropdownItem onClick={(e)=> setIsActive2(false)}>6 lessons /  monthly <Usd>USD 135</Usd></DropdownItem>
                    <DropdownItem onClick={(e)=> setIsActive2(false)}>8/  month  $180</DropdownItem>
                </ DropdownContent>
            )}
            <Dropdown>
                <DropdownSection> 60 min lessons   <Icon onClick={ (e)=> setIsActive3(!isActive3) } /> </DropdownSection>
            </Dropdown>
            {isActive3 && (
                < DropdownContent>
                    <DropdownItem onClick={(e)=> setIsActive3(false)}>4 /  month  $</DropdownItem>
                    <DropdownItem onClick={(e)=> setIsActive3(false)}>6/  month  $</DropdownItem>
                    <DropdownItem onClick={(e)=> setIsActive3(false)}>8/  month  $ </DropdownItem>
                </ DropdownContent>
            )} 
        </>
    );
}