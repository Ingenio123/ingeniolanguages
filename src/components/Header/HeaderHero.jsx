import '../../assets/components/HeaderHero.css'
import imgHero from '../../assets/images/LibaryPortada.png'
import {AiOutlineShoppingCart}  from 'react-icons/ai';
import styled from 'styled-components'
import {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import { Teachers } from '../SectionTeachers/Teachers'
import { PriceSection } from '../priceSection/PriceSection';
import { Link as LinkID } from 'react-scroll';
import {isAuth} from '../../helpers/Auth'
import { useHistory } from "react-router-dom";
import './HeaderStyle.scss';

const Icon  = styled(AiOutlineShoppingCart)`
height:30px;
width:30px;
`;

const DeleteReload  = ()=>{
  window.localStorage.removeItem('Reload');
}


const HeaderHero = (props) =>{
    const history  = useHistory();

    const auth = useSelector(state => state.auth)

    useEffect(()=>{
      DeleteReload();
    },[])


  return(
    <>
          <header >
          
          {/* <!-- HERO SECTION -->     */}
          <div className="container-fluid hero">
            <img src={imgHero} alt=""/>
            <div className="container">
              {/* <!-- Hero Title --> */}
              <h1>Learn a new language<br/>Anytime<br/>Anywhere</h1>
              {/* <!-- Hero Title Info --> */}
              <p className="text-md-1 parrafo_header color-gray-700">Our mission at Ingenio Languages is to help  <br/>you communicate fluently in the language that you always dreamed of!<br/> Learning a language has never been easier and more fun!</p>
              <div className="hero-btns">
                {/* <!-- Hero Btn First --> */}
                <ButtonBuyaLesson   to="/Prices"  smooth={true}  duration={500} spy={true}> <Icon></Icon> Buy a lesson Package </ButtonBuyaLesson> 
                {/* <!-- Hero Btn Second --> */}
                <a className="request-free-class" >Request Demo Class Free</a>
              </div>
            </div>
          </div>
        </header>
        <Teachers/>
        <PriceSection/>
    </>
  );


};
export default HeaderHero;

const ButtonBuyaLesson = styled(LinkID)`
  cursor:pointer;
  font-size: 1.2rem !important;
  font-weight: 600;
`