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
            height: 100,
        };
        return (
                <div style={circuloStyle}>
                </div>
                );
    }
}

function verCirculo(num) {
    let colores = ["#393E41", "#E94F37", "#1C89BF", "#A1D363", "#FF2178","#e5d8bf","#00818a","#f54291","#ff0000"];

    let circulos = [];
    for (let i = 0; i < num; i++) {
        let ran = Math.floor(Math.random() * colores.length);
        circulos.push(<Circulo key={i} bgColor={colores[ran]} />);
    }
    return circulos;
}

class VerCirculo extends React.Component {
    render() {
        return verCirculo(this.props.num);
    }
}
class App extends Component
{
    constructor(props){
        super(props);
        this.state={cont:0};
    }
    foo=()=>{
        this.setState({cont:0});
    }
    render() {

        return (
                <div onClick={this.foo}>
                    <VerCirculo num="3"/>   
                    {verCirculo(this.state.cont)} 
                </div>
                );
    }
}



;
export default App;
