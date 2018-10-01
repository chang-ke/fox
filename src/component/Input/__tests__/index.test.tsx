import React from 'react';
import {shallow, mount} from 'enzyme';
import {Input} from '../..';

describe('render <Input/>', () => {
  it('test classname exits', () => {
    const wrapper = shallow(<Input />);
    expect(
      wrapper
        .find('input')
        .at(0)
        .hasClass('fox-input')
    ).toBe(true);
  });

  it('test disabled with true of props', () => {
    const wrapper = shallow(<Input disabled={true} />);
    expect(
      wrapper
        .find('input')
        .at(0)
        .hasClass('fox-input-disable')
    ).toBe(true);
  });

  it('test size with large of props', () => {
    const wrapper = shallow(<Input size="large" />);
    expect(
      wrapper
        .find('input')
        .at(0)
        .hasClass('fox-input-lg')
    ).toBe(true);
  });

  it('test value with null', () => {
    const wrapper = mount(<Input value={null} readOnly />);
    expect(
      wrapper
        .find('input')
        .at(0)
        .getDOMNode()
        .getAttribute('value')
    ).toBe('');
  });

  it('test value with "testvalue"', () => {
    const wrapper = mount(<Input value="testvalue" onChange={jest.fn()} />);
    expect(
      wrapper
        .find('input')
        .at(0)
        .getDOMNode()
        .getAttribute('value')
    ).toBe('testvalue');
  });

  it('test focus', () => {
    const wrapper = shallow(<Input />);
    wrapper
      .find('input')
      .at(0)
      .simulate('focus');
    expect(wrapper.state('focus')).toBe(true);
  });

  it('test blur', () => {
    const Blur = jest.fn();
    const wrapper = shallow(<Input onBlur={Blur} />);
    wrapper
      .find('input')
      .at(0)
      .simulate('blur');
    expect(Blur).toBeCalled();
  });
});
