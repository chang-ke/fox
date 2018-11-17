import React from 'react';

class Spin extends React.PureComponent {
  render() {
    return (
      <div className="fox-spin-wapper">
        <div className="fox-spin">
          {Array(12)
            .fill(0)
            .map((_, i) => (
              <div key={i} />
            ))}
        </div>
        <div>
          <div className="fox-spin-snake" />
        </div>

        <div className="fox-spin-circle-bound">
          <div />
          <div />
          <div />
        </div>
      </div>
    );
  }
}

export default Spin;
