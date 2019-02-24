import React from 'react';
import { Link } from 'react-router-dom';

export default ({
  title,
  logoUrl,
  logoLink,
  prose
}) => (
  <section id='banner'>
    <div className='inner'>
      <Link to={logoLink} className='image avatar'>
        <img src={logoUrl} alt='Logo image' />
      </Link>
      <h2>{title}</h2>
      <p>{prose}</p>
    </div>
  </section>
);
