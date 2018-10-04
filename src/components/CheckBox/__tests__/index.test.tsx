import React from 'react';
import {shallow, render} from 'enzyme';
import {CheckBox} from '../..';

describe('render <CheckBox/>', () => {
  it('renders correctly', () => {
    const wrapper = render(<CheckBox />);
    expect(wrapper).toMatchSnapshot();
  });

  it('test classname', () => {
    const wrapper = shallow(<CheckBox />);
    expect(wrapper.find('.fox-checkbox').length).toBe(1);
  });
});
