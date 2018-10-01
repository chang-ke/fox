import React from 'react';
import {shallow} from 'enzyme';
import {Icon} from '../..';

describe('render <Icon/>', () => {
  it('test classname exits', () => {
    const wrapper = shallow(<Icon />);
    expect(wrapper.find('.fox-icon').length).toBe(1);
  });
});
