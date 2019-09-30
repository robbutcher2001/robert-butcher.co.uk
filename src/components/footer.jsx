import React from 'react';

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
      <form method='post' action={postUrl}>
        <div className='field'>
          <label htmlFor={fieldA.toLowerCase()}>{fieldA}</label>
          <input type='text' autoComplete={fieldA.toLowerCase()} name={fieldA.toLowerCase()} id={fieldA.toLowerCase()} />
        </div>
        <div className='field'>
          <label htmlFor={fieldB.toLowerCase()}>{fieldB}</label>
          <input type='email' autoComplete={fieldB.toLowerCase()} name={fieldB.toLowerCase()} id={fieldB.toLowerCase()} />
        </div>
        <div className='field'>
          <label htmlFor={fieldC.toLowerCase()}>{fieldC}</label>
          <textarea name={fieldC.toLowerCase()} id={fieldC.toLowerCase()} rows='4'></textarea>
        </div>
        <ul className='actions'>
          <li><input type='submit' value={submitMessage} /></li>
        </ul>
      </form>
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
