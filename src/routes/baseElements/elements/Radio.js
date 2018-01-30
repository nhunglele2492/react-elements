import React from 'react';

// Create component for radio input
class Radio extends React.Component {
  render() {
    return (
      <div className="form-item form-type-radio">
        <label
        htmlFor={this.props.htmlFor}
        label={this.props.label}
        >
          <input
          id={this.props.htmlFor}
          name={this.props.name || null}
          type='radio'
          />
        {this.props.label}
        </label>
      </div>
    )
  }
}

export default Radio;
