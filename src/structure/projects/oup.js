import React, { Component } from 'react';

import Header from '../../components/header';
import { headerContent } from '../../content/projects/full-pages/header';

import Banner from '../../components/banner';
import { oupContent } from '../../content/projects/full-pages/oup';

import Footer from '../../components/footer';
import { footerContent } from '../../content/footer';

export default class OUP extends Component {
  render() {
    return (
      <div id='page-wrapper'>
        <Header
          title={headerContent.title}
          topButtonText={headerContent.topButtonText}
          topButtonLink={headerContent.topButtonLink}
        />
        <Banner
          title={oupContent.title}
          logoUrl={oupContent.logoUrl}
          logoLink={oupContent.logoLink}
          prose={oupContent.role}
        />
        <section id='wrapper'>
          <div className='wrapper'>
            <div className='inner'>
              <h3 className='major'>{oupContent.dates}</h3>
              <p>{oupContent.proseA}</p>
              <p>{oupContent.proseB}</p>
              <pre><code>{oupContent.code}</code></pre>
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
