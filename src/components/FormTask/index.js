import React from 'react'
import PropTypes from 'prop-types'
import {} from './formTask.css'
import SelectColor from './SelectColor'


export class FormTask extends React.Component {
    render() {
        return (
            <form className="formTask">
                <textarea className="formTask__field" style={{ background: this.props.background }} placeholder="enter your task here..."></textarea>
                <SelectColor createNewTask={ this.props.createNewTask } isActive={ this.props.isActive }/>
                <button className="formTask__button" onClick={this.props.addTask}>add task</button>
            </form>
        )
    }
}

FormTask.propTypes = {
    createNewTask: PropTypes.func,
    isActive: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
}