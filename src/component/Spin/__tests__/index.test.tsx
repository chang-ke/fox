import React from 'react';
import {shallow} from 'enzyme';
import {Spin} from '../../';

describe('render <Spin/>', () => {
  it('test classname exits', () => {
    const wrapper = shallow(<Spin />);
    expect(wrapper.hasClass('fox-spin')).toBe(true);
  });
});
