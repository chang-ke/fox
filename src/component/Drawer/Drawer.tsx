import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import Mask from '../Mask';

export interface DrawerProps {
  placement?: string;
  visible?: boolean;
  className?: string;
  onClose?: Function;
}

class Drawer extends React.Component<DrawerProps, {}> {
  static propType = {
    visible: propTypes.bool,
    onClose: propTypes.func,
    placement: propTypes.oneOf(['left', 'right', 'top', 'bottom']),
  };

  static defaultProps = {
    placement: 'right',
    visible: true,
  };

  classname = (className?: string) => {
    const {placement, visible} = this.props;
    return classNames('fox-drawer', className, `fox-drawer-${placement}`, {
      [`fox-drawer-${placement}-open`]: visible,
    });
  };

  render() {
    const {className, children, visible, onClose} = this.props;
    return (
      <div>
        <Mask visible={visible} maskClosable onClose={onClose} />
        <div className={this.classname(className)}>{children}</div>
      </div>
    );
  }
}

export default Drawer;
