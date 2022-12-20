import React, { useState } from 'react'

import logo from './logo.svg'
import './App.css'

const Contador = ({ valor }) => <div id='contador'>{valor}</div>

const Boton = ({ handleClick, texto }) => (
  <button onClick={handleClick}>{texto}</button>
)

const App = () => {
  const [counter, setCounter] = useState(0)
  const ponValor = valor => () => {
    setCounter(counter + valor)
  }
  return (
    <div id='container'>
      <Contador valor={counter} />
      <Boton handleClick={ponValor(1)} texto='Sumar 1' />
      <Boton handleClick={ponValor(-1)} texto='Restar 1' />
      <Boton handleClick={ponValor(-counter)} texto='Poner a cero' />
      <Boton
        handleClick={() => {
          setCounter(counter + 2)
        }}
        texto='Sumar 2'
      />
      <Boton
        handleClick={() => {
          setCounter(counter + -2)
        }}
        texto='Restar 2'
      />
    </div>
  )
}

export default App
