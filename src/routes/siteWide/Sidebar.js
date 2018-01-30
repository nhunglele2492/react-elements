import React from 'react';
import {OldSchoolMenuLink} from '../variables';

class Sidebar extends React.Component {
  constructor(props) {
    super();
    this.state = {
      popupVisible: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }
  handleClick() {
    if (!this.state.popupVisible) {
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }

    this.setState(prevState => ({
       popupVisible: !prevState.popupVisible,
    }));
  }

  handleOutsideClick(e) {
    if (this.node.contains(e.target)) {
      return;
    }

    this.handleClick();
  }

  render() {
    let classClick = this.state.popupVisible ? 'open' : '';
    return(
      <div className={"sidebar-list "+ classClick} ref={node => { this.node = node; }}>
        <div onClick={this.handleClick} className="sidebar-list__button ">Button</div>
          <div className="sidebar-list__list">
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li><OldSchoolMenuLink to="/heading" label="Heading"/></li>
              <li><OldSchoolMenuLink to="/button" label="Button"/></li>
              <li><OldSchoolMenuLink to="/link" label="Link"/></li>
              <li><OldSchoolMenuLink to="/form" label="Form"/></li>
              <li><OldSchoolMenuLink to="/" label="All"/></li>
            </ul>
          </div>
      </div>
    )
  }
}

export default Sidebar;
