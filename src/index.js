import React from 'react';
import ReactDOM from 'react-dom';
import './assets/components/bootstrap.min.css';
import App from './App';
import {BrowserRouter as Router } from 'react-router-dom'
import './assets/components/default.css';
ReactDOM.render(
  <React.StrictMode>
    <Router>
        <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
  );
  

