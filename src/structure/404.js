import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/header';
import { headerContent } from '../content/404/header';

import BannerNoImage from '../components/banner-noimage';
import { notFoundContent } from '../content/404/404';

import Footer from '../components/footer';
import { footerContent } from '../content/footer';

export default class NoMatch extends Component {
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
            title={notFoundContent.title}
            prose=''
          />
          <div className='wrapper'>
            <div className='inner'>
              <p>{notFoundContent.proseA}</p>
              <p>
                {notFoundContent.proseB}
                <Link to={notFoundContent.buttonLink}>{notFoundContent.buttonText}</Link>
              </p>
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
