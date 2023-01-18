import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Contexto from './Contexto'
import React, { useContext } from 'react'

const FormAlumno = () => {
  const { nuevoAlumno, setNuevoAlumno } = useContext(Contexto)

  const handleChange = event => {
    const name = event.target.name
    const value = event.target.value
    setNuevoAlumno({
      ...nuevoAlumno,
      [name]: value
    })
  }

  return (
    <Form>
      <Form.Group className='mb-3' controlId='formNombre'>
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          name='nombre'
          type='text'
          value={nuevoAlumno.nombre}
          placeholder='Introduzca nombre'
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formMail'>
        <Form.Label>Email</Form.Label>
        <Form.Control
          name='email'
          type='email'
          value={nuevoAlumno.email}
          placeholder='Introduzca email'
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formNota'>
        <Form.Label>Nota</Form.Label>
        <Form.Control
          name='nota'
          type='number'
          value={nuevoAlumno.nota}
          placeholder='Introduzca nota'
          onChange={handleChange}
        />
      </Form.Group>
    </Form>
  )
}

export default FormAlumno
