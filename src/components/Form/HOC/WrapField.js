import React from 'react'
import PropTypes from 'prop-types'

const WrapField = (Component) => {
  return class WithField extends React.Component {
    static propTypes =  {
      errors: PropTypes.array
    };

    
    render() {
      const { errors } = this.props
      const listErrors = errors && errors.map((err, i) => <li key={i}>{err}</li>)

      return (
        <div>
          <Component {...this.props}/>
          {errors && <div className="js__error">{listErrors}</div>}
        </div>
      )
    }
  }
}

export default WrapField