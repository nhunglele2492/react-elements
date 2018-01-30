import React, { Component } from 'react';

import logo1 from '../../Assets/images/logo1.png';

import NavBar from './Nav';

var data = [
  {
    "text": "Page 1",
    "url": "/page1",
  },
  {
    "text": "Page 2",
    "url": "/page2"
  }
]

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="logo"><a href="/" title="Logo"><img src={logo1} alt=''/></a></div>
          <nav className="navigation">
            <NavBar items={data} />
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
