import React from 'react';
import MainLogo from '../images/marvel-logo.jpg'

function Header(){
  return (
    <header>
        <div className="img-container">
          <img className="img-responsive" src={MainLogo} alt="Marvel Logo"/>
        </div>
    </header>
  );
}

export default Header;