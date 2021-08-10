import styled from 'styled-components';
import axios from 'axios';
import {useRef} from 'react'
import Url from '../Urls'
import {useDispatch}  from 'react-redux'

export default function BoxVerify() {
    const FormRef =  useRef()
    const dispatch = useDispatch()
    const SendCode = async (e)=>{
        e.preventDefault();
        // FormRef.current[0].value
        const data = {
            CodeDesc: FormRef.current[0].value
        }
        const res = await axios.post(Url.url + '/verifycodeDescuento',data);
        console.log(res.data)

        dispatch({
            type: 'ValorDesc',
            payload: res.data.valor
        })
        
    }
    return (
        <>
            <BoxCodeVirify ref={FormRef} onSubmit={(e) => SendCode(e) } >
                <input type="text" placeholder="Redeem coupon" className="form-control" />
                <ButtonVerify className="btn">Verify</ButtonVerify>
            </BoxCodeVirify>
        </>
    )
}

const BoxCodeVirify = styled.form`  
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const ButtonVerify = styled.button `
    background-color: rgba(49,69,132,1);
    color:white;
    margin-left: 6px;
    &:hover{
        color:white;
        background: #405aaf;
    }
`
