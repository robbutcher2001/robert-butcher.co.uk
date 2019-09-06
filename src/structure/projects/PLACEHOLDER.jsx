import React from 'react';

import Header from '../../components/header';
import { headerContent } from '../../content/projects/full-pages/header';

import Banner from '../../components/banner';

import Footer from '../../components/footer';
import { footerContent } from '../../content/footer';

export default () => (
  <div id='page-wrapper'>
    <Header
      title={headerContent.title}
      topButtonText={headerContent.topButtonText}
      topButtonLink={headerContent.topButtonLink}
    />
    <Banner
      title='Page doesnt exist yet'
      logoUrl='/content/images/404.jpg'
      logoLink=''
      prose='Rob still needs to write this bit.'
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
