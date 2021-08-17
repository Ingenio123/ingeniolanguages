import axios from 'axios';
import {isAuth,authenticate,removeCookie} from '../../helpers/Auth';
import Url  from '../../components/Urls';
import {
  USER_LOADED,
  USER_LOADING,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  AUTH_GOOGLE,
  LOGIN_GOOGLE_SUCCESS,
  LOGIN_FAIL
} from './types';



// Check token & load user
export const loadUser = () => (dispatch, getState) => {
  // User loading
  dispatch({ type: USER_LOADING });

  const EndPoint = Url.url
  axios 
    .get(EndPoint + '/data/api/auth/user', tokenConfig(getState))
    .then(res =>
      dispatch({
        type: USER_LOADED,
        payload: res.data
      })
    )
};

// --------------> Sign whith Google <------------- 
export const  SignWithGoogle = (token_id) => async (dispatch) =>{
  dispatch({
    type:AUTH_GOOGLE,
    payload: token_id
  })
}
//  ---------------End Sign With Google -----------------

// Register User
export const Register = ({FirstName,LastName, password, your_lenguage,email,confirmPassword,age,Gender},country,phone) => async (dispatch) => {

  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }; 

 

  // Request body
  const body = JSON.stringify({ FirstName,LastName,Gender, password, your_lenguage, email ,confirmPassword,age,country,phone});
  const EndPoint = Url.url + '/data/userSignUp';

  const res = await axios.post(EndPoint, body, config)
  authenticate(res,()=>{
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      })
  })

  
};

export const SignInGoogle = () => dispatch =>{
  return dispatch({
    type: LOGIN_GOOGLE_SUCCESS,
  })
}




// Login User
export const Login = ({email,password}) => async (dispatch) => { 
  const data = {
    email: email,
    password: password
  }
  const res = await axios.post(Url.url + '/data/userSignIn',data);
  
  authenticate(res,()=>{
    dispatch({
      type: LOGIN_SUCCESS,
    })
  })

  return dispatch({
    type: LOGIN_FAIL
  })


}
  





// Logout User
export const Logout = () => dispatch => {

  localStorage.removeItem('user')
  removeCookie('token')
  
  return dispatch({
    type: LOGOUT_SUCCESS
  })
};

// Setup config/headers and token
export const tokenConfig = (getState) => {
  // Get token from localstorage
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      'Content-type': 'application/json'
    }
  };

  // If token, add to headers
  if (token) {
    config.headers['x-auth-token'] = token;
  }

  return config;
};