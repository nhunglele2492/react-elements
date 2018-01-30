import React from 'react';
import Label from './Label';

// Create component for textarea
class Textarea extends React.Component {
  render() {
    return (
      <div className="form-item form-type-textarea">
        <Label
          hasLabel={this.props.hasLabel}
          htmlFor={this.props.htmlFor}
          label={this.props.label}
        />
        <textarea
          className={this.props.className || 'form-textarea'}
          cols={this.props.cols || null}
          id={this.props.htmlFor}
          name={this.props.name || null}
          rows={this.props.rows || null}
        />
      </div>
    )
  }
}

export default Textarea;
