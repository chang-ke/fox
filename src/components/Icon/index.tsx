import React from 'react';

export interface IconProps {
  type?: string;
  onClick?: (e: React.MouseEvent) => void;
}

class Icon extends React.PureComponent<IconProps, {}> {
  handleClick = (e: React.MouseEvent) => {
    const {onClick} = this.props;
    if (onClick) onClick(e);
  };
  render() {
    return (
      <i
        className={`fox-icon iconfont icon-${this.props.type}`}
        onClick={this.handleClick}
      />
    );
  }
}

export default Icon;
