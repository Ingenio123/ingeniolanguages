import Headerhero from './components/Header/HeaderHero';
import {Footer}  from './components/Footer/Footer';
import Boxcart from './components/Boxcart/Boxcart'
import Modal from './components/modalsPackage/modalPackage'
const Home = () => {
  return (
    <>
      {/* <Modal /> */}
      <Boxcart/>
      <Headerhero/>
      <Footer /> 
    </>
  )
   };


export default Home;
