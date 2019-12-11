import React from "react";
import {
BrowserRouter as Router,
        Switch,
        Route,
        Link,
        useParams,
        Redirect
        } from "react-router-dom";

export default function App() {
    return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                               <li>
                                <Link to="/acerca">Acerca</Link>
                            </li>
                            <li>
                                <Link to="/users">Users</Link>
                            </li>
                            <li>
                                <Link to="/usuario/1">us1</Link>
                            </li>
                            <li>
                                <Link to="/usuario/2">us2</Link>
                            </li>
                        </ul>
                    </nav>
            
            
                    <Switch>
                    <Route path="/usuario/:id"  component={Usuario} />
                       
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route exact path="/acerca">
                        <Acerca />
                    </Route>
                    <Route path="/users" component={Users}/>
                    <Route exact path="/">
                        <Home />
                    </Route>
            
                    </Switch>
                </div>
            </Router>
            );
}

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}
function Acerca() {
    return <Redirect to='/about' />;
}
function Users() {
    return <h2>Users</h2>;
}

function Usuario() {
    
    let {id} = useParams();

    return (
            <div>
                <h3>ID: {id}</h3>
            </div>
            );
}