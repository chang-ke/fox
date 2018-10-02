import React from 'react';
import {shallow, render} from 'enzyme';
import {Mask} from '../..';

describe('render <Mask />', () => {
  it('renders correctly', () => {
    const wrapper = render(<Mask />);
    expect(wrapper).toMatchSnapshot();
  });

  it('test classname', () => {
    const wrapper = shallow(<Mask visible={true} />);
    expect(wrapper.hasClass('fox-mask')).toBe(true);
  });

  it('test mask click', () => {
    const click = jest.fn();
    const wrapper = shallow(<Mask onClose={click} maskClosable={true} />);
    wrapper.simulate('click', {
      target: wrapper,
      currentTarget: wrapper,
    });
    expect(click).toBeCalled();
  });

  it('test visible with undefined', () => {
    const wrapper = shallow(<Mask visible={undefined} />);
    expect(wrapper.state('visible')).toBe(true);
  });

  it('test mask children click', () => {
    const click = jest.fn();
    const wrapper = shallow(
      <Mask onClose={click} maskClosable={true}>
        <button />
      </Mask>
    );
    wrapper.simulate('click', {
      target: wrapper,
      currentTarget: wrapper.find('button'),
    });
    expect(click.mock.calls.length).toBe(0);
  });
});
