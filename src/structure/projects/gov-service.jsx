import React from 'react';

import Header from '../../components/header';
import { headerContent } from '../../content/projects/full-pages/header';

import Banner from '../../components/banner';
import { govServiceContent } from '../../content/projects/full-pages/gov-service';

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
      title={govServiceContent.title}
      logoUrl={govServiceContent.logoUrl}
      logoLink={govServiceContent.logoLink}
      prose={govServiceContent.role}
    />
    <section id='wrapper'>
      <div className='wrapper'>
        <div className='inner'>
          <h3 className='major'>{govServiceContent.dates}</h3>
          {govServiceContent.prose.map((p, i) => (
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
