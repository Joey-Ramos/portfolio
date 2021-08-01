import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Components/Home/index.js';
import Header from './Components/Header/index.js';
import About from './Components/Aboutme/index.js';
import Project from './Components/Project/index.js';
import Contact from './Components/Contact/index.js';

function App() {

  return (
   <div>
     <Router>
      <Header/>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/project" component={Project} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
     </Router>
   </div>
   
  );
}

export default App;
