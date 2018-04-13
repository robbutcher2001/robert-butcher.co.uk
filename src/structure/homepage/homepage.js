import React, { Component } from 'react';

import Header from '../../components/header';
import { headerContent } from '../../content/header';

import Banner from '../../components/banner';
import { bannerContent } from '../../content/banner';

import Synopses from './synopses';

export default class Homepage extends Component {
  render() {
    return (
      <div id='page-wrapper'>
        <Header
          title={headerContent.title}
          topButtonText={headerContent.topButtonText}
          topButtonLink={headerContent.topButtonLink}
        />
        <Banner
          title={bannerContent.title}
          avatarUrl={bannerContent.avatarUrl}
          avatarLink={bannerContent.avatarLink}
          interestA={bannerContent.interestA}
          interestB={bannerContent.interestB}
          interestC={bannerContent.interestC}
        />
        <Synopses />
      </div>
    );
  }
}
