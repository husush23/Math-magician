/*eslint-disable*/
import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <header className='header'>
      <h1>Math Magcian</h1>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/calculator'>Calculator</Link>
        <Link to='/quotes'>Quotes</Link>
      </nav>
    </header>
  );
}

export default Header;
