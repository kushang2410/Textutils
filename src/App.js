import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import './App.css';
import TextData from './components/TextData'
import Nav from './components/Nav';
import About from './components/About';

function App () {
  const [mode,setmode] = useState('light');
  const togglemode = ()=>{
    if(mode === 'light'){
        setmode ('dark');
        document.body.style.backgroundColor = "rgb(51 49 64)"
    }else{
      setmode('light');
      document.body.style.backgroundColor = "white"
    }
  }
  return(
    <>
  <Router> 
    <Nav mode = {mode} togglemode={togglemode}/>
    <div className="container mt-4">
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <TextData heading="Description"/>
        </Route>
      </Switch> 
    </div>
    </Router>
    </>
  )
 
}
export default App;
