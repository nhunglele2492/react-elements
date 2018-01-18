import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';

import NavBar from './Nav';

var data = [
  {
    "text": "Link 3",
    "url": "#",
    "submenu": [
      {
        "text": "Sublink 1",
        "url": "#",
        "submenu": [
          {
            "text": "SubSublink 1",
            "url": "#"
          }
        ]
      },
      {
        "text": "Sublink 2",
        "url":"#",
        "submenu": [
          {
            "text": "SubSublink 2",
            "url": "#"
          }
        ]
      }
    ]
  },
  {
    "text": "Link 2",
    "url": "#"
  }
]

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="logo"><a href="/" title="Logo">FFWvn</a></div>
          <nav className="navigation">
            <NavBar items={data} />
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
