import styled, { css } from "styled-components";

import { Button } from "./Button";
import Bars from "../../assets/images/Bars.svg";

import { useSelector } from "react-redux";
import { authData } from "../../data/AuthData";
import { withRouter, useLocation, Link } from "react-router-dom";
import { Link as LinkID } from "react-scroll";
import { useGoogleLogin } from "react-use-googlelogin";
import { useState, useContext } from "react";
import "./style.css";
import useUser from "../../hooks/useUser";
import { useEffect } from "react";
import SideBar from "../Private/UserUI/Sidebar";
import { BiMenu } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";

import SdtudentState from "../../hooks/useStudent";
import NavBarNotLogged from "./NavNotLogged";

const Navbar = ({ toggle, history, isLogged, isSticky, element }) => {
  const { logout, init, isLoginLoading, hasLoginError, UserData } = useUser();
  const auth = useSelector((state) => state.auth);
  const { items } = useSelector((state) => state.package);
  const [NavBar, setNavBar] = useState(false);
  const [Picture, setPicture] = useState("");
  const location = useLocation();

  const { signOut } = useGoogleLogin({
    clientId:
      "669011089415-8gtepgk9pivth0itvut5tom96kn9r7i1.apps.googleusercontent.com",
  });
  let usuario = "";
  useEffect(() => {
    console.log(isLogged);
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
        <SdtudentState>
          <SideBar isLogged={isLogged} salir={logout} />
        </SdtudentState>
      ) : (
        <NavBarNotLogged
          element={element}
          isSticky={isSticky}
          toggle={toggle}
          isLogged={isLogged}
          logout={logout}
        />
      )}
    </div>
  );
};
export default withRouter(Navbar);

const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  position: fixed;
  z-index: 3;
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

const NavMenuLinks = styled(LinkID)`
  ${NavLink};
  :active {
    color: #314584 !important;
  }
  :hover {
    color: #314584 !important;
  }
  .active {
    color: #314584 !important;
  }
`;
const ItemUrl = styled(Link)`
  ${NavLink};
  :hover {
    color: #314584 !important;
  }
`;

const ItemAuth = styled(Link)`
  ${NavLink};
  color: #314584 !important;
  :hover {
    color: #314584 !important;
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
