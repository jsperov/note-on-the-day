import React from 'react'
import PropTypes from 'prop-types'
import './form.css'
import rules from './rules'

class Field extends React.Component {
    static propTypes = {
        component: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired,
    }

    static defaultProps = {
        component: <input />
    }

    static contextTypes = {
        updateFormValues: PropTypes.func.isRequired
    }

    state = {
        isValid: false,
        errors: [],
        value: ''
    }

    // field check true/false
    isValidField = value => value ? true : false

    updateFieldValues = ({isValid, errors, value}) => {
        this.setState({isValid, errors, value})
    }

    validator(value) {
        this.props.validate.forEach((condition) => {
            this.updateFieldValues(rules[condition](value))
        })
    }

    onChange = ({ target: { value } }) => {
        this.context.updateFormValues(this.props.name, value, this.validator(value, this.updateFieldValues))
    }

    removeError() {
    }

    onBlur = (event) => {
    }

    render() {
        const { isValid } = this.state
        const { children } = this.props
        const Component = this.props.component

        return (
            <Component
                onChange={this.onChange}
                className={ isValid ? '' : "js__input-error" }
                {...this.props}
            />
        )
    }
}

class Form extends React.Component {
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

    updateFormValues = (name, value, isValid) => this.setState(state => ({values: { ...state.values, [name]: { value, isValid } }, isValid: isValid}))

    render() {
        return (
            <form id="field__form">
                {this.props.children}
            </form>
        )
    }
}

export { Form }
