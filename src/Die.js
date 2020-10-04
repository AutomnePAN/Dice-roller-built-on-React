import React, { Component } from 'react';
import "./Die.css"



class Die extends Component {
    defaultProps={
        num: 1
    }

    constructor(props){
        super(props)
        this.nameofdigit = {
            1: 'one',
            2: 'two',
            3: 'three',
            4: 'four',
            5: 'five',
            6: 'six'
        }
    }

    

    render() {
        return (
            <div>
                <i className={`dice fas fa-dice-${this.nameofdigit[this.props.num]}
                    dice--${this.props.num > 3 ? 'red' : 'blue'}
                    ${this.props.rolling ? "shaking": ""}`}></i>
            </div>
        )
    }
}

export default Die