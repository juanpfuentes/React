import React, {useState} from 'react';

import logo from './logo.svg';
import './App.css';

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const sumar = () => {      setCounter(counter+1)  }
  const restar = () => {      setCounter(counter-1)  }
  const cero = () => {      setCounter(0)  }
  return (
    <div id="container">
      <div id="contador">{counter}</div>
      <button onClick={sumar}>        más      </button>    
      <button onClick={restar}>        menos      </button> 
      <button onClick={cero}>        cero      </button>    </div>
  )
}

export default App;
