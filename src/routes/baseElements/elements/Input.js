import React from 'react';
import Label from './Label';

// Create component for input
class Input extends React.Component {
 render() {
  return (
    <div className="form-item form-type-textfield">
      <Label
        hasLabel={this.props.hasLabel}
        htmlFor={this.props.htmlFor}
        label={this.props.label}
      />
      <input
        id={this.props.htmlFor}
        className={this.props.className || 'form-text'}
        max={this.props.max || null}
        min={this.props.min || null}
        name={this.props.name || null}
        placeholder={this.props.placeholder || null}
        step={this.props.step || null}
        type={this.props.type || 'text'}
        onChange={this.props.onChange}
      />
      </div>
    )
  }
}

export default Input;
