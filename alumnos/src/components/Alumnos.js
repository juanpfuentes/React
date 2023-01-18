import React, { useContext } from 'react'
import Table from 'react-bootstrap/Table'
import { BsFillPencilFill, BsTrash } from 'react-icons/bs'
import '../App.css'
import Contexto from './Contexto'

const Alumno = ({ alumno }) => {
  const { editAlumno, deleteAlumno } = useContext(Contexto)
  return (
    <tr>
      <td>{alumno.nombre}</td>
      <td>{alumno.email}</td>
      <td>{alumno.nota}</td>
      <td>
        <BsFillPencilFill onClick={() => editAlumno(alumno.id)} />{' '}
        <BsTrash onClick={() => deleteAlumno(alumno.id)} />
      </td>
    </tr>
  )
}
const Alumnos = ({ alumnos }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Mail</th>
          <th>Nota</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {alumnos.map(x => (
          <Alumno key={x.id} alumno={x} />
        ))}
      </tbody>
    </Table>
  )
}

export default Alumnos
