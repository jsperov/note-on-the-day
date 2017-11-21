import React from 'react'
import FormTask from './components/FormTask/'
import ViewTasks from './components/ViewTasks/'
import './app.css'

export default class App extends React.Component {
    constructor() {
        super()
        this.state = { color: null, isActive: null }
    }

    createNewTask = (color) => {
        this.setState({ color: color, isActive: color }, () => console.log(this.state))
    }

    render() {
        return (
            <div id="app" className="container">
                <FormTask background={this.state.color} createNewTask={this.createNewTask} isActive={this.state.isActive}/>
                <ViewTasks />
            </div>
        )
    }
}

