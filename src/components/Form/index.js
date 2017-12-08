import React from 'react'
import PropTypes from 'prop-types'
import './form.css'

class Form extends React.Component {
    static childContextTypes = {
        errors: PropTypes.string
    }

    getChildContext() {
        return {
            errors: 'required!'
        }
    }

    render() {
        return (
            <form id="field__form">
                {this.props.children}
            </form>
        )
    }
}

class Field extends React.Component {
    constructor() {
        super()
        this.state = {
            errors: []
        }
    }

    static contextTypes = {
        errors: PropTypes.string
    }

    onChange() {
        
    }

    removeError() {
        console.log('delete errors')
    }

    onBlur() {
        console.log('event - blur')
    }

    render() {
        return (
            <div>
                {this.props.children}
                <span className="js__error">{this.context.errors}</span>
            </div>
        )
    }
}

export { Form, Field }
