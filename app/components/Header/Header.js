import React from 'react';
import { Link } from 'react-router-dom';
import checkcs from './images/checkcs.png';
import './style.scss';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="header">
          <img src={checkcs} alt="react-search - Logo" />
        
        <div className="nav-bar">
          <Link className="router-link" to="/">
            Home
          </Link>
          <Link className="router-link" to="/features">
            Features
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
