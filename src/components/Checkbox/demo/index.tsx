import React from 'react';
import Checkbox from '../index';
import '../style';

const Demo = () => (
  <div>
    <div>
      <Checkbox>复选框</Checkbox>
    </div>
    <div>
      <Checkbox defaultChecked>复选框</Checkbox>
    </div>
    <div>
      <Checkbox checked>复选框</Checkbox>
    </div>
    <div>
      <Checkbox disabled>复选框</Checkbox>
    </div>
  </div>
);

export default Demo;
