import React from 'react';
import Drawer from '..';
import Button from '../../Button';
import '../style';
import '../../Button/style';

class Demo extends React.Component {
  state = {pos: 'right', visible: false};
  render() {
    const {pos, visible} = this.state;
    return (
      <div>
        <Button onClick={() => this.setState({pos: 'right', visible: true})} />
        <Button onClick={() => this.setState({pos: 'left', visible: true})} />
        <Button onClick={() => this.setState({pos: 'top', visible: true})} />
        <Button onClick={() => this.setState({pos: 'bottom', visible: true})} />
        <Drawer placement={pos} visible={visible} onClose={() => this.setState({visible: false})}>
          <div
            style={{
              width: pos === 'top' || pos === 'bottom' ? '100%' : 200,
              height: pos === 'top' || pos === 'bottom' ? 200 : '100%',
              background: '#fff',
              boxShadow: '0 0 4px #ccc',
            }}
          />
        </Drawer>
      </div>
    );
  }
}

export default Demo;
