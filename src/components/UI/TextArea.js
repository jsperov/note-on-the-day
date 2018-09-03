import React from 'react';
import { Input } from 'antd';

class _TextArea extends React.PureComponent {
  static defaultProps = {
    maxlength: 150,
    placeholder: '...',
  }

  state = {
    value: '',
  };

  render() {
    const { maxlength, placeholder, ...rest } = this.props;

    return (
      <Input.TextArea
        maxLength={maxlength}
        placeholder={placeholder}
        {...rest}
      />
    );
  }
}

export { _TextArea as TextArea };
