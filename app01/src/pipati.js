import React, { useState } from 'react'

import logo from './logo.svg'
import './App.css'

const Ultima = ({ valor }) => <div id='ultima'>{valor}</div>
const Victorias = ({ valor }) => <div id='victorias'>{valor} victorias</div>
const Boton = ({ handleClick, texto }) => (
  <button onClick={handleClick}>{texto}</button>
)
const Jugadas = ({ valor }) => (
  <div id='jugadas'>
    <ul>
      {valor.map((x, i) => (
        <li key={i}>{x}</li>
      ))}
    </ul>
  </div>
)

const App = () => {
  const [estado, setEstado] = useState({
    ultima: '',
    victorias: 0,
    jugadas: []
  })
  const jugar = eleccion => {
    const nombres = ['Piedra', 'Papel', 'Tijeras']
    const computer = Math.floor(Math.random() * 3) + 1
    let result = nombres[eleccion - 1] + ' vs ' + nombres[computer - 1]
    let win = 0
    if (eleccion == (computer % 3) + 1) {
      result += ' ¡Victoria!'
      win++
    } else if (eleccion == computer) {
      result += ' Empate'
    } else {
      result += ' ¡¡DERROTA!! MWA'
    }
    setEstado({
      ultima: result,
      victorias: estado.victorias + win,
      jugadas: estado.jugadas.concat([result])
    })
  }

  return (
    <div id='container'>
      <Ultima valor={estado.ultima} />
      <Victorias valor={estado.victorias} />
      <Boton handleClick={() => jugar(1)} texto='Piedra' />
      <Boton handleClick={() => jugar(2)} texto='Papel' />
      <Boton handleClick={() => jugar(3)} texto='Tijeras' />
      <Jugadas valor={estado.jugadas} />
    </div>
  )
}

export default App
