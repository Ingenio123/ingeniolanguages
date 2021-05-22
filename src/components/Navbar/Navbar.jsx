// import react from 'react'
import { Link } from 'react-router-dom';
import styled ,{css} from 'styled-components'
import {MenuData} from '../../data/MenuData'
import {Button} from './Button'
import Bars from '../../assets/images/Bars.svg'
import LogoImg from '../../assets/images/ingenio-languages.png'

const Nav =  styled.nav`
  height: 60px;
  display:flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index:100;
  position:realtive;
  width:100%;

`
const NavLink = css`
  padding:0 1rem;
  height:100%;
  cursor:pointer;
  font-weight:700;
  font-size:1rem;
`


const MenuBars = styled.i`
  display:none;
  @media screen and (max-width: 768px){
    display:block;
    background-image:url(${Bars});
    background-size:contain;
    height:40px;
    width:40px;
    cursor:pointer;
    position:absolute;
    top:0;
    right:0;
    transform:translate(-50%, 25%);
  }

`


const NavMenu = styled.div`
  display:flex;
  @media screen and (max-width: 768px){
    display:none;
  }
`
const NavMenuLinks = styled(Link)`
  ${NavLink}

`

const NaVBtn = styled.div`
  display:flex;
  margin: 0 24px 0 0;

  @media screen and (max-width: 768px){
    display:none;
  }
`
const Espacio  = styled.div`
  display:flex;
  justify-content: flex-end;
  align-items:center;
  width:80%;
  margin-right:20px
`
const  LogoImage = styled(Link)`
  width:8rem;
`

const Navbar = ({toggle})=>{
    return (
      <div>
      <Nav>
        <LogoImage> <img src={ LogoImg } alt="" /> </LogoImage>
        <MenuBars onClick={toggle} />
        
        <Espacio>
        <NavMenu>
          {MenuData.map((item,index)=>(
            <NavMenuLinks to={item.Link} key={index} >
              {item.title}
            </NavMenuLinks>
              
            ))}
        </NavMenu>
        </Espacio>
        <NaVBtn>
            <Button to="/buyNow"  primary="true" big="true">Buy Now</Button>
        </NaVBtn>
      </Nav>
    </div>
    );

}
export default Navbar;