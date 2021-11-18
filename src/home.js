import Headerhero from "./components/Header/HeaderHero";
import { Footer } from "./components/Footer/Footer";
import Boxcart from "./components/Boxcart/Boxcart";
import useUser from "./hooks/useUser";

const Home = () => {
  const { logout, init, isLogged, isLoginLoading, hasLoginErro, ActivarLoged } =
    useUser();
  return (
    <>
      {/* <Modal /> */}

      <Boxcart />
      <Headerhero isLogged={isLogged} ActivarLoged={ActivarLoged} />
      <Footer />
    </>
  );
};

export default Home;
