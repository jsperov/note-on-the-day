import React from 'react';
import PropTypes from 'prop-types';
import assignPropTypes from 'assign-prop-types';

import { SelectColor } from './SelectColor';
import {} from './formTask.css';

export const FormTask = assignPropTypes({
  createNewTask: PropTypes.func,
  isActive: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
})(({
  addTask,
  createNewTask,
  isActive,
  background,
}) => (
  <form className="formTask">
    <textarea
      className="formTask__field"
      style={{ background }}
      placeholder="enter your task here..."
    />
    <SelectColor
      createNewTask={createNewTask}
      isActive={isActive}
    />
    <button className="formTask__button" onClick={addTask}>
      add task
    </button>
  </form>
));
