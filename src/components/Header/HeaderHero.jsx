import '../../assets/components/HeaderHero.css'
import imgHero from '../../assets/images/LibaryPortada.png'
import {AiOutlineShoppingCart}  from 'react-icons/ai';
import styled from 'styled-components'
import {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import { Teachers } from '../SectionTeachers/Teachers'
import { PriceSection } from '../priceSection/PriceSection';

const Icon  = styled(AiOutlineShoppingCart)`
height:30px;
width:30px;
`;

const HeaderHero = () =>{

    const auth = useSelector(state => state.auth)

    useEffect(()=>{

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
              <p>Our mission at Ingenio Languages is to help  <br/>you communicate fluently in the language that you always dreamed of!<br/> Learning a language has never been easier and more fun!</p>
              <div className="hero-btns">
                {/* <!-- Hero Btn First --> */}
                <a data-scroll href="/"> <Icon></Icon> Buy a lesson Package</a>
                {/* <!-- Hero Btn Second --> */}
                <a data-scroll href="/">Request Demo Class Free</a>
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