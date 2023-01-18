import { useReducer } from 'react'

function reducer (state, action) {
  switch (action.type) {
    case 'sumar':
      return {
        ...state,
        result: state.a + state.b
      }
    case 'restar':
      return {
        ...state,
        result: state.a - state.b
      }
    case 'multiplicar':
      return {
        ...state,
        result: state.a * state.b
      }
    case 'dividir':
      return {
        ...state,
        result: state.a / state.b
      }
    case 'change':
      return {
        ...state,
        [action.payload.name]: action.payload.value
      }
  }
  throw Error('Unknown action: ' + action.type)
}

const initialState = { a: 0, b: 0, result: 0 }

export default function Form () {
  const [state, dispatch] = useReducer(reducer, initialState)

  function handleInputChange (e) {
    let name = e.target.name
    let value = Number(e.target.value)
    dispatch({
      type: 'change',
      payload: { name, value }
    })
  }

  return (
    <>
      <input
        name='a'
        type='number'
        value={state.a}
        onChange={handleInputChange}
      />
      <input
        name='b'
        type='number'
        value={state.b}
        onChange={handleInputChange}
      />
      <button onClick={() => dispatch({ type: 'sumar' })}>+</button>
      <button onClick={() => dispatch({ type: 'restar' })}>-</button>
      <button onClick={() => dispatch({ type: 'multiplicar' })}>*</button>
      <button onClick={() => dispatch({ type: 'dividir' })}>/</button>
      <h4>{state.result}</h4>
    </>
  )
}
