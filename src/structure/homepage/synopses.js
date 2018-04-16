import React, { Component } from 'react';

import SynopsisSection from '../../components/synopsis-section';
import { devopsContent } from '../../content/synopses/devops';
import { engineeringContent } from '../../content/synopses/engineering';
import { musicContent } from '../../content/synopses/music';
import { homeautomationContent } from '../../content/synopses/homeautomation';

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
          direction={devopsContent.direction}
          imageUrl={devopsContent.imageUrl}
          style={devopsContent.style}
          title={devopsContent.title}
          prose={devopsContent.prose}
          buttonText={devopsContent.buttonText}
          buttonLink={devopsContent.buttonLink}
        />
        <SynopsisSection
          id='three'
          direction={musicContent.direction}
          imageUrl={musicContent.imageUrl}
          style={musicContent.style}
          title={musicContent.title}
          prose={musicContent.prose}
          buttonText={musicContent.buttonText}
          buttonLink={musicContent.buttonLink}
        />
        <SynopsisSection
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
