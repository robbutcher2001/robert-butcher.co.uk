import React from 'react';

import ContactForm from './contact-form';

export default ({
  title,
  prose,
  postUrl,
  fieldA,
  fieldB,
  fieldC,
  submitMessage,
  gitHubUrl,
  musicUrl
}) => (
  <section id='footer'>
    <div className='inner'>
      <h2 className='major'>{title}</h2>
      <p>{prose}</p>
      <ContactForm
        postUrl={postUrl}
        fieldA={fieldA}
        fieldB={fieldB}
        fieldC={fieldC}
        submitMessage={submitMessage}
      >
      </ContactForm>
      <ul className='fa-ul contact'>
        <li>
          <span className='fa-li'>
            <i className='fab fa-github'></i>
          </span>
          <a href={gitHubUrl} target='_blank'>{gitHubUrl}</a>
        </li>
        <li>
          <span className='fa-li'>
            <i className='fas fa-music'></i>
          </span>
          <a href={musicUrl} target='_blank'>{musicUrl}</a>
        </li>
      </ul>
      <ul className='copyright'>
        <li>&copy; Rob Butcher</li><li>Design: <a href='https://html5up.net' target='_blank'>HTML5 UP</a> but written in React by Rob.</li>
      </ul>
    </div>
  </section>
);
