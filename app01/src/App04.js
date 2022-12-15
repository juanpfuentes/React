import React, { useState } from 'react'

import logo from './logo.svg'
import './App.css'

const App = () => {
  const [counter, setCounter] = useState(0)

  const handleClick = () => {
    setCounter(counter + 1)
  }
  return (
    <div id='container'>
      <div id='contador'>{counter}</div>
      <button onClick={handleClick}> plus </button>{' '}
    </div>
  )
}

export default App
