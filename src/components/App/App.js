import React, { Component } from 'react';
import './App.css';
import * as routes from '../../constants/routes';
import { Route, Link } from 'react-router-dom';
import Landing from '../Landing';
import Home from '../Home';

class App extends Component {
  render() {
    return (
        <div className="App container">
          <div className="row">
            <div className="col-12">
              <ul>
                <li><Link to={routes.LANDING}>Landing</Link></li>
                <li><Link to={routes.HOME}>Home</Link></li>
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <Route exact path={routes.LANDING} component={() => <Landing />} />
              <Route exact path={routes.HOME} component={() => <Home />} />
            </div>
          </div>
        </div>
    );
  }
}

export default App;
