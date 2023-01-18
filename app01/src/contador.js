import React, { useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)

  const setToZero = () => setCounter(0)

  return (
    <div>
      <div>{counter}</div>
      <button onClick={increaseByOne}>Mas</button>
      <button onClick={decreaseByOne}>Menos</button>
      <button onClick={setToZero}>Cero</button>
    </div>
  )
}

export default App
