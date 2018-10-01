import React from 'react';
import propTypes from 'prop-types';
import {findDOMNode} from 'react-dom';
import classNames from 'classnames';

export interface RippleProps {
  className?: string;
  color?: string;
  center?: boolean;
}

interface Target extends EventTarget {
  getBoundingClientRect: Function;
}

interface EventType extends MouseEvent {
  target: Target;
}

class Ripple extends React.Component<RippleProps, {}> {
  static propType = {
    // 波纹颜色
    color: propTypes.string,
    center: propTypes.bool,
  };

  static defaultProps = {
    center: false,
  };

  private ref: any;

  classname = (className?: string) => {
    return classNames('fox-ripple', className);
  };

  click = (e: EventType) => {
    const {target, pageX, pageY} = e;
    const ref = findDOMNode(this.ref) as HTMLSpanElement;
    const rect = target.getBoundingClientRect();
    ref.classList.remove('fox-ripple-show');
    ref.style.width = ref.style.height = Math.max(rect.width, rect.height) + 'px';
    if (this.props.center) {
      ref.style.top = -Math.abs(Math.max(rect.width - rect.height)) / 2 + 'px';
      ref.style.left = Math.random() + 'px';
    } else {
      const top = pageY - rect.top - ref.offsetHeight / 2 - document.body.scrollTop;
      const left = pageX - rect.left - ref.offsetWidth / 2 - document.body.scrollLeft;
      ref.style.top = top + 'px';
      ref.style.left = left + 'px';
    }
    setTimeout(() => {
      ref.classList.add('fox-ripple-show');
    });
  };

  componentDidMount() {
    this.ref.parentNode.addEventListener('click', this.click);
  }

  componentWillUnmount() {
    this.ref.parentNode.removeEventListener('click', this.click);
  }

  render() {
    const {className, color} = this.props;
    return (
      <span
        ref={(ref: any) => (this.ref = ref)}
        style={{
          background: color,
        }}
        className={this.classname(className)}
      />
    );
  }
}

export default Ripple;
