import React from 'react';
import { Tasks } from './Tasks';
import './viewTasks.css';

export class ViewTasks extends React.PureComponent {
  static propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.any),
  };

  render() {
    return (
      <ul className="viewTasks">
        {this.props.tasks.map(task => (
          <Tasks task={task} />
        ))}
      </ul>
    );
  }
}
