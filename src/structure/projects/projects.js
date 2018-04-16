import React, { Component } from 'react';

import Header from '../../components/header';
import { headerContent } from '../../content/projects/header';

import Banner from '../../components/banner';
import { bannerContent } from '../../content/projects/banner';

import Footer from '../../components/footer';
import { footerContent } from '../../content/footer';

export default class Homepage extends Component {
  render() {
    return (
      <div id='page-wrapper'>
        <Header
          title={headerContent.title}
          topButtonText={headerContent.topButtonText}
          topButtonLink={headerContent.topButtonLink}
        />
        <Banner
          title={bannerContent.title}
          avatarUrl={bannerContent.avatarUrl}
          avatarLink={bannerContent.avatarLink}
          interestA={bannerContent.interestA}
          interestB={bannerContent.interestB}
          interestC={bannerContent.interestC}
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
