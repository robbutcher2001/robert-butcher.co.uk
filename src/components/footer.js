import React from 'react';

//TODO: change <a> to Router Link's
const Footer = ({
  title,
  prose,
  postUrl,
  fieldA,
  fieldB,
  fieldC,
  submitMessage,
  gitHubUrl,
  musicUrl
}) => {
  return (
    <section id='footer'>
      <div className='inner'>
        <h2 className='major'>{title}</h2>
        <p>{prose}</p>
        <form method='post' action={postUrl}>
          <div className='field'>
            <label htmlFor={fieldA.toLowerCase()}>{fieldA}</label>
            <input type='text' name={fieldA.toLowerCase()} id={fieldA.toLowerCase()} />
          </div>
          <div className='field'>
            <label htmlFor={fieldB.toLowerCase()}>{fieldB}</label>
            <input type='email' name={fieldB.toLowerCase()} id={fieldB.toLowerCase()} />
          </div>
          <div className='field'>
            <label htmlFor={fieldC.toLowerCase()}>{fieldC}</label>
            <textarea name={fieldC.toLowerCase()} id={fieldC.toLowerCase()} rows='4'></textarea>
          </div>
          <ul className='actions'>
            <li><input type='submit' value={submitMessage} /></li>
          </ul>
        </form>
        <ul className='contact'>
          <li className='fa-github'><a href={gitHubUrl}>{gitHubUrl}</a></li>
          <li className='fa-music'><a href={musicUrl}>{musicUrl}</a></li>
        </ul>
        <ul className='copyright'>
          <li>&copy; Rob Butcher</li><li>Design: <a href='http://html5up.net'>HTML5 UP</a></li>
        </ul>
      </div>
    </section>
  );
}

export default Footer;
