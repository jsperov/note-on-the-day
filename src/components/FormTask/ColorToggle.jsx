import React from 'react';
import assignPropTypes from 'assign-prop-types';
import PropTypes from 'prop-types';

const ColorToggle = assignPropTypes({
  color: PropTypes.string,
})(({ color, createNewTask, isActive }) => (
  <li className="selectColor__button">
    <button
      onClick={(event) => { createNewTask(event, color) }}
      style={{
        background: color,
        border: isActive === color ? '1px solid #ccc' : '1px solid #171717',
      }}
    />
  </li>
));

export { ColorToggle };

