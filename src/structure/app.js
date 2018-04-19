import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ScrollTop from '../components/scrollTop';

import NoMatch from './404';
import Homepage from './homepage/homepage';
import Projects from './projects/projects';
import OUP from './projects/oup';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollTop>
          <Switch>
            <Route exact path='/projects/oup' component={OUP} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/' component={Homepage} />
            <Route component={NoMatch} />
          </Switch>
        </ScrollTop>
      </BrowserRouter>
    );
  }
}
