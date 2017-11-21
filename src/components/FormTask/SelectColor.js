import React from 'react'

const colors = ['AliceBlue', 'AntiqueWhite', 'Azure', 'DarkTurquoise', 'DeepSkyBlue', 'FloralWhite', 'SpringGreen'];

const ColorToggle = ({color, createNewTask, isActive}) => <li className="selectColor__button" onClick={() => createNewTask(color)} style={{ background: color, border: isActive === color ? `1px solid #ccc`: '1px solid #171717' }}></li>

export default class SelectColor extends React.Component {
    render() {
        return (
            <ul className="selectColor">
                {colors.map((color, index) => <ColorToggle color={color} createNewTask={this.props.createNewTask} isActive={this.props.isActive} key={index} />)}
            </ul>
        ) 
    }
}