import React from 'react';
import {shallow, render} from 'enzyme';
import {Drawer} from '../..';

describe('render <Drawer/>', () => {
  it('renders correctly', () => {
    const wrapper = render(<Drawer />);
    expect(wrapper).toMatchSnapshot();
  });

  it('test Drawer wrapper element type', () => {
    const wrapper = shallow(<Drawer />);
    expect(wrapper.type()).toBe('div');
  });
});
