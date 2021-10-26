import { BiGridAlt, BiLogOut, BiCodeCurly, BiCaretLeft } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import "./Sidebar.css";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Logout } from "../../../redux/actions/authAction";
import { useHistory, Link } from "react-router-dom";
import { useGoogleLogin } from "react-use-googlelogin";
import { isAuth } from "../../../helpers/Auth";
import { Items } from "./ListData";
import Url from "../../Urls";
import axios from "axios";
import styled from "styled-components";

export default function Sidebar({ salir, isLogged }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [Active, setActive] = useState("");
  const [Roles, setRoles] = useState(false);
  const [clickImgProfile, setClickImgProfile] = useState(false);

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

  const ActivaMenuProfile = () => {
    setClickImgProfile(!clickImgProfile);
  };
  return (
    <div>
      <header className="header" id="header">
        <div className="header__toggle">
          <i id="header-toggle">
            {" "}
            <BiCodeCurly />{" "}
          </i>
        </div>
        <div class="header__img" onClick={ActivaMenuProfile}>
          <img src={isAuth() ? isAuth().picture : ""} alt="imge user" />
        </div>
        {clickImgProfile ? (
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
        ) : null}
      </header>
      <div>
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
                      <a
                        className={
                          newLocal ? "nav__link activado" : "nav__link"
                        }
                      >
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
      </div>
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
