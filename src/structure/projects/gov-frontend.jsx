import React from 'react';

import Header from '../../components/header';
import { headerContent } from '../../content/projects/full-pages/header';

import Banner from '../../components/banner';
import { govFrontendContent } from '../../content/projects/full-pages/gov-frontend';

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
      title={govFrontendContent.title}
      logoUrl={govFrontendContent.logoUrl}
      logoLink={govFrontendContent.logoLink}
      prose={govFrontendContent.role}
    />
    <section id='wrapper'>
      <div className='wrapper'>
        <div className='inner'>
          <h3 className='major'>{govFrontendContent.dates}</h3>
          {govFrontendContent.prose.map((p, i) => (
              <p key={i}>{p}</p>
            ))
          }
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
