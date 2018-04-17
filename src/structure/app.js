import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NoMatch from './404';
import Homepage from './homepage/homepage';
import Projects from './projects/projects';
import OUP from './project-pages/oup';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/project-pages/oup' component={OUP} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/' component={Homepage} />
          <Route component={NoMatch} />
        </Switch>
      </BrowserRouter>
    );
  }
}
