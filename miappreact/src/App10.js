import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Cuadrado extends Component {
    render() {
        const estilo = {
            padding: 10,
            margin: 20,
            display: "inline-block",
            backgroundColor: this.props.bgColor,
            width: 100,
            height: 100
        };
        return (
                <div style={estilo}>
                </div>
                );
    }
}
class Color extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: this.props.color
        };
    }
    cambio = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
        this.props.cambiaColor(value);
    }
    render() {
        return (
                <div>
                    <input type="text" name="color" value={this.state.color} onChange={this.cambio}/>
                </div>
                );
    }
}
class Tarjeta extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "red"
        };
    }
    isColor = (strColor) => {
        const s = new Option().style;
        s.color = strColor;
        return s.color !== '';
    }

  //  shouldComponentUpdate(nextProps, nextState) {
   //     return this.isColor(nextState.color);

   // }

    cambiaColor = (color) => {
         this.setState({color: color});
    }
    render() {
        return (
                <div>
                    <Cuadrado bgColor={this.state.color}/>
                    <Color color={this.state.color} cambiaColor={this.cambiaColor}/>
                
                </div>
                );
    }
}
;
class App extends Component
{
    render() {
        return (
                <Tarjeta/>
                );
    }
}

export default App;
