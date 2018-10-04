import React from 'react';

class CheckBox extends React.PureComponent {
  render() {
    return (
      <span className="fox-checkbox">
        <input type="checkbox" className="fox-checkbox-input" />
        <span className="fox-checkbox-inner" />
      </span>
    );
  }
}
export default CheckBox;
