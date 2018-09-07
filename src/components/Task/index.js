import React from 'react';
import { LocalStorage } from '../../db';
import { FormTask } from '../FormTask/';
import { ViewTasks } from '../ViewTasks/';

const Storage = new LocalStorage();

class Task extends React.Component {
  state = {
    color: 'white',
    activeColor: null,
    tasks: Storage.getStorage('tasks'),
  }

  addTask = (event) => {
    event.preventDefault();

    const { color } = this.state;
    const taskField = event.target.parentNode.querySelector('.formTask__field');

    if (!taskField.value) return;

    this.setState(state => ({
      tasks: [
        ...state.tasks,
        {
          description: taskField.value,
          backgroundTask: color,
        }],
    }), () => Storage.recordStorage('tasks', this.state.tasks));
  };

  clearForm = () => {
    this.setState({
      value: '',
    });
  }

  createNewTask = (event, color) => {
    event.preventDefault();

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

export { Task };
