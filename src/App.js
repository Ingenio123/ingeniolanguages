import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { DropDown } from "././components/Navbar/DropDown";
import { IsAuth } from "./helpers/Requests";
import useUser from "./hooks/useUser";
const App = () => {
  const [isOpen, setisOpen] = useState(false);
  const { isLogged } = useUser();
  const toggle = () => {
    setisOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggle={toggle} isAuth={IsAuth()} isLogged={isLogged} />
      <DropDown isOpen={isOpen} toggle={toggle} />
    </>
  );
};

export default App;
