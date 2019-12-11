import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
class Usuario extends React.Component {
    render() {
        var textStyle = {
            fontSize: 18,
            fontFamily: "sans-serif",
            color: "#333",
            fontWeight: "bold"
        };
        var boxStyle={
            border:  "solid 1px grey",
            boxShadow: "5px 5px 5px grey",
            width: "20%",
            display:"inline-block",
            margin: "0 30px",
            textAlign:"center"
        }

        return (
                <div style={boxStyle}>
                    <img src={this.props.imagen} alt="imagen"/>
                    <div style={textStyle}>
                        {this.props.nombre}
                    </div>
                </div>
                );
    }
}
class Usuarios extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usuarios: []
        }
    }
    componentDidMount() {
        fetch("https://randomuser.me/api/?results=3")
                .then(response => response.json())
                .then(data => {
                    //let a=JSON.parse(data);
                    this.setState({usuarios: data.results});
                    console.log(data.results);
                })
    }
    render() {
        var textStyle = {
            fontSize: 72,
            fontFamily: "sans-serif",
            color: "#333",
            fontWeight: "bold"
        };

        const filas = this.state.usuarios.map((fila, index) => {
            return (<Usuario key={index} nombre={fila.name.first + " " + fila.name.last} imagen={fila.picture.large} />);
        }
        );
        return (
                <div style={textStyle}>
                    {filas}
                </div>
                );
    }
}

class App extends Component


{
    render() {

        return (
                <>
                <Usuarios/>
                <Usuarios/>
                <Usuarios/>
                </>
                );
    }
}



;
export default App;
