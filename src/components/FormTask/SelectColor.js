import React from 'react'

const colors = ['AliceBlue', 'AntiqueWhite', 'Azure', 'DarkTurquoise', 'DeepSkyBlue', 'FloralWhite', 'SpringGreen']
    .map((color, index) => <li key={index} className="selectColor__button" style={{ background: color}}></li>)

export default class SelectColor extends React.Component {
    render() {
        return (
            <ul className="selectColor">
                {colors}
            </ul>
        )
    }
}