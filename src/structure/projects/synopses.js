import React, { Component } from 'react';

import BannerNoImage from '../../components/banner-noimage';
import { bannerContent } from '../../content/projects/banner';

import SynopsisSquare from '../../components/synopsis-square';
import { overviewContent } from '../../content/projects/overview';

import { uniContent } from '../../content/projects/synopses/uni';
import { telcoContent } from '../../content/projects/synopses/telco';
import { railContent } from '../../content/projects/synopses/rail';
import { cdo2Content } from '../../content/projects/synopses/cdo2';

import { musicAppContent } from '../../content/projects/synopses/musicApp';
import { homeAutomationContent } from '../../content/projects/synopses/homeAutomation';
import { thisSiteContent } from '../../content/projects/synopses/thisSite';

export default class Synopses extends Component {
  render() {
    return (
      <section id='wrapper'>
        <BannerNoImage
          title={bannerContent.title}
          prose={bannerContent.prose}
        />
        <div className='wrapper'>
          <div className='inner'>
            <h3 className='major'>{overviewContent.title}</h3>
            <p>{overviewContent.proseA}</p>
            <p>{overviewContent.proseB}</p>
            <section className='features'>
              <SynopsisSquare
                title={uniContent.title}
                prose={uniContent.prose}
                imageUrl={uniContent.imageUrl}
                buttonText={uniContent.buttonText}
                buttonLink={uniContent.buttonLink}
              />
              <SynopsisSquare
                title={telcoContent.title}
                prose={telcoContent.prose}
                imageUrl={telcoContent.imageUrl}
                buttonText={telcoContent.buttonText}
                buttonLink={telcoContent.buttonLink}
              />
              <SynopsisSquare
                title={railContent.title}
                prose={railContent.prose}
                imageUrl={railContent.imageUrl}
                buttonText={railContent.buttonText}
                buttonLink={railContent.buttonLink}
              />
              <SynopsisSquare
                title={cdo2Content.title}
                prose={cdo2Content.prose}
                imageUrl={cdo2Content.imageUrl}
                buttonText={cdo2Content.buttonText}
                buttonLink={cdo2Content.buttonLink}
              />
            </section>
            <h3 className='major'>Something about personal here</h3>
            <p>{overviewContent.proseA}</p>
            <p>{overviewContent.proseB}</p>
            <section className='features'>
              <SynopsisSquare
                title={musicAppContent.title}
                prose={musicAppContent.prose}
                imageUrl={musicAppContent.imageUrl}
                buttonText={musicAppContent.buttonText}
                buttonLink={musicAppContent.buttonLink}
              />
              <SynopsisSquare
                title={homeAutomationContent.title}
                prose={homeAutomationContent.prose}
                imageUrl={homeAutomationContent.imageUrl}
                buttonText={homeAutomationContent.buttonText}
                buttonLink={homeAutomationContent.buttonLink}
              />
              <SynopsisSquare
                title={thisSiteContent.title}
                prose={thisSiteContent.prose}
                imageUrl={thisSiteContent.imageUrl}
                buttonText={thisSiteContent.buttonText}
                buttonLink={thisSiteContent.buttonLink}
              />
            </section>
          </div>
        </div>
      </section>
    );
  }
}
