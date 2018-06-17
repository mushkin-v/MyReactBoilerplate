import React, { Component } from 'react';
import './App.css';
import * as routes from '../../constants/routes';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Landing from '../Landing';
import Home from '../Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">

          <ul>
            <li><Link to={routes.LANDING}>Landing</Link></li>
            <li><Link to={routes.HOME}>Home</Link></li>
          </ul>

          <hr/>

          <Route exact path={routes.LANDING} component={() => <Landing />} />
          <Route exact path={routes.HOME} component={() => <Home />} />

          <hr/>

        </div>
      </Router>
    );
  }
}

export default App;
