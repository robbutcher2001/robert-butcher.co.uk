import React from 'react';

import Header from '../../components/header';
import { headerContent } from '../../content/projects/full-pages/header';

import Banner from '../../components/banner';
import content from '../../content/projects/full-pages/mixes';

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
    />
    <section id='wrapper'>
      <div className='wrapper'>
        <div className='inner'>
          {content.proseA.map((p, i) => (
              <p key={i}>{p}</p>
            ))
          }
          <iframe width='100%' height='60' src={content.mixA} frameborder='0' ></iframe>
          {content.proseB.map((p, i) => (
              <p key={i}>{p}</p>
            ))
          }
          <iframe width='100%' height='60' src={content.mixB} frameborder='0' ></iframe>
          {content.proseC.map((p, i) => (
              <p key={i}>{p}</p>
            ))
          }
          <iframe width='100%' height='60' src={content.mixC} frameborder='0' ></iframe>
          <iframe width='100%' height='60' src={content.mixD} frameborder='0' ></iframe>
          <iframe width='100%' height='60' src={content.mixE} frameborder='0' ></iframe>
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
