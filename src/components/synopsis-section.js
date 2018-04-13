import React from 'react';

const getClassName = (direction, imageUrl, style) => {
  let className = 'wrapper ';

  className = className.concat(direction === 'left' ? 'alt ' : '');
  className = className.concat(imageUrl !== false ? 'spotlight ' : '');
  return className.concat(style);
};

//TODO: change <a> to Router Link's
const SynopsisSection = ({
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
    <section id={id} className={getClassName(direction, imageUrl, style)}>
      <div className='inner'>
        <a href='/' className='image'><img src={imageUrl} alt='Section image' /></a>
        <div className='content'>
          <h2 className='major'>{title}</h2>
          <p>{prose}</p>
          <a href={buttonLink} className='special'>{buttonText}</a>
        </div>
      </div>
    </section>
  );
}

export default SynopsisSection;
