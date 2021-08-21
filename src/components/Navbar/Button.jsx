import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const Button = styled(Link)`
    background-color: ${({ primary })=> ( primary ? '#ff3946': 'blue')};
    otline: none;
    border:none;
    cursor:pointer;
    text-decoration:none;
    transition: 0.3s;
    display:flex;
    justify-content:center;
    align-items:center;
    padding: ${({ big }) => ( big? '8px 16px ': '14px 2px')};
    color:${({primary}) => (primary? '#fff':'black')};
    &:hover{
        color:white;
        transform:translateY(-5px)
    }

`

