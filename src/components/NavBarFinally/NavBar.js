import { IoCloseSharp } from "react-icons/io5";
import styled from "styled-components";
import { MenuData } from "../../data/MenuData";
import { Link } from "react-router-dom";
import LogoIngenio from "../../assets/images/logoIngenio.svg";
export default function NavBar() {
  return (
    <Header>
      <Nav>
        <BoxLogo>
          <Logo>
            <img src={LogoIngenio} alt="Logo Ingenio" />
          </Logo>
        </BoxLogo>
        <Toggle></Toggle>
        <NavContent>
          <NavList>
            {MenuData.map((item, index) => (
              <NavItem>
                <NavLink to={item.Link}>{item.title}</NavLink>
              </NavItem>
            ))}
            <NavItem>
              <NavLink>Sign In</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Sign Up</NavLink>
            </NavItem>
          </NavList>
        </NavContent>
        <Close />
      </Nav>
    </Header>
  );
}
const Variables = {
  Header_hight: "3rem",
  z_index: 999,
};
const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${Variables.Header_hight};
  padding: 0 1rem;
  background-color: #fff;
  z-index: ${Variables.z_index};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  @media screen and (min-width: 768px) {
    height: calc(${Variables.Header_hight} + 1rem);
  }
`;
const BoxLogo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Logo = styled(Link)``;

const Toggle = styled.i``;

const Nav = styled.nav`
  position: relative;
  @media screen and (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    background-color: #314584;
    width: 100%;

    height: 100%;
    padding: 2rem 0;
    z-index: var(--z-fixed);
    transition: 0.5s;
    overflow-y: auto;
  }
`;
const NavContent = styled.div`
  max-width: 1024px;
  display: grid;
  grid-template-columns: 100%;
  justify-content: flex-end;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;
const NavItem = styled.li`
  margin-bottom: 2rem;
  @media screen and (min-width: 768px) {
    margin: 0 1.5rem;
    padding: 1.4rem 0;
  }
`;

const NavLink = styled(Link)`
  color: #fff;
  @media screen and (min-width: 768px) {
    color: #1e3a8a;
  }
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
const Close = styled(IoCloseSharp)`
  color: #fff;
  position: absolute;
  right: 1rem;
  top: 1rem;
  font-size: 2rem;
  &:hover {
    cursor: pointer;
  }
`;
