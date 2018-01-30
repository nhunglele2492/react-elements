import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

// SiteWide
import Sidebar from './siteWide/Sidebar';

// Pages
import Home from './pages/Home';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';

// Elements
import ListButton from './baseElements/ListButton';
import Heading from './baseElements/Heading';
import FormList from './baseElements/FormList';
import Links from './baseElements/elements/Link';

// Css
import '../Assets/css/styles.min.css';

export default () => (
  <Router>
    <div>
      <Sidebar/>
      <Route exact path="/" component={Home}/>
      <Route path="/heading" component={Heading}/>
      <Route path="/button" component={ListButton}/>
      <Route path="/link" component={Links}/>
      <Route path="/form" component={FormList}/>
      <Route path="/page1" component={Page1}/>
      <Route path="/page2" component={Page2}/>
    </div>
  </Router>
);
