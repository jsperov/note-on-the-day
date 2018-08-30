import React from 'react';
import PropTypes from 'prop-types';
import assignPropTypes from 'assign-prop-types';

import { SelectColor } from './SelectColor';
import {} from './formTask.css';

export const FormTask = assignPropTypes({
  createNewTask: PropTypes.func,
  isActive: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
})(() => (
  <form className="formTask">
    <textarea
      className="formTask__field"
      style={{ background: this.props.background }}
      placeholder="enter your task here..."
    />
    <SelectColor
      createNewTask={this.props.createNewTask}
      isActive={this.props.isActive}
    />
    <button className="formTask__button" onClick={this.props.addTask}>
      add task
    </button>
  </form>
));
