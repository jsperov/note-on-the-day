import React from 'react'
import PropTypes from 'prop-types'
import './form.css'

class Field extends React.Component {
    state = {
        isValid: false,
        errors: [''],
        value: ''
    }

    static contextTypes = {
        updateFormValues: PropTypes.func.isRequired
    }

    isValid(value) {
        this.props.validate.forEach((elem) => {
            console.log(elem, value)
        })
        return true
    }

    onChange = ({ target: { value } }) => {
        console.log(this.props)
        this.context.updateFormValues(this.props.name, value, this.isValid(value))
    }

    removeError() {
        console.log('delete errors')
    }

    onBlur() {
        console.log('event - blur')
    }

    render() {
        const childrens = React.Children.map(this.props.children, child => {
            return React.cloneElement(child, { onChange:this.onChange, onBlur:this.onBlur, name: this.props.name })
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

    updateFormValues = (name, value, isValid) => this.setState(state => ({values: { ...state.values, [name]: { value, isValid } }}))

    render() {
        return (
            <form id="field__form">
                {this.props.children}
            </form>
        )
    }
}

export { Form }
