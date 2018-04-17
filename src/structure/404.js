import React, { Component } from 'react';

import Header from '../components/header';
import { headerContent } from '../content/projects/header';

import BannerNoImage from '../components/banner-noimage';

import Footer from '../components/footer';
import { footerContent } from '../content/footer';

export default class NoMatch extends Component {
  render() {
    return (
      <div id='page-wrapper'>
        <Header
          title='404'
          topButtonText={headerContent.topButtonText}
          topButtonLink={headerContent.topButtonLink}
        />
        <BannerNoImage
          title='404'
          prose='doesnt work'
        />
        <Footer
          title={footerContent.title}
          prose={footerContent.prose}
          postUrl={footerContent.postUrl}
          fieldA={footerContent.fieldA}
          fieldB={footerContent.fieldB}
          fieldC={footerContent.fieldC}
          submitMessage={footerContent.submitMessage}
          gitHubUrl={footerContent.gitHubUrl}
          musicUrl={footerContent.musicUrl}
        />
      </div>
    );
  }
}
