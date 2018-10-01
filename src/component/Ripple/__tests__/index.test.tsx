import React from 'react';
import {shallow, mount} from 'enzyme';
import {Ripple} from '../..';

describe('render <Ripple/>', () => {
  it('test classname exits', () => {
    const wrapper = mount(
      <div>
        <Ripple />
      </div>
    );
    expect(wrapper.find('span').hasClass('fox-ripple')).toBe(true);
  });

  it('test className with true of props', () => {
    const wrapper = mount(
      <div>
        <Ripple className="test" />
      </div>
    );
    expect(wrapper.find('span').hasClass('test')).toBe(true);
  });

  it('test unmount', () => {
    const wrapper = mount(
      <div>
        <Ripple />
      </div>
    );
    wrapper.unmount();
  });

  it('test click', () => {
    const wrapper = shallow(
      <button>
        <Ripple />
      </button>
    );
    wrapper.simulate('click', {
      target: wrapper,
      pageX: 10,
      pageY: 30,
    });
    wrapper.update();
  });

  it('test noParentNode with throwTypeError', () => {
    expect(() => {
      shallow(<Ripple />);
    }).toThrow();
  });
});
