import React from 'react';
import {Button} from '../elements/Button';

class ListButton extends React.Component {
  render() {
    return(
      <div>
        <p><Button>Button Default</Button></p>
        <p><Button outline>Button Default</Button></p>
        <p><Button outline modifier="bg-hover">Button Default</Button></p>
      </div>
    )
  }
}
export default ListButton;
