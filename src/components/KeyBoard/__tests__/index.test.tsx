import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {KeyBoard} from '../..';

describe('render <KeyBoard/>', () => {
  it('renders correctly', () => {
    const wrapper = render(<KeyBoard />);
    expect(wrapper).toMatchSnapshot();
  });

  it('test render div with classnamed .fox-kb-input', () => {
    const wrapper = shallow(<KeyBoard count={6} />);
    expect(wrapper.find('.fox-kb-dot').length).toBe(6);
  });

  it('test render props with active', () => {
    const wrapper = shallow(<KeyBoard active />);
    expect(wrapper.find('.fox-kb-active').length).toBe(1);
  });

  it('test mask click', () => {
    const Close = jest.fn();
    const wrapper = mount(<KeyBoard onClose={Close} active />);
    const div = wrapper.find('.fox-mask');
    div.simulate('click', {
      target: div,
      currentTarget: div,
    });
    //expect(Close).toBeCalled();
  });

  it('test button click', () => {
    const props = {
      onFinish: jest.fn(),
      count: 4,
      random: true,
    };
    const wrapper = mount(<KeyBoard {...props} />);

    for (let i = 0; i < 5; ++i) {
      wrapper
        .find('.fox-kb-left')
        .childAt(0)
        .simulate('click');
      wrapper.instance().setState({password: Array(i).fill(0)});
    }
    wrapper.update();
    //expect(props.onFinish).toBeCalled();
  });

  it('test close button click', () => {
    const props = {
      onClose: jest.fn(),
      count: 4,
    };
    const wrapper = mount(<KeyBoard {...props} />);
    console.log(wrapper.find('.fox-kb-left').children().length);
    wrapper
      .find('.fox-kb-left')
      .childAt(11)
      .simulate('click');
    expect(props.onClose).toBeCalled();
  });

  it('test delete button click', () => {
    const props = {
      onClose: jest.fn(),
      count: 4,
    };
    const wrapper = mount(<KeyBoard {...props} />);
    wrapper
      .find('.fox-kb-right')
      .childAt(0)
      .simulate('click');
  });
});
