import styled, { css } from "styled-components";
import { MenuData } from "../../data/MenuData";
import { Button } from "./Button";
import Bars from "../../assets/images/Bars.svg";
import ingenio from "../../assets/images/IngenioLanguages.svg";
import { useSelector } from "react-redux";
import { authData } from "../../data/AuthData";
import { withRouter } from "react-router-dom";
import { Link as LinkID } from "react-scroll";
import { Link } from "react-router-dom";
import { useGoogleLogin } from "react-use-googlelogin";
import { useState } from "react";
import "./style.css";
import useUser from "../../hooks/useUser";
import { useEffect } from "react";
import SideBar from "../Private/UserUI/Sidebar";

const Navbar = ({ toggle, history, isLogged }) => {
  const { logout, init, isLoginLoading, hasLoginError, UserData } = useUser();
  const auth = useSelector((state) => state.auth);
  const { items } = useSelector((state) => state.package);

  const [NavBar, setNavBar] = useState(false);
  const [Picture, setPicture] = useState("");

  const { signOut } = useGoogleLogin({
    clientId:
      "669011089415-8gtepgk9pivth0itvut5tom96kn9r7i1.apps.googleusercontent.com",
  });
  let usuario = "";
  useEffect(() => {
    if (isLogged) {
      usuario = window.localStorage.getItem("user");
      usuario = JSON.parse(usuario).picture;
      console.log(usuario);
      setPicture(usuario);
    }
  }, [isLogged]);
  const handleLogout = () => {
    signOut();
    logout();
    return history.push("/");
  };
  const profileUser = () => {
    return history.push("/Private");
  };

  return (
    <div id="home">
      {isLogged ? (
        <SideBar isLogged={isLogged} logout={logout} />
      ) : (
        <Nav NavBar={NavBar}>
          <LogoImage to="/">
            <img src={ingenio} alt="" />
          </LogoImage>
          <MenuBars onClick={toggle} />
          <Espacio>
            <NavMenu>
              {MenuData.map((item, index) => (
                <NavMenuLinks
                  to={item.Link}
                  key={index}
                  smooth={true}
                  duration={500}
                  spy={true}
                >
                  {item.title}
                </NavMenuLinks>
              ))}
              {isLogged ? (
                <NavMenuLinks onClick={handleLogout}> Logo Ut </NavMenuLinks>
              ) : (
                ""
              )}

              {isLogged ? (
                <ImgPerfil
                  onClick={profileUser}
                  src={Picture}
                  alt={auth.email}
                />
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
      )}
      <br />
      <br />
      <br />
      {/* <h2>{isLogged ? "Hola" : ""}</h2> */}
    </div>
  );
};
export default withRouter(Navbar);

const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 3;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background: white;
  box-shadow: ${({ NavBar }) =>
    NavBar ? "0px 0px 10px -2px rgba(0,0,0,0.21)" : "none"};
`;
const MenuBars = styled.i`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    background-image: url(${Bars});
    background-size: contain;
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: absolute;
    top: 0;
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

const NavMenuLinks = styled(LinkID)`
  ${NavLink}
`;

const ItemAuth = styled(Link)`
  ${NavLink}
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
