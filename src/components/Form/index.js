import React from 'react'
import PropTypes from 'prop-types'

import { FormContext } from './FormContext'
import { Field } from './Field'

import './form.css'

class Form extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onSave: PropTypes.func
  }

  static Field = Field

  state = {
    values: {},
    isValidForm: false
  }

  setValidForm = () => {
    this.setState({
      isValidForm: !Object.values(this.state.values).some(el => el.isValid === false)
    })
  }

  updateFormValues = (name, value, isValid) =>
    this.setState(state => ({
      values: {
        ...state.values,
        [name]: {
          value,
          isValid
        }
      }
    }), this.setValidForm())

  render() {
    React.Children.forEach(this.props.children, (child) => {
      child
    })

    return ( 
      <FormContext.Provider value={{ updateFormValues: this.updateFormValues}}>
        <form {...this.props}>
          {this.props.children}
        </form>
      </FormContext.Provider>
    )
  }
}

export { Form }
