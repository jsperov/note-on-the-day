import React from 'react'
import FormTask from './components/FormTask/'
import ViewTasks from './components/ViewTasks/'
import './app.css'

export default class App extends React.Component {
    constructor() {
        super()
        this.state = { 
            color: null, 
            isActive: null,
            tasks: []
         }
    }

    addTask = event => {
        event.preventDefault()

        let taskField = event.target.parentNode.querySelector('.formTask__field')
        
        if(!taskField.value) return

        this.state.tasks.push({
            description: taskField.value,
            backgroundTask: this.state.color
        })

        this.setState({
            tasks: this.state.tasks,
        })
        
        taskField.value = ''
    }

    createNewTask = (color) => {
        this.setState({ color: color, isActive: color }, () => console.log(this.state))
    }

    render() {
        return (
            <div id="app" className="container">
                <h1>Tasks for the day</h1>
                <FormTask background={ this.state.color } createNewTask={ this.createNewTask } isActive={ this.state.isActive } addTask={ this.addTask }/>
                <ViewTasks tasks={ this.state.tasks } />
            </div>
        )
    }
}

