import React from 'react';
import ReactDOM from 'react-dom';
import './assets/components/bootstrap.min.css';
import App from './App';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import './assets/components/default.css';
import  {Profile} from './components/profileTeacher/Profile'
import {Provider} from 'react-redux'
import {store} from './redux/store'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <Router>
          <Switch>
            <Route exact path='/' component={App} />
            <Route exact  path='/ProfileTeachers/:idTeacher'  component={Profile} />
          </Switch>
      </Router>
    </Provider>

  </React.StrictMode>,
  
  document.getElementById('root')
  );
  

