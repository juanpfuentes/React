import React from 'react'

import './App.css'

const Nota = ({ nota, showAll, toggle }) => (
  <tr className={nota.important && showAll ? 'important' : ''}>
    <td>{nota.content}</td>
    <td>{nota.date}</td>
    <td onClick={() => toggle(nota.id)}>{nota.important ? '✔' : ''}</td>
  </tr>
)
const Notas = ({ notas, showAll, toggle }) => (
  <table id='notes'>
    <thead>
      <tr>
        <th>Nota</th>
        <th>Fecha</th>
        <th>Importante</th>
      </tr>
    </thead>
    <tbody>
      {notas.map(x => (
        <Nota key={x.id} nota={x} showAll={showAll} toggle={toggle} />
      ))}
    </tbody>
  </table>
)

export default Notas
