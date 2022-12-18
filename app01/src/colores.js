import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

// ES UN COMPONENTE
function FavoriteColor () {
  //hook de estado (state) Me define:
  // nombre de la variable, nombre de la función y valor inicial
  const [color, Pepito] = useState('rosa palo')
  // Cada vez que se cambie el valor de color se repinta el componente
  const azul = () => {
    // Solo podemos cambiar el valor con la funcíón
    Pepito('blue')
  }
  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button type='button' onClick={azul}>
        Blue
      </button>
      <button type='button' onClick={() => Pepito('red')}>
        Red
      </button>
      <button type='button' onClick={() => Pepito('pink')}>
        Pink
      </button>
      <button type='button' onClick={() => Pepito('green')}>
        Green
      </button>
    </>
  )
}
export default FavoriteColor
