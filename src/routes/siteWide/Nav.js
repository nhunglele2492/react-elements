import React, { Component } from 'react';

import {OldSchoolMenuLink} from '../variables';

class NavBar extends Component {
  generateItem(item, i){
    return <NavBarItem key={i} text={item.text} url={item.url} submenu={item.submenu} />
  }
  render() {
    var items = this.props.items.map(this.generateItem);
    return (
      <ul className="menu">
        {items}
      </ul>
    );
  }
}

class NavBarItem extends Component {
  generateLink(){
    return <NavBarLink url={this.props.url} text={this.props.text} />;
  }
  generateSubmenu(){
    return <NavBar items={this.props.submenu} />
  }
  generateContent(){
    var content = [this.generateLink()];
    if(this.props.submenu){
      content.push(this.generateSubmenu());
    }
    return content;
  }
  render() {
    var content = this.generateContent();
    return (
      <li>
        {content}
      </li>
    );
  }
}

class NavBarLink extends Component {
  render() {
    return (
      <OldSchoolMenuLink to={this.props.url} label={this.props.text}/>
    );
  }
}

export default NavBar;
