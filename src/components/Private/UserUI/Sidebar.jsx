import {
  BiLogOut,
  BiUser,
  BiBook,
  BiPieChart,
  BiDotsVerticalRounded,
} from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import "./Sidebar.css";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useContext, useCallback, useRef } from "react";
import { Logout } from "../../../redux/actions/authAction";
import { GetIdiomAction } from "../../../redux/actions/getIdiomAction";
import { useHistory, Link } from "react-router-dom";
import { useGoogleLogin } from "react-use-googlelogin";
import { isAuth } from "../../../helpers/Auth";
import { Items, ItemsNotStudent, ItemsTeacher } from "./ListData";
import Url from "../../Urls";
import axios from "axios";
import styled from "styled-components";
import ingenio from "../../../assets/images/IngenioLanguages.svg";
import studentContext from "../../Context/StudentContext";
//component
import CardRight from "../../SideBar/CardRight";
import ImgComponent from "../../SideBar/image";

// context -
import ContextNavbar from "../../../context/NavbarContext";
import ContextImageProfile from "../.../../../../context/imageContext";

export default function Sidebar({ salir, isLogged }) {
  const dispatch = useDispatch();
  const { courses } = useSelector((state) => state.Menu);
  //
  const history = useHistory();
  const [Active, setActive] = useState("");
  const [Roles, setRoles] = useState(false);
  const [clickImgProfile, setClickImgProfile] = useState(false);
  const [Click, setClick] = useState(false);
  const [Card, setClickCard] = useState(false);
  //ref
  const PropsRef = useRef();

  const contextStudent = useContext(studentContext);
  // useContext -> Navbar  -> Function getIdiom() - Atributo idiom: nul
  // states
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const { signOut } = useGoogleLogin({
    clientId:
      "669011089415-8gtepgk9pivth0itvut5tom96kn9r7i1.apps.googleusercontent.com",
  });

  // const handleLogout = () => {
  //   signOut();
  //   dispatch(Logout());
  //   logout();
  //   return history.push("/");
  // };

  useEffect(() => {
    window.document.body.style.paddingTop = "0";
    // contextStudent.getStudent();
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

  const ClickCard = useCallback(() => {
    if (Card) {
      setClickCard(false);
      return (PropsRef.current.style.transform = "translate(100%)");
    }
    setClickCard(true);
    return (PropsRef.current.style.transform = "translate(0)");
  }, [Card]);

  return (
    <div>
      <header className="header" id="header">
        <div className="header__toggle" onClick={() => history.push("/")}>
          <img src={ingenio} alt="" />
        </div>

        <FlexBox>
          <ContextImageProfile>
            <div class="header__img" onClick={ClickCard}>
              <ImgComponent />
            </div>

            <CardRight
              state={Card}
              cardRef={PropsRef}
              clickCard={ClickCard}
              clickRedirect={Redirect}
              logout={logout}
              picture={isAuth().picture}
            />
          </ContextImageProfile>
        </FlexBox>
      </header>
      {/* Aqui empiza los cambios */}
      {Roles === "teacher" ? (
        <section className="l-navigation">
          <nav className="ml-5 navigation ">
            <ul>
              {ItemsTeacher.map((item, index) => {
                return (
                  <ItemsNav key={index} className="dropdown">
                    <span className="items">
                      {item.link ? (
                        <LinkItems to={item.link}>{item.name}</LinkItems>
                      ) : (
                        item.name
                      )}
                    </span>
                  </ItemsNav>
                );
              })}
            </ul>
          </nav>
        </section>
      ) : (
        <section className="l-navigation">
          <nav className="ml-5 navigation ">
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
                          {contextStudent.student || courses.length > 0 ? (
                            <>
                              {courses.length > 0 ? (
                                <>
                                  {courses.map((item, index) => (
                                    <Link
                                      to={`/booklesson?language=${item}`}
                                      key={index}
                                    >
                                      {item}
                                    </Link>
                                  ))}
                                </>
                              ) : (
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
                              )}
                            </>
                          ) : (
                            <>
                              {ItemsNotStudent.map((names, index) => (
                                <Link
                                  key={index}
                                  to={`/booklesson?language=${names.idiom}`}
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
      )}
    </div>
  );
}

const FlexBox = styled.div`
  display: flex;
  align-items: center;
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
