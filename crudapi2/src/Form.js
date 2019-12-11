import React from 'react';
import { Redirect} from "react-router-dom";
class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: ""
        }

    }
    cambio = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }
    enviar = () => {
        const params = {
            method: this.state.id ? 'PUT' : 'POST',
            body: JSON.stringify(this.state),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        };

        fetch('https://localhost:44333/api/Categories/' + (this.state.id || ""), params)
                .then(response => response.json())
                .then(json => {
                    this.props.history.push('/');
                }
                )
                .catch(error => {
                    this.setState({redirect: true});

                });
    }
    componentDidMount() {
        if (this.props.id) {

            fetch("https://localhost:44333/api/Categories/" + this.props.id)
                    .then(response => response.json())
                    .then(data => {

                        this.setState({...data});

                    })
                    .catch(error => console.log(error.message))
        }
    }
    render() {
        if (this.state.redirect) {
            return <Redirect to='/'/>;
        }
        return (
                <form className="form-group">           
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" className="form-control" name="nombre" value={this.state.nombre} onChange={this.cambio} />             
                    <input className="btn btn-success" type="button" onClick={this.enviar} value={this.state.id ? "Actualizar" : "Añadir"}/>
                </form>
                );
    }
}
export default Form;
