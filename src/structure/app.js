import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ScrollTop from '../components/scroll-top';

import NoMatch from './404';
import Homepage from './homepage/homepage';
import Projects from './projects/projects';
import Uni from './projects/uni';
import PlaceHolder from './projects/PLACEHOLDER';

import styles from '../boilerplate-assets/sass/main.scss';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollTop>
          <Switch>
            <Route exact path='/projects/uni' component={Uni} />
            <Route exact path='/projects/telco' component={PlaceHolder} />
            <Route exact path='/projects/rail' component={PlaceHolder} />
            <Route exact path='/projects/cdo2' component={PlaceHolder} />
            <Route exact path='/projects/automated-flat' component={PlaceHolder} />
            <Route exact path='/projects/tunage' component={PlaceHolder} />
            <Route exact path='/projects/this-site' component={PlaceHolder} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/' component={Homepage} />
            <Route component={NoMatch} />
          </Switch>
        </ScrollTop>
      </BrowserRouter>
    );
  }
}
