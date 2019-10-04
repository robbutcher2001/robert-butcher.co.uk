import React from 'react';
import Gist from 'react-embed-gist';

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
          <h3>Code Snippet</h3>
          <p>{content.codeSnippetTitle}</p>
          <Gist
            gist='robbutcher2001/d7bc1283c481819a8d58d8f62483bb6d'
            loadingClass='loading__screen'
          />
          <p>{content.codeSnippetProse}</p>
          <ul>
            {content.codeSnippetStepThrough.map((p, i) => (
              <li key={i}>{p}</li>
            ))
            }
          </ul>
          <p>{content.codeSnippetEnd}<a href={content.codeSnippetLink} target='_blank'>{content.codeSnippetLinkText}</a></p>
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
