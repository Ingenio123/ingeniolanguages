import axios from 'axios';


import {
  USER_LOADED,
  USER_LOADING,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from './types';



// Check token & load user
export const loadUser = () => (dispatch, getState) => {
  // User loading
  dispatch({ type: USER_LOADING });
  axios 
    .get('http://localhost:4000/data/api/auth/user', tokenConfig(getState))
    .then(res =>
      dispatch({
        type: USER_LOADED,
        payload: res.data
      })
    )
};

// Register User
export const Register = ({username, password, your_lenguage,email,confirmPassword,age}) => async (dispatch) => {

  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }; 

 

  // Request body
  const body = JSON.stringify({ username, password, your_lenguage, email ,confirmPassword,age});

  const res = await axios.post('https://www.ingenioapi.com/data/userSignUp', body, config)
  
  dispatch({
    type: REGISTER_SUCCESS,
    payload: res.data
  })
};

// Login User
export const Login = ({email,password}) => async (dispatch) => { 
    // headers
    const configuracion = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    // Request body
    const body = JSON.stringify({ email, password });
    const  res = await axios.post('https://www.ingenioapi.com/data/userSignIn',body,configuracion);

    dispatch({
      type: LOGIN_SUCCESS,
      payload:{
          data: res.data,
          eamil:email
        }
    })
    
}
  
// Logout User
export const Logout = () => {
  return {
    type: LOGOUT_SUCCESS
  };
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