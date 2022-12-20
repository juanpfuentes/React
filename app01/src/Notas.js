import React from 'react'

import './App.css'

const Nota = ({ nota, showAll }) => (
  <tr className={nota.important && showAll ? 'important' : ''}>
    <td>{nota.content}</td>
    <td>{nota.date}</td>
    <td>{nota.important ? '✔' : ''}</td>
  </tr>
)
const Notas = ({ notas, showAll }) => (
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
        <Nota key={x.id} nota={x} showAll={showAll} />
      ))}
    </tbody>
  </table>
)

export default Notas
