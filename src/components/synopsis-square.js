import React from 'react';
import { Link } from 'react-router-dom';

export default ({
  title,
  prose,
  imageUrl,
  imageLink,
  buttonText,
  buttonLink
}) => (
  <article>
    <Link to={imageLink} className='image'>
      <img src={imageUrl} alt='Synopsis image' />
    </Link>
    <h3 className='major'>{title}</h3>
    <p>{prose}</p>
    <Link to={buttonLink} className='special'>
      <i className='fas fa-angle-right'></i>
      {buttonText}
    </Link>
  </article>
);
