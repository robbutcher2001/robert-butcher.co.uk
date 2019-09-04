import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ScrollTop from '../components/scroll-top';

import NoMatch from './404';
import Homepage from './homepage';
import Projects from './projects';

import GovService from './projects/gov-service';
import GovFrontend from './projects/gov-frontend';
import Uni from './projects/uni';
import Telco from './projects/telco';
import Rail from './projects/rail';
import CDO2 from './projects/cdo2';

import mixes from './projects/mixes';

import PlaceHolder from './projects/PLACEHOLDER';

import styles from '../styles/main.scss';

export default () => (
  <BrowserRouter>
    <ScrollTop>
      <Switch>
        <Route exact path='/projects/gov-service' component={GovService} />
        <Route exact path='/projects/gov-frontend' component={GovFrontend} />
        <Route exact path='/projects/uni' component={Uni} />
        <Route exact path='/projects/telco' component={Telco} />
        <Route exact path='/projects/rail' component={Rail} />
        <Route exact path='/projects/cdo2' component={CDO2} />
        <Route exact path='/projects/automated-flat' component={PlaceHolder} />
        <Route exact path='/projects/mixes' component={mixes} />
        <Route exact path='/projects/this-site' component={PlaceHolder} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/' component={Homepage} />
        <Route component={NoMatch} />
      </Switch>
    </ScrollTop>
  </BrowserRouter>
);
