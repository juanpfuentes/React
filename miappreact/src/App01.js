import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Cabecera extends Component {
    render() {

        return (
                <tr><th>Alumno</th><th>Nota</th></tr>
                );
    }
};
class Fila extends Component {
    render() {

        return (
                <tr><td>{this.props.nombre}</td><td>{this.props.nota}</td></tr>
                );
    }
};
class Tabla extends Component {
    render() {

        return (
                <table>
                <Cabecera/>
                <Fila nombre="Ana" nota="6"/>
                <Fila nombre="Pep" nota="4"/>
                </table>
                );
    }
};
class App extends Component {
    render() {
       
        return (
                <Tabla/>
                );
    }
}
;

export default App;
