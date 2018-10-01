import React from 'react';
import {shallow} from 'enzyme';
import {ActionSheet} from '../..';

describe('render <ActionSheet/>', () => {
  it('test classname exits', () => {
    const wrapper = shallow(<ActionSheet />);
    expect(wrapper.find('.fox-actionsheet').length).toBe(1);
  });

  it('test active with true of props', () => {
    const wrapper = shallow(<ActionSheet active={true} />);
    expect(wrapper.find('.fox-actionsheet-active').length).toBe(1);
  });
});
