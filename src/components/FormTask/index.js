import React from 'react'
import {} from './formTask.css'
import SelectColor from './SelectColor'

export default class FormTask extends React.Component {
    render() {
        return (
            <form className="formTask">
                <textarea className="formTask__field" placeholder="enter your task here..."></textarea>
                <SelectColor/>
                <button className="formTask__button">add task</button>
            </form>
        )
    }
}