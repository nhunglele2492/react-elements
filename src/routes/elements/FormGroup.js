import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from '../variables';

const defaultProps = {
  tag: 'div',
};

const propTypes = {
  row: PropTypes.bool,
  check: PropTypes.bool,
  inline: PropTypes.bool,
  disabled: PropTypes.bool,
  tag: PropTypes.string,
  className: PropTypes.string,
};

const FormGroup = (props) => {
  const {
    className,
    cssModule,
    row,
    disabled,
    check,
    inline,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    row ? 'form-inline' : false,
    check ? 'form-check' : 'form-item',
    check && inline ? 'form-check-inline' : false,
    check && disabled ? 'disabled' : false
  ));

  return (
    <Tag {...attributes} className={classes} />
  );
};

FormGroup.propTypes = propTypes;
FormGroup.defaultProps = defaultProps;

export default FormGroup;
