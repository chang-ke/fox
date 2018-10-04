import React from 'react';
import propTypes from 'prop-types';
import {omit} from '../../utils/omit';
import classNames from 'classnames';

type FocusEvent = React.FocusEvent<HTMLInputElement>;

export interface InputItemProps {
  disabled?: boolean;
  size?: string;
  className?: string;
  onFocus?: Function;
  onBlur?: Function;
  value?: string | null;
  defaultValue?: number;
  addonBefore?: React.ReactNode;
  addonAfter?: React.ReactNode;
  onChange?: Function;
  readOnly?: boolean;
}

class InputItem extends React.Component<InputItemProps, {}> {
  static propTypes = {
    // 自动获取焦点
    autoFocus: propTypes.bool,
    // 输入框控件大小
    size: propTypes.oneOf(['small', 'middle', 'large']),
    // 是否禁用input
    disabled: propTypes.bool,
    // 输入框内容
    value: propTypes.oneOfType([propTypes.number, propTypes.string]),
    // 输入框默认内容
    defaultValue: propTypes.oneOfType([propTypes.number, propTypes.string]),
    // 输入框的提示内容
    placeholder: propTypes.oneOfType([propTypes.number, propTypes.string]),
    //前缀
    addonBefore: propTypes.element,
    //后缀
    addonAfter: propTypes.element,
  };

  static defaultProps = {
    size: 'middle',
    disabled: false,
    onFocus: () => {},
  };

  state = {focus: false};

  fixValue(value: any) {
    if (typeof value === 'undefined' || value === null) {
      return '';
    }
    return value;
  }

  classname = (classnames?: string) => {
    const {disabled, size, className} = this.props;
    return classNames('fox-input', className, classnames, {
      'fox-input-disable': disabled,
      'fox-input-lg': size === 'large',
      'fox-input-sm': size === 'small',
    });
  };

  handleFoucs = (e: FocusEvent) => {
    this.setState({focus: true});
    const {onFocus} = this.props;
    if (onFocus) onFocus(e);
  };

  handleBlur = (e: FocusEvent) => {
    this.setState({focus: false});
    const {onBlur} = this.props;
    if (onBlur) onBlur(e);
  };

  render() {
    const {focus} = this.state;
    const {addonBefore, ...otherProps} = this.props;
    if ('value' in this.props) {
      otherProps.value = this.fixValue(otherProps.value);
      delete otherProps.defaultValue;
    }
    return (
      <label>
        <div>
          <span className="fox-input-addon-wrapper">
            {addonBefore}
            <div className="fox-input-wrapper">
              <span className="fox-input-fix-wrapper">
                <input
                  className={this.classname()}
                  {...omit(otherProps, ['children', 'size', 'className'])}
                  onFocus={this.handleFoucs}
                  onBlur={this.handleBlur}
                />
              </span>
              <div
                className={classNames('fox-input-outline', {
                  'fox-input-outline-focus': focus,
                })}
              />
            </div>
            {addonBefore}
          </span>
        </div>
      </label>
    );
  }
}

export default InputItem;
