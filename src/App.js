import {useState} from 'react'
import Headerhero from './components/Header/HeaderHero';
import Navbar from './components/Navbar/Navbar'
import {DropDown} from '././components/Navbar/DropDown'
import SignIn from './components/Forms/SignIn';
import {SignUp} from './components/Forms/SignUp';
import {Footer}  from './components/Footer/Footer';
const App = () => {
    const [isOpen,setisOpen] = useState(false);
  
    const toggle = ()=>{
      setisOpen(!isOpen);
    }

  return (
    <>
      <Navbar toggle={toggle} />
      <DropDown isOpen={isOpen} toggle={toggle} />
      <Headerhero/>
      <Footer /> 
    </>
  )
   };


export default App;
