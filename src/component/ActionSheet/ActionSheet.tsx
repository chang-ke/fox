import React from 'react';
import classNames from 'classnames';
import Mask from '../Mask';

export interface ActionSheetProps {
  active: boolean;
}

class ActionSheet extends React.Component<ActionSheetProps, {}> {
  static defaultProps = {
    active: false,
  };

  render() {
    const {active} = this.props;
    return (
      <React.Fragment>
        <Mask />
        <div
          className={classNames('fox-actionsheet', {
            'fox-actionsheet-active': active,
          })}
        >
          {this.props.children}
        </div>
      </React.Fragment>
    );
  }
}

export default ActionSheet;
