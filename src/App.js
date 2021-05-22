import {useState} from 'react'
import Headerhero from './components/Header/HeaderHero';
import Navbar from './components/Navbar/Navbar'
import {DropDown} from '././components/Navbar/DropDown'
import {Teachers} from './components/SectionTeachers/Teachers'
import {SignIn} from './components/Forms/SignIn';
import  {Profile} from './components/profileTeacher/Profile'
import {SignUp} from './components/Forms/SignUp';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import { PriceSection } from './components/priceSection/PriceSection';
import  rootReducer from './store/reducers/rootReducer'
import {Provider} from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'


const App = ()=> {
  const [isOpen,setisOpen] = useState(false);

  const toggle = ()=>{
    setisOpen(!isOpen);
  }
  const store = createStore(rootReducer,composeWithDevTools())
  return (
    <>
      <Provider store={store}>
      <Router>
        <Navbar toggle={toggle} />
        <DropDown isOpen={isOpen} toggle={toggle} />


        <Switch>
          <Route exact path='/' > 
            <Headerhero/>
          </Route>
          <Route path='/SignIn' > 
            <SignIn/>
          </Route>
          <Route path='/SignUp'>
            <SignUp/>
          </Route>
          <Route path='/Teachers'>
            <Teachers/>
          </Route>
          <Route path='/Prices'>
            <PriceSection/>
          </Route>
          <Route path='/ProfileTeachers/:idTeacher'>
            <Profile/>
          </Route>
        </Switch>
      </Router>
      </Provider>
    </>
  )
   };


export default App;
