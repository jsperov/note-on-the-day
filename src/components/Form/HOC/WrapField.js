import React from 'react'
import PropTypes from 'prop-types'

const WrapField = (Component) => {
  return class WithField extends React.Component {
    static propTypes =  {
      errors: PropTypes.array
    };
    
    render() {
      const { errors } = this.props

      return (
        <div>
          <Component {...this.props}/> 
          {errors && <div className="js__error">{errors[0]}</div>}
        </div>
      )
    }
  }
}

export default WrapField