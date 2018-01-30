import React from 'react';
import {Button} from './elements/Button';
import Input from './elements/Input';
import Checkbox from './elements/Checkbox';
import Radio from './elements/Radio';
import Select from './elements/Select';
import Textarea from './elements/Textarea';

class FormList extends React.Component {
  render() {
    return(
      <div className="component-item">
        <form>
          <Input
            hasLabel='true'
            htmlFor='textInput'
            label='Text input'
            type='text'
          />
          <Input
            hasLabel='true'
            htmlFor='emailInput'
            label='Email input'
            type='email'
          />
          <Input
            hasLabel='true'
            htmlFor='numberInput'
            label='Number input'
            type='number'
            min='0.5'
            max='100'
            step='0.5'
          />
          <Select
            hasLabel='true'
            htmlFor='select'
            label='Select'
            options='one, two, three, option four, five'
          />
          <Checkbox
            hasLabel='true'
            htmlFor='checkbox'
            label='Checkbox'
          />
          <Radio
           hasLabel='true'
           htmlFor='radioOne'
           label='Radio one'
           name='radios'
           required='true'
          />
          <Radio
            hasLabel='true'
            htmlFor='radioTwo'
            label='Radio two'
            name='radios'
            required='true'
           />
           <Textarea
            hasLabel='true'
            htmlFor='textarea'
            label='Textarea'
            rows= "4"
          />
          <Button>Submit</Button>
        </form>
      </div>
    )
  }
}
export default FormList;
