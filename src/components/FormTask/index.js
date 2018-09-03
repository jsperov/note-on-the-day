import React from 'react';
import PropTypes from 'prop-types';
import assignPropTypes from 'assign-prop-types';

import { TextArea } from '../UI/TextArea';
import { SelectColor } from './SelectColor';
import {} from './formTask.css';

export const FormTask = assignPropTypes({
  createNewTask: PropTypes.func,
  active: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
})(({
  addTask,
  createNewTask,
  active,
  background,
}) => (
  <form className="formTask">
    <TextArea
      className="formTask__field"
      style={{ background }}
      placeholder="enter your task here..."
    />
    <SelectColor
      createNewTask={createNewTask}
      active={active}
    />
    <button className="formTask__button" onClick={addTask}>
      add task
    </button>
  </form>
));
