import React, { useState, useReducer } from 'react'

const App = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  function reducer (state, action) {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 }
      case 'decrement':
        return { count: state.count - 1 }
      case 'cero':
        return { count: 0 }
      default:
        throw new Error()
    }
  }

  return (
    <div>
      <div>{state.count}</div>
      <button onClick={() => dispatch({ type: 'increment' })}>Mas</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Menos</button>
      <button onClick={() => dispatch({ type: 'cero' })}>Cero</button>
    </div>
  )
}

export default App
