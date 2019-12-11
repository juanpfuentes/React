import React from 'react';
import './App.css';
import {
BrowserRouter as Router,
        Switch,
        Route,
        Link,
        useParams,
        Redirect
} from "react-router-dom";
import Form from './Form';
import Categorias from './Categorias';
import Editar from './Editar';
function App() {
    return (
            <Router>
                <nav className="navbar navbar-expand-sm bg-light">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="add">Añadir categoría</a>
                        </li>
                    </ul>
                </nav>
                <Switch>
            
                <Route path="/add" component={Form}/>
            
            
                <Route path="/edit/:id"  component={Edit} />
                <Route exact path="/">
                    <Categorias />
                </Route>
            
                </Switch>
            </Router>
            );
}
function Edit() {
    let {id} = useParams();

    return (
            <Form id={id}/>
            );
}
export default App;
