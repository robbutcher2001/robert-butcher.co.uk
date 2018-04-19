import React, { Component } from 'react';

import SynopsisAngle from '../../components/synopsis-angle';
import { devopsContent } from '../../content/homepage/synopses/devops';
import { engineeringContent } from '../../content/homepage/synopses/engineering';
import { musicContent } from '../../content/homepage/synopses/music';
import { homeautomationContent } from '../../content/homepage/synopses/home-automation';

export default class Synopses extends Component {
  render() {
    return (
      <div id='wrapper'>
        <SynopsisAngle
          id='one'
          direction={engineeringContent.direction}
          imageUrl={engineeringContent.imageUrl}
          style={engineeringContent.style}
          title={engineeringContent.title}
          prose={engineeringContent.prose}
          buttonText={engineeringContent.buttonText}
          buttonLink={engineeringContent.buttonLink}
        />
        <SynopsisAngle
          id='two'
          direction={devopsContent.direction}
          imageUrl={devopsContent.imageUrl}
          style={devopsContent.style}
          title={devopsContent.title}
          prose={devopsContent.prose}
          buttonText={devopsContent.buttonText}
          buttonLink={devopsContent.buttonLink}
        />
        <SynopsisAngle
          id='three'
          direction={musicContent.direction}
          imageUrl={musicContent.imageUrl}
          style={musicContent.style}
          title={musicContent.title}
          prose={musicContent.prose}
          buttonText={musicContent.buttonText}
          buttonLink={musicContent.buttonLink}
        />
        <SynopsisAngle
          id='four'
          direction={homeautomationContent.direction}
          imageUrl={homeautomationContent.imageUrl}
          style={homeautomationContent.style}
          title={homeautomationContent.title}
          prose={homeautomationContent.prose}
          buttonText={homeautomationContent.buttonText}
          buttonLink={homeautomationContent.buttonLink}
        />
      </div>
    );
  }
}
