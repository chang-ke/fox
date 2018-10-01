import React from 'react';
import {shallow} from 'enzyme';
import {Icon} from '../..';

describe('render <Icon/>', () => {
  it('test classname exits', () => {
    const wrapper = shallow(<Icon />);
    expect(wrapper.find('.fox-icon').length).toBe(1);
  });

  it('test click',()=>{
    const Click = jest.fn();
    const wrapper = shallow(<Icon onClick={Click}/>);
    wrapper.simulate('click')
    expect(Click).toBeCalled();
  })
});
