import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
//import Ripple from '../Ripple';

type EventType = React.MouseEvent<HTMLDivElement> | React.MouseEvent<HTMLButtonElement>;

export interface ButtonProps {
  disabled?: boolean;
  type?: string;
  className?: string;
  onClick?: Function;
}

class Button extends React.Component<ButtonProps, {}> {
  static propTypes = {
    type: propTypes.oneOf(['primary']),
    disabled: propTypes.bool,
    onClick: propTypes.func,
  };

  classname = (classnames?: string) => {
    const {disabled, type, className} = this.props;
    return classNames('fox-button', 'fox-ripple', className, classnames, {
      'fox-button-disable': disabled,
      'fox-button-primary': type === 'primary',
    });
  };

  handleClick = (e: EventType) => {
    const {onClick} = this.props;
    if (onClick) onClick(e);
  };

  render() {
    return (
      <div>
        <button className={this.classname()} onClick={this.handleClick}>
          {this.props.children}
          {
            //<Ripple />
          }
        </button>
      </div>
    );
  }
}

export default Button;
