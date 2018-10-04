import React from 'react';
import Ripple from '../index';
import '../style';

const Demo = () => (
  <React.Fragment>
    <div
      style={{
        width: 100,
        height: 60,
        backgroundColor: '#108ee9',
        overflow: 'hidden',
        position: 'relative',
        margin: 20,
      }}>
      <Ripple />
    </div>
    <div
      style={{
        width: 100,
        height: 60,
        backgroundColor: '#108ee9',
        overflow: 'hidden',
        position: 'relative',
        margin: 20,
      }}>
      <Ripple color="orange" center />
    </div>
  </React.Fragment>
);

export default Demo;
