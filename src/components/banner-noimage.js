import React from 'react';

const BannerNoImage = ({
  title,
  prose
}) => {
  return (
    <header>
      <div className='inner'>
        <h2>{title}</h2>
        <p>{prose}</p>
      </div>
    </header>
  );
}

export default BannerNoImage;
