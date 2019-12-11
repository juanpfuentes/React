import React from 'react';


class Categoria extends React.Component {
    delete=()=>{
        this.props.delete(this.props.id);
    }
    render() {

        return (
                <tr>
                    <td>{this.props.id}</td>
                    <td>{this.props.nombre}</td>
                    <td>{this.props.num}</td>
                    <td><a className="btn btn-success" href={"edit/"+this.props.id}>Editar</a></td>
                    <td><button className="btn btn-danger" onClick={this.delete}>Borrar</button></td>
                </tr>
                );
    }
}
class Categorias extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categorias: []
        }
    }
    componentDidMount() {
        fetch("https://localhost:44333/api/Categories")
                .then(response => response.json())
                .then(data => {
                    //let a=JSON.parse(data);
                    this.setState({categorias: data});
                    console.log(data);
                })
    }
    delete = (id) => {
        const params = {
            method: 'DELETE',
             headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
        };
        fetch('https://localhost:44333/api/Categories/' + id, params)
                .then(response => response.json())
                .then(json => {
                    console.log(json);
            this.componentDidMount();
            /*
                    this.setState(
                            {categorias: this.state.categorias.filter((item, index) => item.id != id)}
                    )*/
                }
                )
                .catch(error => console.log(error));
    }
    render() {


        const filas = this.state.categorias.map((fila, index) => {
            return (<Categoria key={fila.id} id={fila.id} nombre={fila.nombre} num={fila.numJuegos} delete={this.delete} />);
        }
        );
        return (
                <table className="table">
                    <thead><tr><td>Id</td><td>nombre</td><td>Num. Juegos</td><td>Acciones</td></tr></thead>
                    <tbody>
                        {filas}</tbody>
                </table>
                );
    }
}

export default Categorias;
