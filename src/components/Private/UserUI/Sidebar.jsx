import { BiLogOut, BiUser, BiBook } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import "./Sidebar.css";
import { useDispatch } from "react-redux";
import { useState, useEffect, useContext, useCallback } from "react";
import { Logout } from "../../../redux/actions/authAction";
import { GetIdiomAction } from "../../../redux/actions/getIdiomAction";
import { useHistory, Link } from "react-router-dom";
import { useGoogleLogin } from "react-use-googlelogin";
import { isAuth } from "../../../helpers/Auth";
import { Items, ItemsNotStudent } from "./ListData";
import Url from "../../Urls";
import axios from "axios";
import styled from "styled-components";
import ingenio from "../../../assets/images/IngenioLanguages.svg";

import studentContext from "../../Context/StudentContext";
// context navbar idiom -
import ContextNavbar from "../../../context/NavbarContext";

export default function Sidebar({ salir, isLogged }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [Active, setActive] = useState("");
  const [Roles, setRoles] = useState(false);
  const [clickImgProfile, setClickImgProfile] = useState(false);
  const [Click, setClick] = useState(false);
  const contextStudent = useContext(studentContext);
  // useContext -> Navbar  -> Function getIdiom() - Atributo idiom: nul
  // states
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const { signOut } = useGoogleLogin({
    clientId:
      "669011089415-8gtepgk9pivth0itvut5tom96kn9r7i1.apps.googleusercontent.com",
  });

  const handleLogout = () => {
    signOut();
    dispatch(Logout());
    logout();
    return history.push("/");
  };
  const itemActive = (index) => {
    setActive(index);
  };

  useEffect(() => {
    window.document.body.style.paddingTop = "0";
    contextStudent.getStudent();
    var user = window.localStorage.getItem("user");
    if (user) {
      var data = JSON.parse(user);
      setRoles(data.rol);
      GetUser(data);
    }
  }, []);

  async function GetUser(data) {
    if (data.rol === "user") {
      var Enpoint = Url.url + "/data/user/" + data._id;
      const res = await axios.get(Enpoint, {
        headers: { Authorization: `Bearer ${data.token}` },
      });
      if (res) {
        return res;
      } else {
        return history.push("/");
      }
    }
  }
  const logout = () => {
    salir();
    return history.push("/");
  };
  const Redirect = (param) => {
    return history.push(param);
  };
  const ActivaMenuProfile = () => {
    setClickImgProfile(!clickImgProfile);
  };

  return (
    <div>
      <header className="header" id="header">
        <div className="header__toggle" onClick={() => history.push("/")}>
          <img src={ingenio} alt="" />
        </div>
        {/* onClick={ActivaMenuProfile} */}
        <div class="header__img">
          <img src={isAuth() ? isAuth().picture : ""} alt="imge user" />
          <div className="dropdown__img">
            <div className="dropdown__items">
              <ul>
                <li>
                  <i>
                    <BiUser />
                  </i>
                  <span>Profile</span>
                </li>
                <li onClick={() => Redirect("/private")}>
                  <i>
                    <BiBook />
                  </i>
                  <span>Course content</span>
                </li>
                <li onClick={() => Redirect("/progress")}>
                  <i>
                    <BiBook />
                  </i>
                  <span>my progress</span>
                </li>
                <li className="--line" onClick={logout}>
                  <i>
                    <BiLogOut />
                  </i>
                  <span>Salir</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* {clickImgProfile ? (
          <NavIconUser>
            <div>
              <ul>
                <li>
                  <ItemsLink to="/private">
                    <IconUser /> <span>Profile</span>
                  </ItemsLink>
                </li>
                <ItemsLi>item</ItemsLi>
                <Divider />
                <ItemsLi salir onClick={logout}>
                  <IconLogout /> Log Out
                </ItemsLi>
              </ul>
            </div>
          </NavIconUser>
        ) : null} */}
      </header>
      {/* Aqui empiza los cambios */}

      <section className="l-navigation">
        <nav className="navigation ml-5 ">
          <ul>
            {Items.map((item, index) => {
              return (
                <ItemsNav key={index} className="dropdown">
                  <span className="items">
                    {item.link ? (
                      <LinkItems to={item.link}>{item.name}</LinkItems>
                    ) : (
                      item.name
                    )}
                    {item.name === "Book a lesson" && (
                      <div className="dropdown-subitem">
                        {contextStudent.student ? (
                          <>
                            {contextStudent.student.QueryStudent.courses.map(
                              (item, index) => (
                                <Link
                                  to={`/booklesson?language=${item.idiom}`}
                                  key={index}
                                >
                                  {item.idiom}
                                </Link>
                              )
                            )}
                          </>
                        ) : (
                          <>
                            {ItemsNotStudent.map((names, index) => (
                              <Link
                                key={index}
                                to={`/booklesson?language=${names.idiom}`}
                                // onClick={() => handleClikcBook(names.idiom)}
                              >
                                {names.nameItem}
                              </Link>
                            ))}
                          </>
                        )}
                      </div>
                    )}
                  </span>
                </ItemsNav>
              );
            })}
          </ul>
        </nav>
      </section>
    </div>
  );
}

const NavIconUser = styled.nav`
  position: absolute;
  width: 15.625rem;
  top: 3.4rem;
  right: 20px;

  border: 1px solid #d4d4d8;
  border-radius: 0.5rem;
  padding: 5px 10px;
  background-color: #fafafa;

  ul {
    list-style: none;
    display: grid;
    row-gap: 0.25rem;
    margin: 0;
    li {
      display: flex;
      align-items: center;
      column-gap: 5px;
      font-size: 0.9rem;
      font-weight: 700;
      border-radius: 4px;
      line-height: 1;
      :hover {
        background-color: #e4e4e7;
        cursor: pointer;
      }
    }
  }
`;
const IconLogout = styled(FiLogOut)`
  color: #dc2626;
`;
const IconUser = styled(AiOutlineUser)`
  font-size: 1rem;
`;
const ItemsLi = styled.li`
  color: ${(props) => (props.salir ? "#DC2626" : "#3f3f46")};
  padding: 0.5rem 0.3rem;
`;
const Divider = styled.hr`
  margin: 0;
`;
const ItemsLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #3f3f46;
  font-weight: inherit;

  padding: 0.5rem 0.3rem;
  width: 100%;
  span {
    line-height: normal;
  }
  :hover {
    color: #3f3f46;
  }
  :focus {
    color: #3f3f46;
  }
`;
const ItemsNav = styled.li`
  font-size: 1rem;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  padding: 0.5rem 0;
  margin-right: 2rem;
`;
const LinkItems = styled(Link)`
  color: rgba(255, 255, 255, 0.515);
  transition: all 0.3s ease;

  :hover {
    color: #fff;
  }
  :focus {
    color: rgb(255, 255, 255);
  }
`;
const ItemsClick = styled.li`
  color: #bdbdbd;
  font-size: 1rem;
  :hover {
    cursor: pointer;
    color: #fff;
  }
`;
{
  /* <div>
  <div className={sidebar ? "l-navbar show" : "l-navbar"} id="nav-bar">
    <nav className="nav">
      <div>
        <a className="nav__logo" onClick={showSidebar}>
          <i className=" nav__logo-icon">
            {" "}
            {sidebar ? <BiCaretLeft /> : <BiGridAlt />}{" "}
          </i>
          <span className="nav__logo-name">Ingenio Languages</span>
        </a>

        <div className="nav__list">
          {Items.map((item, index) => {
            const newLocal = Active === index;
            return (
              <Link
                key={index}
                to={Roles === "teacher" ? item.urlTeacher : item.url}
                onClick={() => itemActive(index)}
              >
                <a className={newLocal ? "nav__link activado" : "nav__link"}>
                  <i className="nav__icon">{item.icon} </i>
                  <span className="nav__name">
                    {Roles === "teacher" ? item.itemTeacher : item.item}
                  </span>
                </a>
              </Link>
            );
          })}
        </div>
      </div>

      <a className="nav__link" onClick={handleLogout}>
        <i className="nav__icon">
          {" "}
          <BiLogOut />{" "}
        </i>
        <span className="nav__name">Log Out</span>
      </a>
    </nav>
  </div>
</div>; */
}
