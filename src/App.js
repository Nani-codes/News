import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = ()=> {
  const pageSize = 5;
  const apiKey = 'ac7244c1b76d4e829b1ad2830451fb6c';
  const [progress, setProgress] = useState(0)
 
    return (
      <div>
        <Router>
        <NavBar/> 
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
        <Switch>
          <Route exact path="/"><News setProgress={setProgress} apiKey={apiKey} key="Home" pageSize={pageSize} country="us" category="general"/></Route> 
          <Route exact path="/business"><News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="us" category="business"/></Route> 
          <Route exact path="/health"><News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="us" category="health"/></Route> 
          <Route exact path="/science"><News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="us" category="science"/></Route> 
          <Route exact path="/technology"><News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="us" category="technology"/></Route> 
       
        </Switch>
        </Router>
      </div>
    )
 
}

export default App;