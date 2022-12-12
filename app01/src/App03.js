import logo from './logo.svg';
import './App.css';

let Hola=(props)=>(<p>Hola {props.nombre} ¿qué tal?</p>)
let Fecha=()=>{  
  const now = new Date();
  return (<p>Estamos a {now.toLocaleDateString()}</p>)
}

const App = () => (
  <div id="container">
    <Hola nombre="Ana Pi"/>
    <Hola nombre="Juan Buj"/>
    <Fecha/>
  </div>
  )


export default App;
