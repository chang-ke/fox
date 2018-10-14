import * as React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';
import Mask from '../Mask';

export interface KeyBoardProps {
  // 是否激活键盘
  active: boolean;
  // 标题
  title?: string;
  // 点击关闭按钮时触发
  onClose?: Function;
  // 输入完成时触发
  onFinish?: Function;
  // 密码位数
  count?: number;
  // 类名
  className?: string;
  // 随机键盘
  random?: boolean;
}

export interface KeyBoardState {
  password: Array<number>;
  active: boolean;
}

class KeyBoard extends React.Component<KeyBoardProps, KeyBoardState> {
  static propTypes = {
    // 是否激活键盘
    active: propTypes.bool,
    // 标题
    title: propTypes.string,
    // 点击关闭按钮时触发
    onClose: propTypes.func,
    // 输入完成时触发
    onFinish: propTypes.func,
    // 类名
    className: propTypes.string,
    // 随机键盘
    random: propTypes.bool,
    // 密码位数
    count: propTypes.number,
  };

  static defaultProps = {
    active: false,
    count: 4,
    autoFinish: false,
  };

  static getDerivedStateFromProps(
    {active}: KeyBoardProps,
    nextState: KeyBoardState
  ) {
    const state = {...nextState};
    if (active !== nextState.active) state.active = active;
    if (!active) state.password = [];

    return state;
  }

  private numbers: Array<number | string> = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor(props: KeyBoardProps) {
    super(props);
    this.state = {password: [], active: false};
    if (props.random) {
      this.numbers.sort(() => Math.random() - 0.5);
    }
    this.numbers.push('.', 0);
  }

  classname = (field?: Object) => {
    const {className} = this.props;
    return classnames('fox-kb', className, field);
  };

  renderPasswordDot = () => {
    const {password} = this.state;
    const {count}: any = this.props;
    const dots = [];
    for (let i = 0; i < count; ++i) {
      dots.push(
        <div className="fox-kb-dot" key={i}>
          {i < password.length && <div key={'dot' + i} />}
        </div>
      );
    }
    return dots;
  };

  renderNumberSpan = () => {
    const numberSpan = this.numbers.map((v: number | string) => {
      return (
        <span onClick={this.handleClick.bind(this, v)} key={`btn${v}`}>
          {v}
        </span>
      );
    });
    numberSpan.push(
      <span onClick={this.handleCancel} key={`btn cancel`}>
        取消
      </span>
    );
    return numberSpan;
  };

  handleClick = (num: number) => {
    const {password} = this.state;
    const {count}: any = this.props;
    const {onFinish} = this.props;

    if (password.length < count) {
      this.setState({password: [...password, num]});
      if (password.length === count - 1) {
        setTimeout(() => {
          if (onFinish) onFinish([...password, num]);
        }, 100);
      }
    }
  };

  handleCancel = () => {
    const {onClose} = this.props;
    if (onClose) onClose();
  };

  handleDelete = () => {
    const {password} = this.state;
    if (password.length > 0) {
      this.setState({password: password.slice(0, -1)});
    }
  };

  render() {
    const {active} = this.state;
    const {title, onClose} = this.props;

    return (
      <React.Fragment>
        <Mask visible={active} maskClosable onClose={onClose} />
        <div
          className={this.classname({
            'fox-kb-active': active,
          })}>
          <div className="fox-kb-title">{title}</div>
          <div className="fox-kb-dot-wrapper">{this.renderPasswordDot()}</div>
          <div className="fox-kb-btn-wrapper">
            <div className="fox-kb-left"> {this.renderNumberSpan()}</div>
            <div className="fox-kb-right">
              <span onClick={this.handleDelete} key="delete">
                删除
              </span>
              <span onClick={this.handleDelete} key="confirm">
                确定
              </span>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default KeyBoard;
