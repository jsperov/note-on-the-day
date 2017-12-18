import React from 'react'
import PropTypes from 'prop-types'
import './form.css'
import rules from './rules'

class Field extends React.Component {
    state = {
        isValid: false,
        errors: [],
        value: ''
    }

    static contextTypes = {
        updateFormValues: PropTypes.func.isRequired
    }

    // field check true/false
    isValidField = value => value ? true : false

    updateFieldValues = ({isValid, errors, value}) => {
        this.setState({isValid, errors, value})
        console.log(this.isValidField(isValid))
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
        console.log('delete errors')
    }

    onBlur() {
        console.log('event - blur')
    }

    render() {
        const childrens = React.Children.map(this.props.children, child => {
            return React.cloneElement(child, { onChange:this.onChange, name: this.props.name })
        })

        return (
            <div>
                {childrens}
                <span className="js__error">{this.context.errors}</span>
            </div>
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

    updateFormValues = (name, value, isValid) => this.setState(state => ({values: { ...state.values, [name]: { value, isValid } }, isValid: true}))

    render() {
        return (
            <form id="field__form">
                {this.props.children}
            </form>
        )
    }
}

export { Form }
