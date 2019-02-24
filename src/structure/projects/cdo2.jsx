import React from 'react';

import Header from '../../components/header';
import { headerContent } from '../../content/projects/full-pages/header';

import Banner from '../../components/banner';
import { cdo2Content } from '../../content/projects/full-pages/cdo2';

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
      title={cdo2Content.title}
      logoUrl={cdo2Content.logoUrl}
      logoLink={cdo2Content.logoLink}
      prose={cdo2Content.role}
    />
    <section id='wrapper'>
      <div className='wrapper'>
        <div className='inner'>
          <h3 className='major'>{cdo2Content.dates}</h3>
          <p>{cdo2Content.proseA}</p>
          <p>{cdo2Content.proseB}</p>
          <p>{cdo2Content.proseC}</p>
          <p>{cdo2Content.proseD}</p>
          <p>{cdo2Content.proseE}</p>
        </div>
      </div>
    </section>
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
