import React from 'react'
import PropTypes from 'prop-types'
import rules from './rules'
import { uniq } from 'lodash'

import './form.css'

class Field extends React.Component {
  static propTypes =  {
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
    name: PropTypes.string,
    validate: PropTypes.array,
    children: PropTypes.node.isRequired
  };

  static defaultProps = {
    component: () => <input />,
    validate: []
  }

  static contextTypes = {
    updateFormValues: PropTypes.func.isRequired
  }

  state = {
    isValid: true,
    errors: [],
    value: ''
  }

  updateField = ({ isValid, error, value }) => {
    this.setState((prevState =>
      ({
        isValid,
        errors: !isValid ? uniq([...prevState.errors, error]) : [],
        value
      })),
      () => this.context.updateFormValues(this.props.name, value, isValid)
    )
  }

  validator(value) {
    this.props.validate.forEach(condition => {
      this.updateField(rules[condition](value))
    })
  }

  onChange = ({ target: { value } }) => {
    this.validator(value)
  }

  removeError() {
    //TODO
  }

  render() {
    const { isValid, errors } = this.state
    const Component = this.props.component

    return (
      <Component
        {...this.props} // TODO: to remove the warning
        onChange={this.onChange}
        className={isValid ? '' : 'js__input-error'}
        errors={errors}
      />
    )
  }
}

class Form extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  static childContextTypes = {
    updateFormValues: PropTypes.func.isRequired
  }

  static Field = Field

  state = {
    values: {},
    isValid: false
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
      isValid
    }))

  render() {
    return <form {...this.props}>{this.props.children}</form>
  }
}

export { Form }
