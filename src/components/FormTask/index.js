import React from 'react'
import {} from './formTask.css'
import SelectColor from './SelectColor'

export default class FormTask extends React.Component {
    render() {
        return (
            <form className="formTask">
                <textarea style={{ background: this.props.background }} className="formTask__field" placeholder="enter your task here..."></textarea>
                <SelectColor createNewTask={ this.props.createNewTask } isActive={ this.props.isActive }/>
                <button className="formTask__button">add task</button>
            </form>
        )
    }
}