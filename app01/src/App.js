import logo from './logo.svg';
import './App.css';

const App = () => {  const now = new Date()
return (
  <div id="container">
    <p>Hola que tal, es {now.toLocaleDateString()}</p>
  </div>
  )
}

export default App;
