import React from 'react';

class Checkbox extends React.Component {
 render() {
  return (
    <div className="form-item form-type-checkbox">
      <label
        htmlFor={this.props.htmlFor}
        label={this.props.label}
      >
        <input
          id={this.props.htmlFor}
          name={this.props.name || null}
          type='checkbox'
         />
        {this.props.label}
      </label>
    </div>
  )
 }
}

export default Checkbox;
