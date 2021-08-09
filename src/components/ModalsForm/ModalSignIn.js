import styled from 'styled-components'
import {MdClose} from "react-icons/md";
import {useForm} from 'react-hook-form';
import axios from 'axios';
import Url from '../Urls'
import {authenticate} from '../../helpers/Auth'
import {withRouter} from 'react-router-dom'
// import {Login} from '../../redux/actions/authAction'
import {LOGIN_SUCCESS} from '../../redux/actions/types'
import {useDispatch,useSelector} from 'react-redux'
import{useRef,useCallback,useEffect} from 'react'

function ModalSignIn({history,ShowModal,setShowModal}) {
    const {register,handleSubmit,formState:{errors} }  =  useForm();
    const dispatch = useDispatch()
    const Auth = useSelector(state => state.auth);
    const modalRef = useRef();
    const FormModal = useRef();

    // handleSubmit 
    const handleSubmitForm = data =>{
        console.log(FormModal)
        FormModal.current[0].value = '';
        FormModal.current[1].value = '';
        DataServer(data)
    }

    async function DataServer (data){
        const datos = {
            email: data.email,
            password:data.password
        }
        const EndPoint = Url.url + '/data/userSignIn'
        const res = await axios.post(EndPoint,datos);

        authenticate(res,()=>{
            history.push('/payclient')
            dispatch({
                type: LOGIN_SUCCESS
            })
        })

    }

    const closeModal = e => {

        if (modalRef.current === e.target) {
            setShowModal(false);
        }
      };

    const keyPress = useCallback(e => {
        
        if (e.key === 'Escape' && ShowModal) {
        setShowModal(false);
        }
    },
    [setShowModal, ShowModal]
    );
    useEffect(
    () => {
        document.addEventListener('keydown', keyPress);
        return () => {
        document.removeEventListener('keydown', keyPress);
        }
    },
    [keyPress]
    );

    return (
        <div>
             {
            ShowModal?( 
            <Background onClick={closeModal} ref={modalRef} >
                <ModalWrapper>
                <HeaderWrapper>
                    <h6>SigIn</h6>
                </HeaderWrapper>

                <Form ref={FormModal} onSubmit={ handleSubmit(data => handleSubmitForm(data) ) }>

                    <div class="form-group">
                        <label for="Email">Email</label>
                        <input type="email" class="form-control" id="Email" {...register("email",{
                            required: "Campo Requerido",
                            maxLength:{
                                value: 200,
                                message: "maximum characters is 200"
                            },
                            // pattern:{
                            //     value: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/g,
                            //     message: "Email Is Invalid"
                            // }
                        })} />
                        
                        <MsgErr className="text-small">{errors.email?.message}</MsgErr>
                    </div>
                    <div class="form-group">
                        <label for="Password">Password</label>
                        <input type="password" class="form-control" id="Password"  {...register("password",{
                            required: "Campo Requerido",
                            maxLength:{
                                value: 20,
                                message: "maximum characters is 40"
                            }
                        })} />
                        <MsgErr className="text-small">{errors.password?.message}</MsgErr>
                    </div>
                    
                    <ButtonSubmit className="btn">Send</ButtonSubmit>
                </Form>
                <BtnClose onClick={ () => setShowModal(prev => !prev) }  />    
                </ModalWrapper>
            </Background>):null  } 
        </div>
    )
}

export default  withRouter(ModalSignIn);

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.8);
  position: fixed;
  z-index:9;
  top:0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalWrapper = styled.div`
  width: 800px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  position: relative;
  padding:30px;
`;
const HeaderWrapper = styled.div `
    width: 100%;
    border-bottom: 2px solid rgba(99, 110, 114,.5);
    padding-bottom: 10px;
    margin-bottom:10px;
    &>h6{
        color:rgba(99, 110, 114,1);
        text-align:center;
        font-size:2rem;
        line-height: 0;
        margin:0;
        margin-bottom: 10px;
        font-weight:200;
    }
`
const Form = styled.form `
    margin: 0 auto;
    width: 80%;
`
const ButtonSubmit = styled.button`
    background-color: #314584;
    color:#fff;
    &:hover{
        color:#fff;
        background:#445dad;
    }
` 
const MsgErr =  styled.span`
    color:red;
`
const BtnClose = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 25px;
  height: 25px;
  padding: 0;
  z-index: 10;
`