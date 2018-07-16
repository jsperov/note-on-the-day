import React from 'react'
import PropTypes from 'prop-types'

import { Field } from './Field'

import './form.css'

class Form extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onSave: PropTypes.func
  }

  static childContextTypes = {
    updateFormValues: PropTypes.func.isRequired
  }

  static Field = Field

  state = {
    values: {},
    isValidForm: false
  }

  getChildContext() {
    return {
      updateFormValues: this.updateFormValues
    }
  }

  updateFormValues = (name, value, isValid) =>
    this.setState(state => ({
      values: {
        ...state.values,
        [name]: {
          value,
          isValid
        }
      },
      isValidForm: true
    }))

  render() {
    React.Children.forEach(this.props.children, (child) => {
      child
    })

    return <form {...this.props}>{this.props.children}</form>
  }
}

export { Form }
