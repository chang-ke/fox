import React from 'react';
import Button from '..';
import '../style';
//import "../../Ripple/style"

const Demo = () => (
  <React.Fragment>
    <div style={{margin: 20}}>
      <Button />
    </div>

    <div style={{margin: 20}}>
      <Button type="primary" />
    </div>
  </React.Fragment>
);

export default Demo;
