import React from 'react';
import Label from './Label';

// Create component for select input
class Select extends React.Component {
 render() {
  // Get all options from option prop
  const selectOptions = this.props.options.split(', ');

  // Generate list of options
  const selectOptionsList = selectOptions.map((selectOption, index) => {
   return <option key={index} value={selectOption}>{selectOption}</option>
  });

  return (
   <div className="form-item form-type-select">
    <Label
      hasLabel={this.props.hasLabel}
      htmlFor={this.props.htmlFor}
      label={this.props.label}
    />
    <select
      defaultValue=''
      id={this.props.htmlFor}
      name={this.props.name || null}
      onChange={this.props.onChange}
    >
      <option value='' disabled>Select one option</option>

      {selectOptionsList}
    </select>
   </div>
  )
 }
}

export default Select;
