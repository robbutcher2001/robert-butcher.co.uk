import React from 'react';

import Header from '../../components/header';
import { headerContent } from '../../content/homepage/header';

import BannerHomepage from '../../components/banner-homepage';
import { bannerContent } from '../../content/homepage/banner';

import Synopses from './synopses';

import Footer from '../../components/footer';
import { footerContent } from '../../content/footer';

export default () => (
  <div id='page-wrapper'>
    <Header
      title={headerContent.title}
      topButtonText={headerContent.topButtonText}
      topButtonLink={headerContent.topButtonLink}
    />
    <BannerHomepage
      title={bannerContent.title}
      avatarUrl={bannerContent.avatarUrl}
      avatarLink={bannerContent.avatarLink}
      interestA={bannerContent.interestA}
      interestB={bannerContent.interestB}
      interestC={bannerContent.interestC}
    />
    <Synopses />
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
