import ingenio from "../../assets/images/IngenioLanguages.svg";
import { BiMenu } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import styled, { css } from "styled-components";
import { Link, useLocation, useHistory } from "react-router-dom";
import { Link as LinkID } from "react-scroll";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { MenuData } from "../../data/MenuData";
import { useGoogleLogin } from "react-use-googlelogin";
import { authData } from "../../data/AuthData";
import { Button } from "./Button";

function NavNotLogged({ toggle, isLogged, logout, element, isSticky }) {
  const auth = useSelector((state) => state.auth);
  const { items } = useSelector((state) => state.package);
  const [NavBar, setNavBar] = useState(false);
  const [Picture, setPicture] = useState("");
  const location = useLocation();
  const history = useHistory();
  //
  const { signOut } = useGoogleLogin({
    clientId:
      "669011089415-8gtepgk9pivth0itvut5tom96kn9r7i1.apps.googleusercontent.com",
  });
  const handleLogout = () => {
    signOut();
    logout();
    return history.push("/");
  };
  const profileUser = () => {
    return history.push("/Private");
  };
  // useEffect(() => {
  //   window.document.body.style.paddingTop = "60px";
  // }, []);
  return (
    <>
      <Nav NavBar={NavBar} isSticky>
        <LogoImage to="/">
          <img src={ingenio} alt="" />
        </LogoImage>
        <MenuBars onClick={toggle}>
          <BiMenu />
        </MenuBars>
        <BoxIconCart>
          {items.length > 0 && <div></div>}
          <FiShoppingCart onClick={() => history.push("/orderSummary")} />
        </BoxIconCart>
        <Espacio>
          <NavMenu>
            {location.pathname === "/" && (
              <>
                {MenuData.map((item, index) => {
                  return (
                    <>
                      {item.verify ? (
                        <SuperLink to={item.SuperLink}>{item.title}</SuperLink>
                      ) : (
                        <NavMenuLinks
                          to={item.Link}
                          key={index}
                          smooth={true}
                          duration={1000}
                          spy={true}
                        >
                          {item.title}
                        </NavMenuLinks>
                      )}
                    </>
                  );
                })}
              </>
            )}
            {location.pathname !== "/" && <ItemUrl to="/">Home</ItemUrl>}

            {isLogged ? (
              <NavMenuLinks onClick={handleLogout}> Logo Ut </NavMenuLinks>
            ) : (
              ""
            )}
            {isLogged ? (
              <ImgPerfil onClick={profileUser} src={Picture} alt={auth.email} />
            ) : (
              authData.map((item, index) => (
                <ItemAuth to={item.link} key={index}>
                  {item.title}
                </ItemAuth>
              ))
            )}
          </NavMenu>
        </Espacio>
        {isLogged ? (
          ""
        ) : (
          <NaVBtn>
            <Link to="/orderSummary">
              <Button
                primary="true"
                big="true"
                disabled={items.length > 0 ? false : true}
              >
                View cart
              </Button>
            </Link>
          </NaVBtn>
        )}
      </Nav>
    </>
  );
}

export default NavNotLogged;

const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  /* position: fixed;
   */
  position: sticky;
  z-index: 3;
  left: 0;
  top: 0;
  /* top: ${({ isSticky }) => (isSticky ? `45px` : `0`)}; */
  width: 100%;
  max-width: 1350px;
  background: white;
  box-shadow: ${({ NavBar }) =>
    NavBar ? "0px 0px 10px -2px rgba(0,0,0,0.21)" : "none"};
`;
const MenuBars = styled.i`
  display: none;
  @media screen and (max-width: 768px) {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    font-weight: 700;
    cursor: pointer;
    position: absolute;
    top: 5px;
    right: 0;
    transform: translate(-50%, 25%);
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = css`
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-weight: 700;
  font-size: 1rem;
`;

const SuperLink = styled(Link)`
  ${NavLink};
  :hover {
    color: #314584 !important;
    background-color: transparent;
  }
  color: #314584;
  font-weight: 700;
  .active {
    color: #314584 !important;
  }
`;

const NavMenuLinks = styled(LinkID)`
  ${NavLink};
  :active {
    color: #314584 !important;
  }
  :hover {
    color: #314584 !important;
    background-color: transparent;
  }
  .active {
    color: #314584 !important;
  }
`;
const ItemUrl = styled(Link)`
  ${NavLink};
  :hover {
    color: #314584 !important;
    background-color: transparent;
  }
`;

const ItemAuth = styled(Link)`
  ${NavLink};
  color: #314584 !important;
  :hover {
    color: #314584 !important;
    background-color: transparent;
  }
`;

const NaVBtn = styled.div`
  display: flex;
  /* margin: 0 24px 0 0; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Espacio = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 80%;
  margin-right: 20px;
`;
const LogoImage = styled(Link)`
  width: 8rem;
`;
const ImgPerfil = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  &:hover {
    cursor: pointer;
  }
`;

const BoxIconCart = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    height: 40px;
    width: 40px;
    font-size: 20px;
    color: #314584;
    position: absolute;
    right: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      position: absolute;
      top: 6px;
      right: 10px;
      width: 6px;
      height: 6px;
      background-color: #ff5757;
      border-radius: 50%;
    }
  }
`;
