import React, { Component } from 'react';

import BannerNoImage from '../../components/banner-noimage';
import { bannerContent } from '../../content/projects/banner';

import SynopsisSquare from '../../components/synopsis-square';
import { professionalOverviewContent } from '../../content/projects/synopses/professional-overview';
import { personalOverviewContent } from '../../content/projects/synopses/personal-overview';

import { uniContent } from '../../content/projects/synopses/uni';
import { telcoContent } from '../../content/projects/synopses/telco';
import { railContent } from '../../content/projects/synopses/rail';
import { cdo2Content } from '../../content/projects/synopses/cdo2';

import { homeAutomationContent } from '../../content/projects/synopses/home-automation';
import { musicAppContent } from '../../content/projects/synopses/music-app';
import { thisSiteContent } from '../../content/projects/synopses/this-site';

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
            <h3 className='major'>{professionalOverviewContent.title}</h3>
            <p>{professionalOverviewContent.proseA}</p>
            <p>{professionalOverviewContent.proseB}</p>
            <section className='features'>
              <SynopsisSquare
                title={uniContent.title}
                prose={uniContent.prose}
                imageUrl={uniContent.imageUrl}
                imageLink={uniContent.imageLink}
                buttonText={uniContent.buttonText}
                buttonLink={uniContent.buttonLink}
              />
              <SynopsisSquare
                title={telcoContent.title}
                prose={telcoContent.prose}
                imageUrl={telcoContent.imageUrl}
                imageLink={telcoContent.imageLink}
                buttonText={telcoContent.buttonText}
                buttonLink={telcoContent.buttonLink}
              />
              <SynopsisSquare
                title={railContent.title}
                prose={railContent.prose}
                imageUrl={railContent.imageUrl}
                imageLink={railContent.imageLink}
                buttonText={railContent.buttonText}
                buttonLink={railContent.buttonLink}
              />
              <SynopsisSquare
                title={cdo2Content.title}
                prose={cdo2Content.prose}
                imageUrl={cdo2Content.imageUrl}
                imageLink={cdo2Content.imageLink}
                buttonText={cdo2Content.buttonText}
                buttonLink={cdo2Content.buttonLink}
              />
            </section>
            <h3 className='major'>{personalOverviewContent.title}</h3>
            <p>{personalOverviewContent.proseA}</p>
            <p>{personalOverviewContent.proseB}</p>
            <p>{personalOverviewContent.proseC}</p>
            <section className='features'>
              <SynopsisSquare
                title={homeAutomationContent.title}
                prose={homeAutomationContent.prose}
                imageUrl={homeAutomationContent.imageUrl}
                imageLink={homeAutomationContent.imageLink}
                buttonText={homeAutomationContent.buttonText}
                buttonLink={homeAutomationContent.buttonLink}
              />
              <SynopsisSquare
                title={musicAppContent.title}
                prose={musicAppContent.prose}
                imageUrl={musicAppContent.imageUrl}
                imageLink={musicAppContent.imageLink}
                buttonText={musicAppContent.buttonText}
                buttonLink={musicAppContent.buttonLink}
              />
              <SynopsisSquare
                title={thisSiteContent.title}
                prose={thisSiteContent.prose}
                imageUrl={thisSiteContent.imageUrl}
                imageLink={thisSiteContent.imageLink}
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
