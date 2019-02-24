import React from 'react';
import { Link } from 'react-router-dom';

const renderClassName = (direction, imageUrl, style) => {
  let className = 'wrapper ';

  className = className.concat(direction === 'left' ? 'alt ' : '');
  className = className.concat(imageUrl !== false ? 'spotlight ' : '');
  return className.concat(style);
};

export default ({
  id,
  direction,
  imageUrl,
  imageLink,
  style,
  title,
  prose,
  buttonText,
  buttonLink
}) => (
  <section id={id} className={renderClassName(direction, imageUrl, style)}>
    <div className='inner'>
      <Link to={imageLink} className='image'>
        <img src={imageUrl} alt='Section image' />
      </Link>
      <div className='content'>
        <h2 className='major'>{title}</h2>
        <p>{prose}</p>
        <Link to={buttonLink} className='special'>
          <i className='fas fa-angle-right'></i>
          {buttonText}
        </Link>
      </div>
    </div>
  </section>
);
