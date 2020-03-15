import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { history } from './helpers';
import Dashboard from './views/pages/dashboard';
export class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Dashboard} />
        </Switch>
      </Router>
    );
  }
}

export default App;
