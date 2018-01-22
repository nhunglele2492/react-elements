import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Header from './sitewide/Header';

import Page1 from './pages/Page1';
import Page2 from './pages/Page2';

import ListButton from './components/ListButton';
import Heading from './components/Heading';
import FormList from './components/FormList';

import Home from './Home';

import '../Assets/css/styles.min.css';

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
      <div className="sidebar-list" ref={node => { this.node = node; }}>
        <div onClick={this.handleClick} className={"sidebar-list__button "+ classClick}>Button</div>
        {this.state.popupVisible && (
          <div className={"sidebar-list__list "+ classClick}>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li><OldSchoolMenuLink to="/button" label="Button"/></li>
              <li><OldSchoolMenuLink to="/heading" label="Heading"/></li>
              <li><OldSchoolMenuLink to="/form" label="Form"/></li>
              <li><OldSchoolMenuLink to="/" label="All"/></li>
            </ul>
          </div>
        )}
      </div>
    )
  }
}

const OldSchoolMenuLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
    <div className={match ? 'active' : ''}>
      <Link to={to}>{label}</Link>
    </div>
  )}/>
)

export default () => (
  <Router>
    <div>
      <Header/>
      <Sidebar/>
      <Route exact path="/" component={Home}/>
      <Route path="/button" component={ListButton}/>
      <Route path="/heading" component={Heading}/>
      <Route path="/form" component={FormList}/>
      <Route path="/page1" component={Page1}/>
      <Route path="/page2" component={Page2}/>
    </div>
  </Router>
);
