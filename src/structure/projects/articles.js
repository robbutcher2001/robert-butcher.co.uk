import React, { Component } from 'react';

import BannerNoImage from '../../components/banner-noimage';
import { bannerContent } from '../../content/projects/banner';

import ArticleSection from '../../components/article-section';
import { overviewContent } from '../../content/projects/overview';
import { oupContent } from '../../content/projects/articles/oup';

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
            </section>
          </div>
        </div>
      </section>
    );
  }
}
