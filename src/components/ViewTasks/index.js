import React from 'react'
import './viewTasks.css'

const Tasks = ({ task }) => <li className="viewTask__item" style={{ background: task.backgroundTask }}>{ task.description }</li>

export default class ViewTasks extends React.Component {
    render() {
        return (
            <ul className="viewTasks">
                { this.props.tasks.map( ( task, index ) => <Tasks key={ index } task={ task } />) }
            </ul>
        )
    }
}