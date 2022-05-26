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
  const [clickfImgProfile, setClickImgProfile] = useState(false);
  const [Click, setClick] = useState(false);
  const [Card, setClickCard] = useState(false);
  const [Activate, setActivate] = useState(null);
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

  const handleClick = (index) => {
    // index === Active ?  null : setActive(index)
    console.log("index", index);
    if (Activate === index) {
      return null;
    }
    setActivate(index);
  };
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
                  <ItemsNav key={index} className={"dropdown"}>
                    <span className="items">
                      {item.link ? (
                        <LinkItems
                          onClick={() => handleClick(index)}
                          to={item.link}
                          active={Activate === index}
                        >
                          {item.name}
                        </LinkItems>
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
          <nav className="ml-5 navigation">
            <ul>
              {Items.map((item, index) => {
                return (
                  <ItemsNav
                    key={index}
                    className="dropdown"
                    active={Activate === index}
                  >
                    <span
                      className={`items ${Activate == index ? "active" : ""}`}
                    >
                      {item.link ? (
                        <LinkItems
                          active={Activate === index}
                          to={item.link}
                          className="hovers"
                        >
                          {item.name}
                        </LinkItems>
                      ) : (
                        <>
                          {item.name === "Materials" && !contextStudent.student
                            ? ""
                            : item.name}
                        </>
                      )}
                      {item.name === "My learning plan" && (
                        <div className="dropdown-subitem">
                          {contextStudent.student || courses.length > 0 ? (
                            <>
                              {courses.length > 0 ? (
                                <>
                                  {courses.map((item, indexsubmap) => (
                                    <Link
                                      className="hovers"
                                      to={`/private?language=${item}`}
                                      key={indexsubmap}
                                    >
                                      {item}
                                    </Link>
                                  ))}
                                </>
                              ) : (
                                <>
                                  {contextStudent.student.QueryStudent.courses.map(
                                    (item, indexSubmap) => (
                                      <Link
                                        className="hovers"
                                        onClick={() => handleClick(index)}
                                        to={`/private/${item._id}`}
                                        key={indexSubmap}
                                      >
                                        {item.idiom}
                                        {item.kids && "(Kids)"}
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
                                  to={`/private/${names.nameItem}`}
                                  className="hovers"
                                >
                                  {names.nameItem}
                                </Link>
                              ))}
                            </>
                          )}
                        </div>
                      )}
                      {item.name === "My progress" && (
                        <div className="dropdown-subitem">
                          {contextStudent.student || courses.length > 0 ? (
                            <>
                              {courses.length > 0 ? (
                                <>
                                  {courses.map((item, index) => (
                                    <Link
                                      className="hovers"
                                      to={`/progress/${item._id}`}
                                      key={index}
                                    >
                                      {item}
                                    </Link>
                                  ))}
                                </>
                              ) : (
                                <>
                                  {contextStudent.student.QueryStudent.courses.map(
                                    (item, indexSubmap) => (
                                      <Link
                                        className="hovers"
                                        onClick={() => handleClick(index)}
                                        to={`/progress/${item._id}`}
                                        key={indexSubmap}
                                      >
                                        {item.idiom}
                                        {item.kids && "(Kids)"}
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
                                  className="hovers"
                                  key={index}
                                  to={`/progress/${names.idiom}`}
                                >
                                  {names.nameItem}
                                </Link>
                              ))}
                            </>
                          )}
                        </div>
                      )}

                      {!!contextStudent.student && (
                        <>
                          {item.name === "My materials" && (
                            <div className="dropdown-subitem">
                              {contextStudent.student || courses.length > 0 ? (
                                <>
                                  {courses.length > 0 ? (
                                    <>
                                      {courses.map((item, indexSubmap) => (
                                        <Link
                                          className="hovers"
                                          to={`/user/materials?language=${item}`}
                                          key={indexSubmap}
                                        >
                                          {item}
                                        </Link>
                                      ))}
                                    </>
                                  ) : (
                                    <>
                                      {contextStudent.student.QueryStudent.courses.map(
                                        (item, indexSubmap) => (
                                          <Link
                                            className="hovers"
                                            onClick={() => handleClick(index)}
                                            to={`/user/materials/${item._id}`}
                                            key={indexSubmap}
                                          >
                                            {item.idiom}
                                            {item.kids && "(Kids)"}
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
                                      className="hovers"
                                      key={index}
                                      to={`/user/materials?language=${names.idiom}`}
                                    >
                                      {names.nameItem}
                                    </Link>
                                  ))}
                                </>
                              )}
                            </div>
                          )}
                        </>
                      )}
                      {item.name === "Book my lessons" && (
                        <div className="dropdown-subitem">
                          {contextStudent.student || courses.length > 0 ? (
                            <>
                              {courses.length > 0 ? (
                                <>
                                  {courses.map((item, index) => (
                                    <Link
                                      className="hovers"
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
                                    (item, indexSubmap) => (
                                      <Link
                                        className="hovers"
                                        onClick={() => handleClick(index)}
                                        to={`/booklesson?language=${item.idiom}`}
                                        key={indexSubmap}
                                      >
                                        {item.idiom}
                                        {item.kids && "(Kids)"}
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
                                  className="hovers"
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

const StyledDiv = styled.div`
  /* ${({ active }) =>
    active ? `color:#314584 !important` : `color: #636ab6 !important`}; */

  transition: all 0.3s ease;
  font-weight: 600;
  letter-spacing: normal;
  padding: 0.5rem 0.5rem;
  border-radius: 4px;
  position: relative;
  :hover {
    ${({ active }) => active === false && `background-color:#DBEAFE`};
    ${({ active }) =>
      active ? `color:#314584 !important;` : `color: #1E3A8A !important;`};
  }
  :focus {
    color: rgb(49, 69, 132) !important;
  }
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
`;

const ItemsNav = styled.li`
  font-size: 1rem;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  padding: 0.5rem 0;
  ${({ active }) =>
    active &&
    `
  ::before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 30%;
    height: 3px;
    background-color: #314584;
    bottom: 0;
  }    
  `}
`;
const LinkItems = styled(Link)`
  /* color: rgba(255, 255, 255, 0.515); */
  ${({ active }) =>
    active ? `color:#636ab6 !important` : `color: #314584 !important`};
  transition: all 0.3s ease;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: normal;
  padding: 0.5rem 0.5rem;
  border-radius: 4px;
  position: relative;
  :hover {
    ${({ active }) => active === false && `background-color:#DBEAFE`};
    ${({ active }) =>
      active ? `color:#314584 !important;` : `color: #1E3A8A !important;`};
  }
  :focus {
    color: #314584 !important;
  }
  ${({ active }) =>
    active &&
    `
  ::before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 30%;
    height: 3px;
    background-color: #314584;
    bottom: 0;
  }    
  `}
`;
