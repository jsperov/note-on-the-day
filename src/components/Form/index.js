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
        console.log('e')
        this.context.updateFormValues(this.props.name, value, this.validator(value, this.updateFieldValues))
    }

    removeError() {
        //TODO
    }

    onBlur = (event) => {
        //TODO
    }

    render() {
        const { isValid } = this.state
<<<<<<< HEAD
<<<<<<< HEAD
        const { children, name } = this.props
        const Component = this.props.component
        const childrens = React.Children.map(children, child => React.cloneElement(child))

        return (
            <div>
                <Component
                    onChange={ this.onChange }
                    name={ name }
                    className={ isValid ? '' : 'js__input-error' }
                    { ...this.props }
                />
                {childrens}
                <span className="js__error">{this.context.errors}</span>
            </div>
=======
        const { children } = this.props
        const Component = this.props.component

        return (
=======
        const { children } = this.props
        const Component = this.props.component

        return (
>>>>>>> 4e72100c355eff7eff08bce2c3ba02a9ff6cd149
            <Component
                onChange={this.onChange}
                className={ isValid ? '' : "js__input-error" }
                {...this.props}
            />
<<<<<<< HEAD
>>>>>>> 4e72100c355eff7eff08bce2c3ba02a9ff6cd149
=======
>>>>>>> 4e72100c355eff7eff08bce2c3ba02a9ff6cd149
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
