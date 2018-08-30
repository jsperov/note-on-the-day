import React from 'react';
import { LocalStorage } from '../../db';
import FormTask from '../FormTask/';
import ViewTasks from '../ViewTasks/';

export default class Task extends React.Component {
  constructor() {
    super();
    this.state = {
      color: null,
      isActive: null,
      tasks: new LocalStorage().getStorage('tasks'),
    };
  }

  addTask = (event) => {
    event.preventDefault();

    const taskField = event.target.parentNode.querySelector('.formTask__field');

    if (!taskField.value) return;

    this.state.tasks.push({
      description: taskField.value,
      backgroundTask: this.state.color,
    });

    localStorage.setItem('tasks', JSON.stringify(this.state.tasks));

    this.setState({
      tasks: this.state.tasks,
    });

    taskField.value = '';
  };

  createNewTask = (color) => {
    this.setState({ color, isActive: color });
  };

  render() {
    return (
      <div id="home" className="container">
        <FormTask
          background={this.state.color}
          createNewTask={this.createNewTask}
          isActive={this.state.isActive}
          addTask={this.addTask}
        />
        <ViewTasks tasks={this.state.tasks} />
      </div>
    );
  }
}
