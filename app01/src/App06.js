import React, {useState} from 'react';

import logo from './logo.svg';
import './App.css';

const Contador=({valor})=>(<div id="contador">{valor}</div>)

const Boton=({handleClick,texto})=>(<button onClick={handleClick}>{texto}</button>    )

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const sumar = () => {      setCounter(counter+1)  }
  const restar = () => {      setCounter(counter-1)  }
  const cero = () => {      setCounter(0)  }
  return (
    <div id="container">
      <Contador valor={counter} />
      <Boton handleClick={sumar} texto="Sumar 1" />
      <Boton handleClick={restar} texto="Restar 1" />
      <Boton handleClick={cero} texto="Poner a cero" />
      </div>
  )
}

export default App;
