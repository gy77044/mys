import React from 'react';
import './Header.scss';
import { IconClose } from '../Icons/Icons';

const Header = () => {
  return <header className='header-container'>
    <span className='header-head'>Plans</span>
    <button className='btn-close'><IconClose /></button>
  </header>
};

export default Header;
