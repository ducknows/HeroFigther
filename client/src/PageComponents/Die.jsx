import React, { Component } from 'react'
import '../styles/Die.css'
import 'font-awesome/css/font-awesome.min.css'; 

class Die extends Component {
    render() {
        return <i className={`Die fas fa-dice-${this.props.face} ${this.props.rolling? 'shaking' : ''}`}></i>
    }
}

export default Die;