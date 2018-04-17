import React from 'react';
import { Link } from 'react-router-dom';

const Banner = ({
  title,
  avatarUrl,
  avatarLink,
  interestA,
  interestB,
  interestC
}) => {
  return (
    <section id='banner'>
      <div className='inner'>
        <Link to={avatarLink} className='image avatar'>
          <img src={avatarUrl} alt='Avatar image' />
        </Link>
        <h2>{title}</h2>
        <p>{interestA} <mark>|</mark> {interestB} <mark>|</mark> {interestC}</p>
      </div>
    </section>
  );
}

export default Banner;
