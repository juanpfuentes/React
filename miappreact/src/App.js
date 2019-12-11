import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Form extends Component {
    constructor(props) {
        super(props)

        this.initialState = {
            nombre: '',
            nota: '',
        }

        this.state = this.initialState;
    }
    cambio = event => {
        const {name, value} = event.target;

        console.log(name + "|" + value);
        this.setState({
            [name]: value
        })
    }
    enviar = () => {
        this.props.mas(this.state.nombre, this.state.nota);
        this.setState(this.initialState);
    }
    render() {
        return (
                <form>
                    <label>Nombre</label>
                    <input type="text" name="nombre" value={this.state.nombre} onChange={this.cambio} />
                    <label>Nota</label>
                    <input type="text" name="nota" value={this.state.nota} onChange={this.cambio} />
                    <input type="button" onClick={this.enviar} value="Añadir"/>
                </form>
                );
    }
}
class Cabecera extends Component {
    render() {

        return (
                <tr><th>Alumno</th><th>Nota</th></tr>
                );
    }
}
;
class Fila extends Component {
    eliminar=(e)=>{
        e.stopPropagation();
        this.props.menos(this.props.indice);
    }
    render() {
        return (
                <tr onClick={() => this.props.mas(this.props.nombre, this.props.nota)}>
                    <td>{this.props.nombre}</td><td>{this.props.nota}</td>
                            <td><input type="button" value="Borrar" onClick={this.eliminar}/></td>
                </tr>
                );
    }
}
;
class Tabla extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alumnos: this.props.alumnos,
            cont: 0
        };
        this.mas = this.mas.bind(this);
    }
    mas(nombre, nota) {

        this.setState({alumnos: [...this.state.alumnos, {nombre: nombre, nota: nota}]});
    }
    menos = (index) => {
        this.setState({
            alumnos: this.state.alumnos.filter((alumno, i) => i != index)
        });
    }

    render() {

        const filas = this.state.alumnos.map((fila, index) => {
            return (<Fila key={index} indice={index} nombre={fila.nombre} nota={fila.nota} menos={this.menos} mas={this.mas}/>);
        }
        );
        return (
                <div>
                    <Form mas={this.mas}/>
                    <button onClick={() => this.mas("Ana", 6)}>Añadir</button> <button onClick={() => this.menos(0)}>Quitar</button>
                    <table>
                        <thead>
                        <Cabecera/></thead>
                        <tbody>
                            {filas}
                        </tbody>
                    </table>
                </div>
                );
    }
}
;
class App extends Component


{
    render() {
        const alumnos = [{nombre: "Ana", nota: 6}, {nombre: "Pep", nota: 4}, {nombre: "Eva", nota: 8}, {nombre: "Ot", nota: 7}];
        return (
                <Tabla alumnos={alumnos}/>
                );
    }
}



;
export default App;
