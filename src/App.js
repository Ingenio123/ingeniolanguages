import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { DropDown } from "././components/Navbar/DropDown";
import { IsAuth } from "./helpers/Requests";
import useUser from "./hooks/useUser";
// import styled from "styled-components";
import { NavBanner } from "./components/banners";
import useStick from "./hooks/useStuck";
const App = () => {
  // const { element, isSticky } = useStick();
  const [isOpen, setisOpen] = useState(false);
  const { isLogged } = useUser();
  const toggle = () => {
    setisOpen(!isOpen);
  };

  return (
    <>
      {/* element={element} */}
      {/* <NavBanner /> */}
      {/* isSticky={isSticky} */}
      <Navbar toggle={toggle} isAuth={IsAuth()} isLogged={isLogged} />
      <DropDown isOpen={isOpen} toggle={toggle} />
    </>
  );
};

export default App;
