import React from 'react';
import { Link } from 'react-router-dom';

const ArticleSection = ({
  title,
  prose,
  imageUrl,
  buttonText,
  buttonLink
}) => {
  return (
    <article>
      <Link to='/' className='image'>
        <img src={imageUrl} alt='Article image' />
      </Link>
      <h3 className='major'>{title}</h3>
      <p>{prose}</p>
      <Link to={buttonLink} className='special'>{buttonText}</Link>
    </article>
  );
}

export default ArticleSection;
