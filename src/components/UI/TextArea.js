import React from 'react';
import { Input } from 'antd';

class _TextArea extends React.Component {
  static defaultProps = {
    maxlength: 15,
    placeholder: '...',
  }

  constructor() {
    super();
    this.state = { value: '' };
    this.myRef = React.createRef();
  }

  onChange = (event) => {
    this.setState({ value: event.target.value });
  }

  render() {
    const {
      maxlength,
      placeholder,
      resize,
      ...rest
    } = this.props;

    return (
      <Input.TextArea
        maxLength={maxlength}
        placeholder={placeholder}
        onChange={event => this.onChange(event)}
        value={this.state.value}
        ref={this.myRef}
        {...rest}
      />
    );
  }
}

export { _TextArea as TextArea };
