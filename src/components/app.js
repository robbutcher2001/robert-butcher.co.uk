import React, { Component } from 'react';

import { engineering } from '../content/synopses/engineering';
import { music } from '../content/synopses/music';

export default class App extends Component {
  render() {
    return (
      <div>
        {engineering.title}
        {music.title}
      </div>
    );
  }
}
