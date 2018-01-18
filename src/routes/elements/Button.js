import React,{Component} from 'react';
import classNames from 'classnames';
import { mapToCssModules } from '../variables';

const defaultProps = {
  className: '',
  tag: 'button',
};

export class Button extends Component {
  render() {
    let {
      className,
      outline,
      modifier,
      tag: Tag,
      innerRef,
      ...attributes
    } = this.props;

    const classes = mapToCssModules(classNames(
      'btn',
      `btn${outline ? '--outline' : ''}${modifier ? `-${modifier}` : ''}`,
      className ? `btn--${className}` : false,
    ));

    if (attributes.href && Tag === 'button') {
      Tag = 'a';
    }

    return (
      <Tag
        {...attributes}
        className={classes}
        ref={innerRef}
      />
    );
  }
}

Button.defaultProps = defaultProps;
