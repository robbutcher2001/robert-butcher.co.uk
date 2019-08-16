import React from 'react';

import Header from '../../components/header';
import { headerContent } from '../../content/projects/full-pages/header';

import Banner from '../../components/banner';
import { telcoContent } from '../../content/projects/full-pages/telco';

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
      title={telcoContent.title}
      logoUrl={telcoContent.logoUrl}
      logoLink={telcoContent.logoLink}
      prose={telcoContent.principalRole}
    />
    <section id='wrapper'>
      <div className='wrapper'>
        <div className='inner'>
          <h3 className='major'>
            {telcoContent.roleA.title}
            <span className='minor'>
              {telcoContent.roleA.dates}
            </span>
          </h3>
          {telcoContent.roleA.prose.map((p, i) => (
              <p key={i}>{p}</p>
            ))
          }
          <br/>
          <h3 className='major'>
            {telcoContent.roleB.title}
            <span className='minor'>
              {telcoContent.roleB.dates}
            </span>
          </h3>
          {telcoContent.roleB.prose.map((p, i) => (
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
