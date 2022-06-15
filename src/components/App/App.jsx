import React from 'react';
import './App.css';
import { Route, HashRouter as Router} from 'react-router-dom';

import Animals from '../Animals/Animals.jsx';
import Plants from '../Plants/Plants.jsx';
import Home from '../Home/Home.jsx';

function App() {
  return (
    <div className="App">
      <h1>SPAs!</h1>
      <p>Dev's stuff</p>

      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/#/plants">Plants</a></li>
        <li><a href="/#/animals">Animals</a></li>
      </ul>

      <Router>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/animals">
          <Animals />
        </Route>
        <Route path="/plants">
          <Plants />
        </Route>
      </Router>
      
      <h2>Footer goes here</h2>
    </div>
  );
}

export default App;
