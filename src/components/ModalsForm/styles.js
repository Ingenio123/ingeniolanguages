import styled from 'styled-components';
import {CountryDropdown } from 'react-country-region-selector';
import { IoMailOutline,IoLockClosedOutline,IoEyeOffOutline,IoEyeOutline} from "react-icons/io5";

export const Form = styled.form `
    margin: 0 auto;
    padding: 0 1rem ;
`
// export const Gender = styled.p`
//     margin:0;
//     text-align: center;
//     font-size:1rem;
//     color: #314584;
//     @media  screen and  (max-width:400px){
//         font-size:1rem;
//     }
// `

export  const BoxChecks = styled.div `
    display: flex;
    justify-content: space-around;
    align-items: center;
`
export const InputCountry = styled(CountryDropdown)`
    border:1px solid silver;
    padding: .5rem .75rem!important;
    font-size:1rem;
    color:#495057;
    border-radius: 5px;
    width:100%;
`


// input email  css
export const InputWhithIcon =  styled.div `
    position:relative;
    margin:0;
    &>input{
        padding-left: 40px !important;
        width: 100%;
        border: 1px solid silver;
        border-radius: 4px;
        margin: 0;
        outline: none;
        padding: .2rem;
        box-sizing: border-box;
        transition: 0.3s;
    }
    &>input:focus {
        border-color: dodgerBlue;
        box-shadow: 0 0 6px 0 #ced4da;
    }

    &>input:focus + i {
        color:dodgerBlue;
    }

    &>input[type="password"]{
        padding-left:30px;
        padding: .2rem !important;
    }
    
    &>input[type="password"] + i {
        padding:0;
        padding-left:8px;
        
    }
    &>input[type="text"] + i {
        padding:0;
        padding-left:8px;
    }

    &>i {
        position: absolute;
        left:0;
        top:-5px;
        padding: 9px 8px;
        color:#636e72;
        transition: 0.3s;
        font-size: 1.1rem;
    }
`

export const Icon_i2 = styled(IoEyeOutline)`
    position: absolute;
    top: 6px;
    right: 8px;
    color:dodgerBlue;
    transition: 0.3s;
    font-size:1.2rem;
    cursor:pointer;
`

export const Input = styled.input `
    padding: .5rem .5rem !important;
    font-size:1rem ;
`
export const Icon_i = styled(IoEyeOffOutline)`
    position: absolute;
    top: 6px;
    right: 8px;
    color:#636e72;
    transition: 0.3s;
    font-size:1.2rem;
    cursor:pointer;
`
export const Centrar = styled.div `
    width:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: .1rem;
`
export const ButtonSubmit = styled.button`
    margin-top: ${props => props.mt?'.5rem':'0'};
    background-color: #3f51b5;
    color:#fff;
    width: 10rem;
    &:hover{
        color:#fff ;
        background:#1a237e;
    }
` 
 // line separator whith text in  center 
export const LineCenter =  styled.div `
    display: flex;
    align-items: center;
    text-align: center;
    color:#636e72;
    font-size: 1rem;
    margin:0;
    margin:0 .5rem ;
    &::before , ::after{
        content: '';
        flex: 1;
        border-bottom: 1px solid rgba(99, 110, 114,.5);
    }
    &:not(:empty)::before{
        margin-right: 1rem;
    }
    &:not(:empty)::after{
        margin-left: 1rem;
    }
`
//end line

export const TextGray = styled.span`
    color:gray;
    font-size:1rem;
    margin:0;
    margin-right: .2rem;
    text-align: center;
    width: 100%;
    @media screen and (max-width: 400px) {
      line-height: 1;
    }
`


export const Button =  styled.a`
    font-size:1rem;
    font-weight: 700;
    color: #314584;
    cursor:pointer;
    &:hover{
        color:#f44336 !important;        
    }
    
`

export const CentrarVerticalmente = styled.div `
    display:flex;
    align-items: center;
    flex-wrap:wrap;
    font-size:18px;
    @media screen and (max-width: 400px) {
      font-size: 16px;
    }
`
export const Label   = styled.label`
    font-size:.9em;
    flex-wrap: nowrap;
    margin-left:.2em;
    line-height: 1;
    @media screen and (max-width: 400px) {
        font-size:.8em;
    }
`

export  const Gender  = styled.select`
    padding: .5rem 1rem;
    border:none;
    border:1px solid #ced4da;
    width:100%;
    color: #495057;
    border-radius: 5px;
    font-weight: 400;
    line-height: 1;
    font-size: 1rem;
`