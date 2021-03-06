import React from 'react';
import PropTypes from 'prop-types';

const WithField = (Component) => {
  class _WithField extends React.PureComponent {
    static propTypes = {
      errors: PropTypes.array,
    };

    render() {
      const { errors } = this.props;
      const listErrors =
        errors && errors.map(err => <li key={err}>{err}</li>);

      return (
        <div>
          <Component {...this.props} />
          {errors && <div className="js__error">{listErrors}</div>}
        </div>
      );
    }
  }

  return _WithField;
};

export { WithField };
