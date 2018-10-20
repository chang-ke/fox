import React from 'react';

class Spin extends React.PureComponent {
  render() {
    return (
      <div className="fox-spin">
        {Array(12)
          .fill(0)
          .map((_, i) => (
            <div key={i} />
          ))}
      </div>
    );
  }
}

export default Spin;
