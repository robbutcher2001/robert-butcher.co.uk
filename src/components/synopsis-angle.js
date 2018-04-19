import React from 'react';
import { Link } from 'react-router-dom';

const renderClassName = (direction, imageUrl, style) => {
  let className = 'wrapper ';

  className = className.concat(direction === 'left' ? 'alt ' : '');
  className = className.concat(imageUrl !== false ? 'spotlight ' : '');
  return className.concat(style);
};

const SynopsisAngle = ({
  id,
  direction,
  imageUrl,
  style,
  title,
  prose,
  buttonText,
  buttonLink
}) => {
  return (
    <section id={id} className={renderClassName(direction, imageUrl, style)}>
      <div className='inner'>
        <Link to='/' className='image'>
          <img src={imageUrl} alt='Section image' />
        </Link>
        <div className='content'>
          <h2 className='major'>{title}</h2>
          <p>{prose}</p>
          <Link to={buttonLink} className='special'>{buttonText}</Link>
        </div>
      </div>
    </section>
  );
}

export default SynopsisAngle;
