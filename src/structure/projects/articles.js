import React, { Component } from 'react';

import BannerNoImage from '../../components/banner-noimage';
import { bannerContent } from '../../content/projects/banner';

import ArticleSection from '../../components/article-section';
import { overviewContent } from '../../content/projects/overview';

import { oupContent } from '../../content/projects/articles/oup';
import { threeContent } from '../../content/projects/articles/three';
import { nreContent } from '../../content/projects/articles/nre';
import { cdo2Content } from '../../content/projects/articles/cdo2';

import { musicAppContent } from '../../content/projects/articles/musicApp';
import { homeAutomationContent } from '../../content/projects/articles/homeAutomation';
import { thisSiteContent } from '../../content/projects/articles/thisSite';

export default class Articles extends Component {
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
              <ArticleSection
                title={oupContent.title}
                prose={oupContent.prose}
                imageUrl={oupContent.imageUrl}
                buttonText={oupContent.buttonText}
                buttonLink={oupContent.buttonLink}
              />
              <ArticleSection
                title={threeContent.title}
                prose={threeContent.prose}
                imageUrl={threeContent.imageUrl}
                buttonText={threeContent.buttonText}
                buttonLink={threeContent.buttonLink}
              />
              <ArticleSection
                title={nreContent.title}
                prose={nreContent.prose}
                imageUrl={nreContent.imageUrl}
                buttonText={nreContent.buttonText}
                buttonLink={nreContent.buttonLink}
              />
              <ArticleSection
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
              <ArticleSection
                title={musicAppContent.title}
                prose={musicAppContent.prose}
                imageUrl={musicAppContent.imageUrl}
                buttonText={musicAppContent.buttonText}
                buttonLink={musicAppContent.buttonLink}
              />
              <ArticleSection
                title={homeAutomationContent.title}
                prose={homeAutomationContent.prose}
                imageUrl={homeAutomationContent.imageUrl}
                buttonText={homeAutomationContent.buttonText}
                buttonLink={homeAutomationContent.buttonLink}
              />
              <ArticleSection
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
