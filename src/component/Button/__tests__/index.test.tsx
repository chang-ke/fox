import React from 'react';
import {shallow} from 'enzyme';
import {Button} from '../..';

describe('render <Button/>', () => {
  it('test button exits', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find('button').length).toBe(1);
  });

  it('test classname exits', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find('button').hasClass('fox-button')).toBe(true);
  });

  it('test disabled with true of props', () => {
    const wrapper = shallow(<Button disabled={true} />);
    expect(wrapper.find('button').hasClass('fox-button-disable')).toBe(true);
  });

  it('test button click', () => {
    const Click = jest.fn();
    const wrapper = shallow(<Button onClick={Click} />);
    wrapper.find('button').simulate('click');
    expect(Click).toBeCalled();
  });
});
