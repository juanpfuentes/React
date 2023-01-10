import React, { useContext } from 'react'
import './App.css'
import NotasContext from './Contexto'

const Nota = ({ nota }) => {
  const { showAll, toggleImportance, editNota } = useContext(NotasContext)
  return (
    <tr className={nota.important && showAll ? 'important' : ''}>
      <td onClick={() => editNota(nota.id)}>{nota.content}</td>
      <td>{nota.date}</td>
      <td onClick={() => toggleImportance(nota.id)}>
        {nota.important ? '✔' : ''}
      </td>
    </tr>
  )
}
const Notas = ({ notas }) => {
  return (
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
          <Nota key={x.id} nota={x} />
        ))}
      </tbody>
    </table>
  )
}

export default Notas
