import React, { Component } from 'react';
import Login from './components/Login'
import UserMap from './components/UserMap'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' component={Login} ></Route>
            <Route exact path='/map' component={UserMap}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
