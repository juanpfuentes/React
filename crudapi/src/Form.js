import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                    id:this.props.id||0,
                    nombre:this.props.nombre||""
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
        console.log('https://localhost:44333/api/Categories/' + (this.state.id || ""))
        fetch('https://localhost:44333/api/Categories/' + (this.state.id || ""), params)
                .then(response => response.json())
                .then(json => {
                    this.props.history.push('/');
                }
                )
                .catch(error => {
                    console.log(error);
             
                });
    }
    render() {

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
