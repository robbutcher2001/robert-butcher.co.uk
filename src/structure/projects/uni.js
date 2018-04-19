import React, { Component } from 'react';

import Header from '../../components/header';
import { headerContent } from '../../content/projects/full-pages/header';

import Banner from '../../components/banner';
import { uniContent } from '../../content/projects/full-pages/uni';

import Footer from '../../components/footer';
import { footerContent } from '../../content/footer';

export default class Uni extends Component {
  render() {
    return (
      <div id='page-wrapper'>
        <Header
          title={headerContent.title}
          topButtonText={headerContent.topButtonText}
          topButtonLink={headerContent.topButtonLink}
        />
        <Banner
          title={uniContent.title}
          logoUrl={uniContent.logoUrl}
          logoLink={uniContent.logoLink}
          prose={uniContent.role}
        />
        <section id='wrapper'>
          <div className='wrapper'>
            <div className='inner'>
              <h3 className='major'>{uniContent.dates}</h3>
              <p>{uniContent.proseA}</p>
              <p>{uniContent.proseB}</p>
              <pre><code>{uniContent.code}</code></pre>
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
  }
}
