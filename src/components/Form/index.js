import React from 'react'

class Form extends React.Component {

}

class Field extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    onChange() {
        
    }

    onBlur() {
        console.log('event - blur')
    }

    render() {
        return this.props.children
    }
}

export { Form, Field }
