import React from 'react';

//TODO: change <a> to Router Link's
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
        <a href={avatarLink} className='image'><img src={avatarUrl} alt='Avatar image' /></a>
        <h2>{title}</h2>
        <p>{interestA} <mark>|</mark> {interestB} <mark>|</mark> {interestC}</p>
      </div>
    </section>
  );
}

export default Banner;
