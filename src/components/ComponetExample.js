import useUser from "../hooks/useUser";
import { Link, useRouteMatch } from "react-router-dom";

export default function ComponetExample() {
  //   const { isLogged } = useUser();
  const match = useRouteMatch("/login");
  const datauser = useUser();
  const { logout, isLogged } = useUser();

  const handleLogout = (e) => {
    e.preventDefault();
    console.log("salir");
    logout();
  };

  const RenderLogginButton = ({ isLogged }) => {
    return isLogged ? (
      <Link to="#" onClick={(e) => handleLogout(e)}>
        Logout
      </Link>
    ) : (
      <>
        <Link to="/login">Login</Link>
        <Link to="/register">Sign Up </Link>
      </>
    );
  };
  const Content = match ? null : RenderLogginButton({ isLogged });
  console.log("dataos usuarios", datauser);
  return <div>Componente Example {Content} </div>;
}
