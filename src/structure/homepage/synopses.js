import React, { Component } from 'react';

import SynopsisSection from '../../components/synopsis-section';
import { engineeringContent } from '../../content/synopses/engineering';
import { musicContent } from '../../content/synopses/music';

export default class Synopses extends Component {
  render() {
    return (
      <div id='wrapper'>
        <SynopsisSection
          id='one'
          direction={engineeringContent.direction}
          imageUrl={engineeringContent.imageUrl}
          style={engineeringContent.style}
          title={engineeringContent.title}
          prose={engineeringContent.prose}
          buttonText={engineeringContent.buttonText}
          buttonLink={engineeringContent.buttonLink}
        />
        <SynopsisSection
          id='two'
          direction={musicContent.direction}
          imageUrl={musicContent.imageUrl}
          style={musicContent.style}
          title={musicContent.title}
          prose={musicContent.prose}
          buttonText={musicContent.buttonText}
          buttonLink={musicContent.buttonLink}
        />
      </div>
    );
  }
}
