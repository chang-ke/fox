import React from 'react';
import classNames from 'classnames';
import {contain} from '../../utils/omit';

interface CheckboxProps {
  autoFocus?: boolean;
  checked?: boolean;
  disabled?: boolean;
  onChange?: Function;
  defaultChecked?: boolean;
}

interface CheckboxState {
  checked: boolean;
}

class Checkbox extends React.PureComponent<CheckboxProps, CheckboxState> {
  static defaultProps = {
    autoFocus: false,
    defaultChecked: false,
  };

  static getDerivedStateFromProps(nextProps: CheckboxProps) {
    if (nextProps.disabled !== void 0) {
      return {disabled: nextProps.disabled};
    }
    return null;
  }

  constructor(props: CheckboxProps) {
    super(props);
    this.state = {checked: !!props.defaultChecked};
  }
  handleChange = (e: any) => {
    const {onChange} = this.props;
    const {checked} = e.target;
    this.setState({
      checked: !checked,
    });
    if (onChange) onChange(e);
  };
  render() {
    const {checked} = this.state;
    return (
      <label>
        <span
          className={classNames('fox-checkbox', {
            'fox-checkbox-checked': checked,
          })}>
          <input
            type="checkbox"
            className="fox-checkbox-input"
            {...contain(this.props, ['checked', 'autoFocus', 'disabled'])}
            onChange={this.handleChange}
          />
          <span className="fox-checkbox-inner" />
        </span>
        <span>{this.props.children}</span>
      </label>
    );
  }
}
export default Checkbox;
