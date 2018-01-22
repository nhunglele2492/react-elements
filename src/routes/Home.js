import React from 'react';

import FormList from './components/FormList';
import Heading from './components/Heading';
import ListButton from './components/ListButton';

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <Heading />
        <ListButton />
        <FormList />
      </div>
    )
  }
}

export default Home;
