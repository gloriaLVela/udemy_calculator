import React, { Component } from 'react';

let calButtons = ["(", ")", "Clear", "Delete", 
                      "7", "8", "9", "%", 
                      "4", "5", "6", "x", 
                      "1", "2", "3", "-", 
                      "0", ".", "=", "+"];
     
//let btnArray = () => {
//    calButtons.map(btnValue => <button>{btnValue}</button>);
//}

class Calculator extends Component {


    render() {
        return (
            calButtons.map(btnValue => <button>{btnValue}</button>)
        )
    }
}

export default Calculator;