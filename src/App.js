import './App.css';
import  { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Links from './components/Links';
import About from './components/Aboutme';
import Project from './components/Project';
import Contact from './components/Contact';

function App() {

  return (
   <div>
     <Router>
      <Header />
        <Switch>
          <Route exact path="/" component={Links} />
          <Route exact path="/about" component={About} />
          <Route exact path="/project" component={Project} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
     </Router>
   </div>
   
  );
}

export default App;
