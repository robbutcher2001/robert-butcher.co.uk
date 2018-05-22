import React from 'react';
import { Link } from 'react-router-dom';

const SynopsisSquare = ({
  title,
  prose,
  imageUrl,
  imageLink,
  buttonText,
  buttonLink
}) => {
  return (
    <article>
      <Link to={imageLink} className='image'>
        <img src={imageUrl} alt='Synopsis image' />
      </Link>
      <h3 className='major'>{title}</h3>
      <p>{prose}</p>
      <Link to={buttonLink} className='special'>{buttonText}</Link>
    </article>
  );
}

export default SynopsisSquare;
