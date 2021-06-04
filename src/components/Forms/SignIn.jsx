import '../../assets/components/ImageForm.css';
import styled from 'styled-components';
import { useState } from 'react';
import {Login} from '../../redux/actions/authAction'
import {useDispatch} from 'react-redux'
import {withRouter} from 'react-router-dom'




const SignIn =  props =>{

        // ##########  estados ############ 
        const [form, setValue] = useState({
            email: ''
        })
        //#################################
        const dispatch = useDispatch()

        const handleInput = e =>{
            setValue({
                ...form,
                [e.target.name]:e.target.value
            })

        }

        const handleOnSubmit = (e)=>{
            e.preventDefault();

            // ###### IMPORTANT ######## 
//          --> SIEMPRE UTILILIZAR EL DISPATCH PARA LLAMAR EL ACTION <-- 
            dispatch(Login(form))
            // ########################
            props.history.push('/')
            e.target.reset();
        }  
    

    return(
        <>
            <div className="container ">
               
                    <h1 className="text-center mt-5">Bienvenido</h1>
                    <div className="row ">
                        <div className="col-md-6   ">
                            <form  onSubmit={handleOnSubmit}>
                                <div className="row mt-4">
                                    <div className="col-12 col-md-12 ">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input 
                                                name="email"
                                                type="email"
                                                className="form-control"
                                                placeholder="Email@example.com"
                                                onChange={handleInput}    
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-12">
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input 
                                                name="password"
                                                type="password"
                                                className="form-control"
                                                onChange={handleInput}   
                                                />
                                        </div>
                                    </div>
                                    <ButtonSubmit >Submit</ButtonSubmit>
                                </div>
                                
                            </form>
                            <Linea></Linea>
                            <Or>Or</Or>
                            <Centrar>
                                <ButtonGoogle href="https://www.ingenioapi.com/google" >Google</ButtonGoogle>
                            </Centrar>
                        </div>

                        <div className="col-md-6 ">
                            <div className="card" >
                                
                            </div>
                        </div>
                </div>
                
            </div>
        </>
    );
}

export default withRouter(SignIn);

const ButtonSubmit = styled.button`
    border-radius:10px;
    border:2px solid #314584 ; 
    padding:8px  24px 4px 24px;
    font-size:20px;
    background:transparent;
    color:#314584;
    transition:.2s ease-in-out;
    margin:0 auto;
    &:hover{
        color:white;
        padding:8px  30px 4px 30px;
        background:#314584;
        
    }
`
const Linea = styled.hr `
    margin-top:30px;
    width:100%;
`
const Or = styled.span `
    color: #6c757d;
    font-size:18px;
    font-weight:600;
    display:flex;
    justify-content:center;
`

const Centrar = styled.div `
    display:flex;
    justify-content:center;
    margin: 10px 0;
`
const  ButtonGoogle = styled.a `
    font-size:20px;
    background:  #FF3946 ;
    padding:5px 20px;
    color:white;
    transition: .2s ease-in-out;
    &:hover{
        color:white;
        padding: 5px 25px;
    }
`