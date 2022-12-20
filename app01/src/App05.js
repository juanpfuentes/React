import React, { useState } from 'react'

import logo from './logo.svg'
import './App.css'

const App = () => {
  const [counter, setCounter] = useState({ valor: 0, click: 0 })

  const sumar = () => {
    setCounter({ valor: counter.valor + 1, click: counter.click + 1 })
  }
  const restar = () => {
    setCounter({ valor: counter.valor - 1, click: counter.click + 1 })
  }
  const cero = () => {
    setCounter({ valor: 0, click: counter.click + 1 })
  }
  const foo = () => {
    counter.valor++
    counter.click++
    console.log(counter)
    setCounter({ ...counter })
  }
  return (
    <div id='container'>
      <div id='contador'>{counter.valor}</div>
      <div id='clicks'>{counter.click}</div>
      <button onClick={sumar}> más </button>
      <button onClick={restar}> menos </button>
      <button onClick={cero}> cero </button>{' '}
      <button onClick={foo}> foo </button>{' '}
    </div>
  )
}

export default App
