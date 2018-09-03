import React from 'react';

import { ColorToggle } from './ColorToggle';
import { COLORS } from './const';

export class SelectColor extends React.PureComponent {
  render() {
    return (
      <ul className="selectColor">
        {COLORS.map((color, index) => (
          <ColorToggle
            color={color}
            createNewTask={this.props.createNewTask}
            isActive={this.props.isActive}
            key={index}
          />
        ))}
      </ul>
    );
  }
}
