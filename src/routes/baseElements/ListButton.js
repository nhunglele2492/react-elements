import React from 'react';
import {Button} from './elements/Button';

class ListButton extends React.Component {
  render() {
    return(
      <div className="component-item">
        <p><Button>Button Default</Button></p>
        <p><Button outline>Button Default Ouline</Button></p>
        <p><Button outline modifier="bg-hover">Button Default Hover Background</Button></p>
      </div>
    )
  }
}
export default ListButton;
