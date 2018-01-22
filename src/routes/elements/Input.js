import React from 'react';
import PropTypes from 'prop-types';

import { deprecated } from '../variables';

const defaultProps = {
  className: 'form-text',
  type: 'text'
}


class Input extends React.Component {
  render() {
    let {
      state,
      valid,
      ...attributes
    } = this.props;

    // const checkInput = ['radio', 'checkbox'].indexOf(type) > -1;

    if (state && typeof valid === 'undefined') {
      if (state === 'danger') {
        valid = false;
      } else if (state === 'success') {
        valid = true;
      }
    }

    return (
      <input {...attributes}
        id={this.props.id}
        className={this.props.className}
        name={this.props.name}
        type={this.props.type}
        value={this.props.value}
        onChange={this.props.handleonChange}
        placeholder={this.props.placeholder} />
    )
  }
}

Input.defaultProps = defaultProps;
export default Input;

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'select','checkbox', 'radio', 'textarea', 'email', 'password']).isRequired,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  handleonChange: PropTypes.func,
  state: deprecated(PropTypes.string, 'Please use the prop "valid"'),
  valid: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  placeholder: PropTypes.string,
};
