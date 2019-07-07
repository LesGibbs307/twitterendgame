import React, { Component } from 'react';
import MainLogo from '../images/marvel-logo.jpg'

export class Header extends Component {
    render(){
        return (
          <header>
              <div className="img-container">
                <img className="img-responsive" src={MainLogo} alt="Marvel Logo"/>
              </div>
          </header>
        );
    }
  }

  export default Header;