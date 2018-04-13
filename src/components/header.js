import React from 'react';

//TODO: change <a> to Router Link's
const Header = ({ title, topButtonText, topButtonLink }) => {
  return (
    <header id='header' className='alt'>
      <h1><a href='/'>{title}</a></h1>
      <nav>
        <a href={topButtonLink}>{topButtonText}</a>
      </nav>
    </header>
  );
}

export default Header;
