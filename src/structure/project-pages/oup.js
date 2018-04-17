import React, { Component } from 'react';

import Header from '../../components/header';
import { headerContent } from '../../content/projects/header';

import BannerNoImage from '../../components/banner-noimage';

import Footer from '../../components/footer';
import { footerContent } from '../../content/footer';

export default class Homepage extends Component {
  render() {
    return (
      <div id='page-wrapper'>
        <Header
          title={headerContent.title}
          topButtonText={headerContent.topButtonText}
          topButtonLink={headerContent.topButtonLink}
        />
        <section id='wrapper'>
          <BannerNoImage
            title='oup'
            prose='Stuff about the OUP project'
          />
          <div className='wrapper'>
            <div className='inner'>
              <h3 className='major'>something about OUP</h3>
              <p>proseA</p>
              <p>proseB</p>
              <code>code here</code>
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
