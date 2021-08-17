import {GoogleLogin} from 'react-google-login'
import styled from 'styled-components';
import Url from '../Urls';
import {isAuth,authenticate} from '../../helpers/Auth'
import axios from 'axios'
import {FcGoogle} from 'react-icons/fc'
import {useHistory} from 'react-router-dom'


export default function GoogleButton({contentSign}) {
    const history = useHistory()
    const responseGoogle = (res)=>{
        sendGoogleToken(res.tokenId)
    }
    const sendGoogleToken = (tokenId)=>{
            
        axios.post(Url.url + '/data/authGoogle',{
            idToken:tokenId
        })
        .then(res => {
            informParent(res)
            // dispatch(SignInGoogle())
        })
        .catch(err=> console.log('GOOGLE SIGNIN ERROR',err))
    }
    const informParent = response => {

        authenticate(response, () => {
            if(isAuth()){
                if(isAuth().rol === 'admin') return history.push('/admin');
                if(isAuth().rol === 'teacher') return history.push('/teacherPage');
                if(isAuth().rol === 'user') return history.push('/private');
            }
        });
    };
    return (
        <div>
            <GoogleLogin
                clientId="669011089415-8gtepgk9pivth0itvut5tom96kn9r7i1.apps.googleusercontent.com"
                render={renderProps => (
                    <ButtonGoogle   onClick={ renderProps.onClick } disabled={renderProps.disabled}><FcGoogle /> {contentSign}    </ButtonGoogle> 
                )}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}

const ButtonGoogle = styled.button`

    color: #314584;
    background-color: transparent;
    border:1px solid #314584;
    outline: none;
    border-radius: 4px;
    font-size:1rem;
    width: 10rem;
    transition: all .3 ease-out;
    padding:.375rem .75rem;
    &:hover{
        background-color:rgba(49,69,132,.2)
    }
`