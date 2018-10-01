import React from 'react';

interface IconProps {
  type?: string;
  onClick?: Function;
}

class Icon extends React.PureComponent<IconProps, {}> {
  handleClick = (e: React.MouseEvent) => {
    const {onClick} = this.props;
    if (onClick) onClick(e);
  };

  render() {
    return <i className={`fox-icon icon-${this.props.type}`} onClick={this.handleClick} />;
  }
}

export default Icon;
