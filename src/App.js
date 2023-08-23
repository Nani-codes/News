import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import sample from './components/sample.json'
import buisness from "./components/buisness.json"
import health from "./components/health.json"
import science from "./components/science.json"
import technology from "./components/technology.json"
import Enroll from "./components/Enroll"

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
        progress={progress} />
        <Switch>
          <Route exact path="/enroll"><Enroll/></Route>
          <Route exact path="/"><News setProgress={setProgress} apiKey={apiKey} key="Home" pageSize={pageSize} parsedData={science} country="US" category="Home"/></Route> 
          <Route exact path="/business"><News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} parsedData={buisness} country="Germany" category="business"/></Route> 
          <Route exact path="/health"><News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} parsedData={health}country="US" category="health"/></Route> 
          <Route exact path="/science"><News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} parsedData={science} country="US" category="science"/></Route>
          <Route exact path="/technology"><News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} parsedData={technology} country="Japan" category="technology"/></Route> 
        </Switch>
        </Router>
      </div>
    )
 
}

export default App;