import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class Circulo extends React.Component {
    render() {
        var circuloStyle = {
            padding: 10,
            margin: 20,
            display: "inline-block",
            backgroundColor: this.props.bgColor,
            borderRadius: "50%",
            width: 100,
            height: 100
        };
        return (
                <div style={circuloStyle}>
                </div>
                );
    }
}
function verCirculo() {
    let colores = ["#393E41", "#E94F37", "#1C89BF", "#A1D363"];
    let ran = Math.floor(Math.random() * colores.length);
    return <Circulo bgColor={colores[ran]} />;
}
class App extends Component
{
    render() {

        return (
                <div>
                {verCirculo()}{verCirculo()}{verCirculo()}    
                </div>
                );
    }
}

export default App;
