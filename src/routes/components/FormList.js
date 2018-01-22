import React from 'react';
import {Button} from '../elements/Button';
import FormGroup from '../elements/FormGroup';
import {RadioGroup, Radio} from 'react-radio-group';
import Input from '../elements/Input';
import Label from '../elements/Label';

class FormList extends React.Component {
  render() {
    return(
      <div>
        <form>
          <FormGroup>
          <Label htmlFor="exampleEmail" title="Email"/>
          <Input type="email" name="email" id="exampleEmail" placeholder="form text" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="examplePassword" title="Password"/>
            <Input type="password" name="password" id="examplePassword" placeholder="password" />
          </FormGroup>
          <FormGroup>
            <RadioGroup name="fruit">
              <Radio value="apple" />Apple
              <Radio value="orange" />Orange
              <Radio value="watermelon" />Watermelon
            </RadioGroup>
          </FormGroup>
          <Button>Submit</Button>
        </form>
      </div>
    )
  }
}
export default FormList;
