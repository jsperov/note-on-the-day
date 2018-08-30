import React from 'react';

const colors = [
  'AliceBlue',
  'AntiqueWhite',
  'Azure',
  'DarkTurquoise',
  'Thistle',
  'FloralWhite',
  'Tomato',
  'Silver',
  'Salmon',
];

const ColorToggle = ({ color, createNewTask, isActive }) => (
  <li
    className="selectColor__button"
    onClick={() => createNewTask(color)}
    style={{
      background: color,
      border: isActive === color ? `1px solid #ccc` : '1px solid #171717'
    }}
  />
);

export class SelectColor extends React.PureComponent {
  render() {
    return (
      <ul className="selectColor">
        {colors.map((color, index) => (
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
