import React from 'react';
import { LocalStorage } from '../../db';
import { FormTask } from '../FormTask/';
import { ViewTasks } from '../ViewTasks/';

export default class Task extends React.Component {
  constructor() {
    super();
    this.state = {
      color: 'white',
      activeColor: null,
      tasks: new LocalStorage().getStorage('tasks'),
    };
  }

  addTask = (event) => {
    event.preventDefault();

    const { tasks } = this.state;
    const taskField = event.target.parentNode.querySelector('.formTask__field');

    if (!taskField.value) return;

    this.setState(state => ({
      tasks: [
        ...state.tasks,
        {
          description: taskField.value,
          backgroundTask: this.state.color,
        }],
    }), localStorage.setItem('tasks', JSON.stringify(tasks)));
  };

  clearForm = () => {
    this.setState({
      value: '',
    });
  }

  createNewTask = (color) => {
    this.setState({ color, activeColor: color });
  };

  render() {
    return (
      <div id="home" className="container">
        <FormTask
          background={this.state.color}
          createNewTask={this.createNewTask}
          active={this.state.activeColor}
          addTask={this.addTask}
        />
        <ViewTasks tasks={this.state.tasks} />
      </div>
    );
  }
}
