import React from 'react';

import Form from './Form';
class Editar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id:0,
            nombre: ""
        }
    }
    componentDidMount() {
        console.log("https://localhost:44333/api/Categories/" + this.props.id);
        fetch("https://localhost:44333/api/Categories/" + this.props.id)
                .then(response => response.json())
                .then(data => {

                    this.setState({...data});
 
                })
                .catch(error => console.log(error.message))
    }
    render() {

        return (
                <Form key={this.state.id} {...this.state}/>
                );
    }
}
export default Editar;