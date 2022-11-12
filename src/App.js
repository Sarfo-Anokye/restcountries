import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, } from 'react-router-dom';
import Details from './components/details';
import Home from './components/home';


function App() {
 
  return (
    <Router>
    <div className='main'>
      <Route exact path='/'>
      <Home/>
      </Route>
      <Route path='/details/:name' >
      <Details/>
      </Route>
   </div>
  
   </Router>
  )
};

export default App;
