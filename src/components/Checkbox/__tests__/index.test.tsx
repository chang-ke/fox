import React from 'react';
import {shallow, render} from 'enzyme';
import {Checkbox} from '../..';

describe('render <Checkbox/>', () => {
  it('renders correctly', () => {
    const wrapper = render(<Checkbox />);
    expect(wrapper).toMatchSnapshot();
  });

  it('test classname', () => {
    const wrapper = shallow(<Checkbox />);
    expect(wrapper.find('.fox-checkbox').length).toBe(1);
  });
});
