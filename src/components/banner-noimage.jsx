import React from 'react';

export default ({
  title,
  prose
}) => (
  <header>
    <div className='inner'>
      <h2>{title}</h2>
      <p>{prose}</p>
    </div>
  </header>
);
