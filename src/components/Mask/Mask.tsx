import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';

type ClickEventType = React.MouseEvent<HTMLDivElement> | React.MouseEvent<HTMLButtonElement>;

export interface MaskProps {
  visible?: boolean;
  maskClosable?: boolean;
  onClose?: Function;
}

export interface MaskState {
  visible: boolean;
}

class Mask extends React.Component<MaskProps, MaskState> {
  static propTypes = {
    // 点击蒙层是否允许关闭
    maskClosable: propTypes.bool,
    // 关闭时的回调
    onClose: propTypes.func,
  };

  static defaultProps = {
    maskClosable: false,
    visible: true,
  };

  static getDerivedStateFromProps({visible}: MaskProps) {
    if (visible !== void 0) {
      return {visible};
    }
    return null;
  }

  constructor(props: MaskProps) {
    super(props);
    this.state = {visible: true};
  }

  onMaskClick = (e: ClickEventType) => {
    const {maskClosable, onClose} = this.props;
    if (e.target === e.currentTarget && maskClosable) {
      if (onClose) onClose();
    }
  };

  render() {
    const {visible} = this.state;
    return (
      <div
        className={classnames('fox-mask', {
          'fox-mask-open': visible,
          'fox-mask-close': !visible,
        })}
        onClick={this.onMaskClick}
      />
    );
  }
}

export default Mask;
