import React from 'react';
import PropTypes from 'prop-types';

const defaultProps = {
  htmlFor: 'label',
  title: 'Label'
};

class Label extends React.Component {
  render() {
    return (
      <label htmlFor={this.props.htmlFor}>{this.props.label}</label>
    )
  }
}

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired
};

Label.defaultProps = defaultProps;
export default Label;
