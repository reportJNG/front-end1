import React, { useState } from 'react';
import '../styles/components/Header.css';
import HeaderButtons from './HeaderButtons'; // Assuming HeaderButtons is in the same directory

function Header (){
  

  return (
    
    <header className="header">
      <div className="header-logo">MyLogo</div>
      <nav className="header-nav">
        <a href="#">Accueil</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </nav>
      <HeaderButtons />
    </header>
  );
};

export default Header;
