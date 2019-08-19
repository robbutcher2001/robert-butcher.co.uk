import React from 'react';
import Gist from 'react-gist';

import Header from '../../components/header';
import { headerContent } from '../../content/projects/full-pages/header';

import Banner from '../../components/banner';
import content from '../../content/projects/full-pages/uni';

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
      title={content.title}
      logoUrl={content.logoUrl}
      logoLink={content.logoLink}
      prose={content.role}
    />
    <section id='wrapper'>
      <div className='wrapper'>
        <div className='inner'>
          <h3 className='major'>{content.dates}</h3>
          {content.prose.map((p, i) => (
            <p key={i}>{p}</p>
          ))
          }
          <pre><code>{content.code}</code></pre>
          <Gist id='46e780a7939e61d1337fca413f5dbbbb' />
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
