import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router';

import logo from './logo.svg';
import './App.css';
class Boton extends Component {
    mas = () => {
        this.props.mas(0);
    }
    render() {

        return (
            <button onClick={this.mas}>+</button>
        );
    }
}
;
class Fila extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valor: this.props.valor
        }
    }
    menos = () => {
        this.props.menos(this.props.indice);
    }
    cambiar = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
        this.props.cambiar(parseInt(value), this.props.indice);
    }
    render() {
        return (
            <p><input type="number" name="valor" value={this.state.valor} onChange={this.cambiar}></input>
                <button onClick={this.menos}>-</button>
            </p>
        );
    }
}
class Total extends Component {
    render() {
        return (
            <p>Total:{this.props.suma}</p>
        )
    }
}
class Tabla extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numeros: [1, 2, 90, 0, 45]
        };

    }
    mas = (valor) => {
        this.setState({ numeros: [...this.state.numeros, valor] });
    }
    menos = (index) => {
        this.setState({
            numeros: this.state.numeros.filter((numero, i) => i != index)
        });
    }
    cambiar = (valor, index) => {
        this.setState({
            numeros: this.state.numeros.map((numero, i) => i == index ? valor : numero)
        });
    }
    render() {
        console.log(this.state.numeros);
        const filas = this.state.numeros.map((valor, index) => {
     
            return (<Fila key={Math.random()} indice={index} valor={valor} menos={this.menos} cambiar={this.cambiar} />);
        });
        const suma = this.state.numeros.reduce((a, b) => a + b, 0);
        return (
            <div>
                <Boton mas={this.mas} />
                {filas}
                <Total suma={suma} />
            </div>
        );
    }
}
;
class App extends Component {
    render() {
        return (
            <Tabla />
        );
    }
}



;
export default App;
