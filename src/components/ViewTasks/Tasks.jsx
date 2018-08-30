import React from 'react';
import assignPropTypes from 'assign-prop-types';
import PropTypes from 'prop-types';

const Tasks = assignPropTypes({
  task: PropTypes.objectOf(PropTypes.any),
})(({ task }) => (
  <li className="viewTask__item" style={{ background: task.backgroundTask }}>
    {task.description}
  </li>
));

export { Tasks };

