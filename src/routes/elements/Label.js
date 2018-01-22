import React from 'react';
import PropTypes from 'prop-types';

const defaultProps = {
  htmlFor: 'label',
  title: 'Label'
};

const Label = (props) => (
  <label
    className={props.className}
    htmlFor={props.htmlFor}></label>
);

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired
};

Label.defaultProps = defaultProps;
export default Label;
