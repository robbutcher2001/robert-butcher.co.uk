import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ title, topButtonText, topButtonLink }) => {
  return (
    <header id='header' className='alt'>
      <h1><Link to='/'>{title}</Link></h1>
      <nav>
        <Link to={topButtonLink}>{topButtonText}</Link>
      </nav>
    </header>
  );
}

export default Header;
