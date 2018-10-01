import React from 'react';
import {shallow} from 'enzyme';
import {Drawer} from '../..';

describe('render <Drawer/>', () => {
  it('test Drawer wrapper element type', () => {
    const wrapper = shallow(<Drawer />);
    expect(wrapper.type()).toBe('div');
  });
});
