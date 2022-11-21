import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Details from './components/details';
import Home from './components/home';



function App() {
  // seting Dark mode to be passed along other components
 const [darkmode, setDarkmode]=useState(false);                  

//  toggoling dark mode on and off
 const toggleDarkMode=()=>{                
   setDarkmode(prev=>!darkmode);  
 }
  return (
    // routing to different componentscd 
    <Router>
    <div className={`main ${darkmode?'dark':''}`} >
      <Route exact path='/'>
      <Home darkmode={darkmode} toggleDarkMode={toggleDarkMode}/>
      </Route>
      <Route exact path='/details/:name' >
      <Details darkmode={darkmode} toggleDarkMode={toggleDarkMode}/>
      </Route>
     
   </div>
  
   </Router>
  )
};

export default App;
