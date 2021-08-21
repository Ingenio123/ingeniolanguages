import axios from 'axios';
import {useState,useEffect} from 'react'
import styled from 'styled-components';
import  {IoIosArrowDown} from 'react-icons/io'
import Url from '../Urls';

const PrivateRoute = ({history})=>{
   
    useEffect(() => {
        VerifyAuth()
    }, [])

    const VerifyAuth = async () =>{
        const user = window.localStorage.getItem('user');
        if(user){
            var data = JSON.parse(user);
            const EndPoint = Url.url + '/data/user/' + data._id;    
            const res = await axios.get(EndPoint,{
                headers:{Authorization: `Bearer ${data.token}`}
            });

            if(!res) return history.push('/');
        }else{
            return history.push('/')
        }
       
    } 

    
    return (
        <>
            <h2>Home del Usuario</h2>
        </>
    )

}
export default PrivateRoute;

const CardUnit = styled.div `
    margin-top:100px; 
    width:100%;
    border-radius:10px;
    border:1px solid rgba(33,36,41,.2);
    box-shadow:1px 0px 10px 4px rgba(0,0,0,0.1);
        img {
            position:relative;
            top:-10px;
            left:-10px;  
            width:45px;
            height:45px;
            border-radius:50%;
        }
`

const Content = styled.div `
    display:block;
    margin:0 12px;
    padding:10px;
`
const Unit = styled.div `
    display:flex;
    justify-content: space-between;
    font-size:20px;
    margin-bottom:5px;
    border-bottom: 2px solid rgba(0,0,0,.1);
`
const ArrowDown = styled(IoIosArrowDown) `
    cursor:pointer;
`
const ButtonAgenda   = styled.button  `
    display:block;
    padding: 12px 16px;
    background: #ff3946;
    color:white;
    font-size: "Baloo Da 2";
    border:none;
    border-radius:30px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 0;
    margin: -45px 0 0 auto;
`
const Lessons = styled.div  `
    display:block;
    padding:10px;
`
const Data  = styled.p `
    font-size:18px;
    text-align:center;
    margin-bottom:0;
    color:#314584;
    font-weight:700;
`
const Items = styled.span `
    display:block;
    font-size:1rem;
    margin-bottom:10px;
`





{/*
    <header className="container">
     <CardUnit>  
                <ButtonAgenda>BUY LESSON PACKAGE</ButtonAgenda>
                <Content>
                    <Unit>Unit 1 <ArrowDown  /> </Unit>

                       
                        
                    <Unit>Unit 2    <ArrowDown/> </Unit>
                    
                    <Unit>Unit 3    <ArrowDown/> </Unit>
                    
                    <Unit>Unit 4    <ArrowDown/> </Unit>
                </Content>
            </CardUnit>

            <div className="container">
                <button onClick={clickme} >home</button>
            </div>
        </header> */}