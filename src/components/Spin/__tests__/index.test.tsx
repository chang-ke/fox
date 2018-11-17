import React from 'react';
import {shallow, render} from 'enzyme';
import {Spin} from '../../';

describe('render <Spin/>', () => {
  it('renders correctly', () => {
    const wrapper = render(<Spin />);
    expect(wrapper).toMatchSnapshot();
  });

  it('test wapper classname exits', () => {
    const wrapper = shallow(<Spin />);
    expect(wrapper.hasClass('fox-spin-wapper')).toBe(true);
  });

  it('test classname exits', () => {
    const wrapper = shallow(<Spin />);
    expect(wrapper.childAt(0).hasClass('fox-spin')).toBe(true);
  });
});
