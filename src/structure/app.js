import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Homepage from './homepage/homepage';
import Projects from './projects/projects';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/projects' component={Projects} />
          <Route path='/' component={Homepage} />
        </Switch>
      </BrowserRouter>
    );
  }
}
