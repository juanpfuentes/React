import logo from './logo.svg';
import './App.css';

let Hola=()=>(<p>Hola que tal</p>)
let Fecha=()=>{  
  const now = new Date();
  return (<p>Estamos a {now.toLocaleDateString()}</p>)
}

const App02 = () => (
  <div id="container">
    <Hola/>
    <Fecha/>
  </div>
  )


export default App02;
