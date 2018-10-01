import React from 'react';
import Input from '..';
import Icon from '../../Icon';
import '../style';
import '../../Icon/style';

const Demo = () => (
  <React.Fragment>
    <div style={{margin: 20}}>
      <Input addonBefore={<Icon type="audio" />} placeholder="输入框" />
    </div>
    <div style={{margin: 20}}>
      <Input placeholder="禁用输入框" disabled />
    </div>
    <div style={{margin: 20}}>
      <Input placeholder="自动获取焦点" autoFocus />
    </div>
  </React.Fragment>
);

export default Demo;
