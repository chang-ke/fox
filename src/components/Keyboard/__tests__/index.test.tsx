import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {Keyboard} from '../..';

describe('render <Keyboard/>', () => {
  it('renders correctly', () => {
    const wrapper = render(<Keyboard />);
    expect(wrapper).toMatchSnapshot();
  });

  it('test render div with classnamed .fox-kb-input', () => {
    const wrapper = shallow(<Keyboard count={6} />);
    expect(wrapper.find('.fox-kb-dot').length).toBe(6);
  });

  it('test render props with active', () => {
    const wrapper = shallow(<Keyboard active />);
    expect(wrapper.find('.fox-kb-active').length).toBe(1);
  });

  it('test mask click', () => {
    const Close = jest.fn();
    const wrapper = mount(<Keyboard onClose={Close} active />);
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
    const wrapper = mount(<Keyboard {...props} />);

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
    const wrapper = mount(<Keyboard {...props} />);
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
    const wrapper = mount(<Keyboard {...props} />);
    wrapper
      .find('.fox-kb-right')
      .childAt(0)
      .simulate('click');
  });
});
