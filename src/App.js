import React from 'react'
import FormTask from './components/FormTask/'
import {} from './app.css'

export default class App extends React.Component {
    render() {
        return (
            <div id="app" className="container">
                <FormTask/>
            </div>
        )
    }
}