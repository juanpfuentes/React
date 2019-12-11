import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Gelocalizador extends Component {
    constructor(props) {
        super(props);

        this.state = {
            latitud: null,
            longitud: null
        };

    }
    localizado = (posicion) => {
        this.setState({
            latitud:posicion.coords.latitude,
            longitud:posicion.coords.longitude
        });
    }
    componentDidMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.localizado);
        }
    }
    render() {
        return (
                <div>
                    <h1>Geolocation:</h1>
                    <div>Latitude: {this.state.latitud}</div> 
                    <div>Longitude: {this.state.longitud}</div> 
                </div>
                );
    }
}
class App extends Component
{
    render() {
        return (
                <Gelocalizador/>
                );
    }
}

export default App;
