import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Header from './sitewide/Header';

import ListButton from './components/ListButton';
import Heading from './components/Heading';

import Home from './Home';

import '../Assets/css/styles.min.css';

class Sidebar extends React.Component {
  constructor(props) {
    super();
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    let classClick = this.state.isToggleOn ? '' : 'open';
    return(
      <div className="sidebar-list">
        <div onClick={this.handleClick} className={"sidebar-list__button "+ classClick}>Button</div>
        <div className={"sidebar-list__list "+ classClick}>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li><OldSchoolMenuLink to="/button" label="Button"/></li>
            <li><OldSchoolMenuLink to="/heading" label="Heading"/></li>
          </ul>
        </div>
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
    </div>
  </Router>
);
