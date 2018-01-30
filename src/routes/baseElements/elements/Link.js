import React from 'react';

import {
  Link
} from 'react-router-dom'

class Links extends React.Component {
  render() {
    return(
      <div className="component-item">
        <Link to='/'>Link default</Link>
      </div>
    )
  }
}

export default Links;
